// Chatbot logic and UI handlers
// Depends on window.knowledgeBase provided by math_knowledge_base.js

const chatWindow = document.getElementById('chatWindow');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const welcomeSection = document.getElementById('welcomeSection');

// Normalize math text (operators and vulgar fractions)
function normalizeMathInput(expr) {
    const vulgarMap = {
        '½': '1/2', '?': '1/3', '?': '2/3', '¼': '1/4', '¾': '3/4',
        '?': '1/5', '?': '2/5', '?': '3/5', '?': '4/5',
        '?': '1/6', '?': '5/6', '?': '1/8', '?': '3/8', '?': '5/8', '?': '7/8'
    };
    let out = expr;
    out = out.replace(/[×??··]/g, '*')
             .replace(/[÷??///]/g, '/')
             .replace(/–/g, '-')
             .replace(/[-]/g, '-');
    out = out.replace(/[½??¼¾??????????]/g, m => vulgarMap[m] || m);
    return out;
}

const knowledgeBase = window.knowledgeBase;

function findMatchingCategory(text) {
    const lowerText = text.toLowerCase();
    const normalizedForCalc = normalizeMathInput(lowerText.replace(/\bmodulo?\b/gi, '%')).replace(/[?,]/g, ' ');

    const arithmeticPattern = /^(what\s+is\s+|calculate\s+)?[\d.+\-*/%() ]+$/i;
    const hasOperator = /[+\-*/%]/.test(normalizedForCalc);
    const hasNumber = /\d/.test(normalizedForCalc);
    if (arithmeticPattern.test(normalizedForCalc) && hasOperator && hasNumber) {
        return null;
    }

    if (text.includes('=') && /[a-z]/.test(lowerText)) {
        return 'equation';
    }

    let bestMatch = knowledgeBase.off_topic;
    let highestScore = 0;

    for (const [, category] of Object.entries(knowledgeBase)) {
        if (category === knowledgeBase.off_topic || category === knowledgeBase.simple_arithmetic) continue;
        let score = 0;
        for (const keyword of category.keywords) {
            if (lowerText.includes(keyword)) score += keyword.length;
        }
        if (score > highestScore) {
            highestScore = score;
            bestMatch = category;
        }
    }

    if (highestScore === 0 && /^what\s+is\s+/.test(lowerText)) {
        const query = lowerText.replace(/^what\s+is\s+/, '').trim().replace(/[?!.]+$/, '');
        const specificMatches = {
            x: knowledgeBase.algebra,
            y: knowledgeBase.algebra,
            variable: knowledgeBase.algebra,
            pi: knowledgeBase.pi_info,
            'p': knowledgeBase.pi_info,
            tau: knowledgeBase.pi_info,
            't': knowledgeBase.pi_info,
            e: knowledgeBase.calculus_limits,
            function: knowledgeBase.algebra,
            sine: knowledgeBase.trigonometry,
            cosine: knowledgeBase.trigonometry,
            tan: knowledgeBase.trigonometry,
            matrix: knowledgeBase.linear_algebra,
            vector: knowledgeBase.linear_algebra,
            integral: knowledgeBase.calculus_integration,
            derivative: knowledgeBase.calculus_limits,
            probability: knowledgeBase.probability
        };
        if (specificMatches[query]) return specificMatches[query];
    }

    return bestMatch;
}

function solveEquation(equation) {
    try {
        const cleanEq = equation.toLowerCase().replace(/^(solve|what\s+is)\s+/i, '').trim();
        const parts = cleanEq.split('=');
        if (parts.length !== 2) return "Please provide an equation with an equals sign (e.g., '2x + 3 = 7').";

        let left = parts[0].trim();
        let right = parts[1].trim();
        const varMatch = cleanEq.match(/([a-z])/i);
        if (!varMatch) return "Please provide an equation with a variable (x, y, z, a, b, etc.).";
        const variable = varMatch[1].toLowerCase();

        const extractTerms = (expr, varName) => {
            let varCoeff = 0;
            let constVal = 0;
            const varPattern = new RegExp(`([+-]?\\s*\\d*\\.?\\d*)\\s*\\*?\\s*${varName}`, 'i');
            const vMatch = expr.match(varPattern);
            if (vMatch) {
                let match = vMatch[1].trim().replace(/\s+/g, '');
                if (match === '' || match === '+') varCoeff = 1;
                else if (match === '-') varCoeff = -1;
                else varCoeff = parseFloat(match);
            }
            const constPattern = /([+-]\s*\d+\.?\d*)/;
            const cMatch = expr.match(constPattern);
            if (cMatch) constVal = parseFloat(cMatch[1].replace(/\s+/g, ''));
            return { varCoeff, constVal };
        };

        const leftTerms = extractTerms(left, variable);
        const rightVal = parseFloat(right) || 0;

        if (leftTerms.varCoeff !== 0) {
            const result = (rightVal - leftTerms.constVal) / leftTerms.varCoeff;
            const solution = Number.isInteger(result) ? result : Math.round(result * 10000) / 10000;
            return `${equation.trim()} ? Solution: ${variable} = ${solution}`;
        }

        const quadPattern = new RegExp(`([+-]?\\s*\\d*\\.?\\d*)\\s*\\*?\\s*${variable}\\s*\\^?\\s*2`, 'i');
        const aMatch = left.match(quadPattern);
        if (aMatch) {
            let a = aMatch[1].trim().replace(/\s+/g, '');
            if (a === '' || a === '+') a = 1;
            else if (a === '-') a = -1;
            else a = parseFloat(a);

            const linPattern = new RegExp(`([+-]?\\s*\\d*\\.?\\d*)\\s*\\*?\\s*${variable}(?!\\s*\\^)`, 'i');
            let b = 0;
            const bMatch = left.match(linPattern);
            if (bMatch && !bMatch[0].includes('^')) {
                let bStr = bMatch[1].trim().replace(/\s+/g, '');
                if (bStr === '' || bStr === '+') b = 1;
                else if (bStr === '-') b = -1;
                else b = parseFloat(bStr);
            }

            let c = -rightVal;
            const cMatch = left.match(/([+-]\s*\d+\.?\d*)\s*$/);
            if (cMatch) c += parseFloat(cMatch[1].replace(/\s+/g, ''));

            const discriminant = b * b - 4 * a * c;
            if (discriminant < 0) return `${equation.trim()} ? Discriminant = ${discriminant} < 0. No real solutions.`;
            if (discriminant === 0) {
                const sol = -b / (2 * a);
                const solution = Number.isInteger(sol) ? sol : Math.round(sol * 10000) / 10000;
                return `${equation.trim()} ? ${variable} = ${solution} (one solution)`;
            }
            const sqrtDisc = Math.sqrt(discriminant);
            const sol1 = (-b + sqrtDisc) / (2 * a);
            const sol2 = (-b - sqrtDisc) / (2 * a);
            const r1 = Number.isInteger(sol1) ? sol1 : Math.round(sol1 * 10000) / 10000;
            const r2 = Number.isInteger(sol2) ? sol2 : Math.round(sol2 * 10000) / 10000;
            return `${equation.trim()} ? ${variable} = ${r1} or ${variable} = ${r2}`;
        }

        return `I can solve linear and quadratic equations in any variable. Try formats like '2${variable} + 3 = 7' or '${variable}² + 5${variable} + 6 = 0'.`;
    } catch (error) {
        return "I couldn't solve that equation. Try formats like '2y + 3 = 7', 'a² + 5a + 6 = 0', or any linear/quadratic equation.";
    }
}

function calculateExpression(expression) {
    try {
        let mathPart = expression.toLowerCase().replace(/^(what\s+is|calculate)\s+/i, '').trim();
        mathPart = normalizeMathInput(mathPart.replace(/\bmodulo?\b/gi, '%'));
        if (!/^[\d.\s+\-*/%()]+$/.test(mathPart)) return 'Please provide a valid mathematical expression.';
        const result = Function('"use strict"; return (' + mathPart + ')')();
        if (Number.isInteger(result)) return `${expression.trim()} = ${result}`;
        const rounded = Math.round(result * 10000) / 10000;
        return `${expression.trim()} = ${rounded}`;
    } catch (error) {
        return "I couldn't calculate that. Please provide a valid mathematical expression like '10+2' or '5*3'.";
    }
}

async function generateAIResponse(userMessage) {
    const matchedCategory = findMatchingCategory(userMessage);
    if (matchedCategory === null) return calculateExpression(userMessage);
    if (matchedCategory === 'equation') return solveEquation(userMessage);
    const responses = matchedCategory.responses;
    return responses[Math.floor(Math.random() * responses.length)];
}

function addMessage(text, sender) {
    if (welcomeSection.style.display !== 'none') showChatInterface();

    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';

    const codePatterns = /(\b(?:def|class|import|from|if|for|while|try|except|with|return|yield|async|await|lambda)\b)|([a-zA-Z_]\w+\s*=)|(\[.*\])|(\{.*\})|(\(.*\))/g;
    const hasCode = codePatterns.test(text);
    const hasMultilineIndicators = text.includes('\n') && (
        text.includes('def ') || text.includes('class ') || text.includes('import ') ||
        text.includes('for ') || text.includes('while ') || text.includes('if ') ||
        text.includes('try:') || text.includes('except') || text.includes('   ') ||
        (text.match(/\n/g) || []).length > 2
    );

    if (hasCode || hasMultilineIndicators) {
        const lines = text.split('\n');
        let buffer = [];
        let inCodeBlock = false;
        let codeLines = [];

        lines.forEach(line => {
            const isCodeLine = /^\s*(def|class|import|from|if|for|while|try|except|with|return|yield|async|await|lambda|[a-zA-Z_]\w+\s*=|\[|\{|\(|>>>|\.|\#)/.test(line);
            const isIndented = /^\s{2,}/.test(line) && line.trim().length > 0;

            if (isCodeLine || isIndented || inCodeBlock) {
                codeLines.push(line);
                inCodeBlock = true;
            } else {
                if (codeLines.length > 0) {
                    const codeDiv = document.createElement('div');
                    codeDiv.className = 'code-block';
                    codeDiv.textContent = codeLines.join('\n');
                    contentDiv.appendChild(codeDiv);
                    codeLines = [];
                    inCodeBlock = false;
                }
                if (line.trim().length > 0) buffer.push(line);
            }
        });

        if (codeLines.length > 0) {
            const codeDiv = document.createElement('div');
            codeDiv.className = 'code-block';
            codeDiv.textContent = codeLines.join('\n');
            contentDiv.appendChild(codeDiv);
        }

        if (buffer.length > 0) {
            const paragraph = document.createElement('p');
            paragraph.textContent = buffer.join('\n');
            contentDiv.appendChild(paragraph);
        }
    } else {
        const paragraph = document.createElement('p');
        paragraph.innerHTML = text.replace(/`([^`]+)`/g, '<code>$1</code>').replace(/\n/g, '<br>');
        contentDiv.appendChild(paragraph);
    }

    const actions = document.createElement('div');
    actions.className = 'message-actions';

    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-btn';
    copyBtn.type = 'button';
    copyBtn.innerHTML = `<img alt="Copy" src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' stroke='%231a5f7a' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='9' y='9' width='11' height='11' rx='2'/><rect x='4' y='4' width='11' height='11' rx='2'/></svg>">`;
    copyBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        navigator.clipboard.writeText(text).catch(() => {});
    });
    actions.appendChild(copyBtn);

    if (sender === 'ai') {
        const micBtn = document.createElement('button');
        micBtn.className = 'mic-btn';
        micBtn.type = 'button';
        micBtn.innerHTML = `<img alt="Speak" src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' stroke='%231a5f7a' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M12 3a3 3 0 0 1 3 3v5a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3z'/><path d='M5 11a7 7 0 0 0 14 0'/><line x1='12' y1='18' x2='12' y2='22'/><line x1='8' y1='22' x2='16' y2='22'/></svg>">`;
        micBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            try {
                window.speechSynthesis.cancel();
                const utter = new SpeechSynthesisUtterance(text);
                utter.rate = 1;
                utter.pitch = 1;
                window.speechSynthesis.speak(utter);
            } catch (_) {}
        });
        actions.appendChild(micBtn);
    }

    contentDiv.appendChild(actions);
    messageDiv.appendChild(contentDiv);
    chatWindow.appendChild(messageDiv);
    scrollToBottom();
}

function scrollToBottom() {
    setTimeout(() => {
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }, 0);
}

function showChatInterface() {
    welcomeSection.style.display = 'none';
    chatWindow.style.display = 'flex';
    userInput.focus();
}

async function handleSendMessage() {
    const message = userInput.value.trim();
    if (message === '') return;
    addMessage(message, 'user');
    userInput.value = '';
    userInput.focus();
    const aiResponse = await generateAIResponse(message);
    addMessage(aiResponse, 'ai');
}

sendBtn.addEventListener('click', handleSendMessage);
userInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        handleSendMessage();
    }
});

const quickActionButtons = document.querySelectorAll('.quick-action-btn');
quickActionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const message = button.getAttribute('data-message');
        userInput.value = message;
        showChatInterface();
        handleSendMessage();
    });
});

window.addEventListener('load', () => {
    userInput.focus();
    scrollToBottom();
});
