// This file contains the mathematics knowledge base
// to be copied into index.html

        const knowledgeBase = {
            // SECTION 1: Arithmetic & Numbers
            arithmetic: {
                keywords: ['arithmetic', 'add', 'subtract', 'multiply', 'divide', 'fraction', 'decimal', 'percentage', 'basic math'],
                responses: [
                    "Arithmetic operations: Addition (a + b), Subtraction (a - b), Multiplication (a × b), Division (a ÷ b). Order of operations: PEMDAS/BODMAS (Parentheses/Brackets, Exponents/Orders, Multiplication/Division, Addition/Subtraction). Example: 2 + 3 × 4 = 2 + 12 = 14 (not 20).",
                    "Fractions: numerator/denominator. Add: a/b + c/d = (ad + bc)/bd. Multiply: (a/b) × (c/d) = ac/bd. Divide: (a/b) ÷ (c/d) = (a/b) × (d/c) = ad/bc. Example: 1/2 + 1/3 = 3/6 + 2/6 = 5/6.",
                    "Percentages: Part = (Percent/100) × Whole. Example: 20% of 50 = (20/100) × 50 = 10. Decimals: 0.75 = 75/100 = 3/4. Converting: decimal to percent multiply by 100, percent to decimal divide by 100."
                ]
            },
            // SECTION 2: Algebra
            algebra: {
                keywords: ['algebra', 'equation', 'variable', 'solve', 'linear', 'quadratic', 'polynomial', 'expression', 'factor'],
                responses: [
                    "Linear equations: ax + b = c, solve for x: x = (c - b)/a. Example: 3x + 5 = 14, 3x = 9, x = 3. Quadratic equations: ax² + bx + c = 0. Solutions: x = (-b ± √(b² - 4ac))/(2a). Discriminant b² - 4ac determines: >0 two solutions, =0 one solution, <0 no real solutions.",
                    "Factoring: x² + 5x + 6 = (x + 2)(x + 3). Factor by grouping, completing the square, or using the quadratic formula. Polynomials: ax^n + bx^(n-1) + ... Rules: x^m × x^n = x^(m+n), (x^m)^n = x^(mn), x^0 = 1 (x≠0).",
                    "Systems of equations: Solve simultaneously. Substitution method: solve one for x, substitute into other. Elimination method: add/subtract equations to eliminate variable. Graphing method: find intersection. Example: y = 2x + 1, y = -x + 4. Solution: x = 1, y = 3."
                ]
            },
            // SECTION 3: Geometry
            geometry: {
                keywords: ['geometry', 'triangle', 'square', 'circle', 'angle', 'area', 'perimeter', 'volume', 'shape', 'pythagorean'],
                responses: [
                    "Triangle: Area = (1/2) × base × height. Perimeter = sum of all sides. Pythagorean theorem: a² + b² = c² (right triangle hypotenuse). Triangle types: equilateral (all sides equal), isosceles (two sides equal), scalene (all different), right (one 90° angle).",
                    "Circle: Area = πr², Circumference = 2πr = πd. Radius r = d/2 (d = diameter). Arc length = (θ/360°) × 2πr (θ in degrees) or θ × r (θ in radians). Sector area = (θ/360°) × πr². Chord, tangent, secant relationships.",
                    "Quadrilaterals: Square Area = s², Rectangle Area = l × w, Parallelogram Area = base × height, Trapezoid Area = (1/2)(b₁ + b₂) × h. 3D shapes: Cube V = s³, Rectangular box V = l × w × h, Sphere V = (4/3)πr³, Cylinder V = πr²h, Cone V = (1/3)πr²h."
                ]
            },
            // SECTION 4: Trigonometry
            trigonometry: {
                keywords: ['trigonometry', 'sine', 'cosine', 'tangent', 'sin', 'cos', 'tan', 'angle', 'radian', 'degree'],
                responses: [
                    "Basic trig: sin(θ) = opposite/hypotenuse, cos(θ) = adjacent/hypotenuse, tan(θ) = opposite/adjacent. SOH-CAH-TOA mnemonic. Reciprocal: csc(θ) = 1/sin(θ), sec(θ) = 1/cos(θ), cot(θ) = 1/tan(θ).",
                    "Important values: sin(0°)=0, sin(90°)=1, cos(0°)=1, cos(90°)=0, tan(45°)=1. Special angles: 30-60-90 triangle sides 1:√3:2, 45-45-90 triangle sides 1:1:√2. Radians: π rad = 180°, 2π rad = 360°. Convert: degrees × π/180 = radians.",
                    "Trig identities: sin²(θ) + cos²(θ) = 1, tan(θ) = sin(θ)/cos(θ). Double angle: sin(2θ) = 2sin(θ)cos(θ), cos(2θ) = cos²(θ) - sin²(θ). Law of sines: a/sin(A) = b/sin(B), Law of cosines: c² = a² + b² - 2ab×cos(C)."
                ]
            },
            // SECTION 5: Calculus - Limits & Derivatives
            calculus_limits: {
                keywords: ['limit', 'derivative', 'differential', 'rate of change', 'slope', 'tangent', 'd/dx', 'f\''],
                responses: [
                    "Limits: lim(x→a) f(x) = L means as x approaches a, f(x) approaches L. L'Hôpital's rule: if limit gives 0/0 or ∞/∞, then lim f(x)/g(x) = lim f'(x)/g'(x). Continuity: function continuous if lim(x→a) f(x) = f(a). Jump, infinite, removable discontinuities.",
                    "Derivatives measure rate of change: f'(x) = lim(h→0) [f(x+h) - f(x)]/h. Power rule: d/dx(x^n) = nx^(n-1). Product rule: (fg)' = f'g + fg'. Quotient rule: (f/g)' = (f'g - fg')/g². Chain rule: dy/dx = (dy/du)(du/dx).",
                    "Common derivatives: d/dx(sin x) = cos x, d/dx(cos x) = -sin x, d/dx(e^x) = e^x, d/dx(ln x) = 1/x, d/dx(a^x) = a^x × ln(a). Second derivative: f''(x) = d²f/dx². Critical points: f'(x) = 0. Concavity: f''(x) > 0 (concave up), f''(x) < 0 (concave down)."
                ]
            },
            // SECTION 6: Calculus - Integration
            calculus_integration: {
                keywords: ['integration', 'integral', 'antiderivative', 'area under curve', '∫', 'indefinite', 'definite'],
                responses: [
                    "Antiderivative: if F'(x) = f(x), then F(x) is the antiderivative. Indefinite integral: ∫ f(x)dx = F(x) + C. Power rule: ∫ x^n dx = x^(n+1)/(n+1) + C (n ≠ -1). Sum rule: ∫[f(x) + g(x)]dx = ∫f(x)dx + ∫g(x)dx.",
                    "Common integrals: ∫ sin(x)dx = -cos(x) + C, ∫ cos(x)dx = sin(x) + C, ∫ e^x dx = e^x + C, ∫ 1/x dx = ln|x| + C. U-substitution: let u = g(x), then ∫ f(g(x))g'(x)dx = ∫ f(u)du. Integration by parts: ∫ u dv = uv - ∫ v du.",
                    "Definite integral: ∫[a,b] f(x)dx = F(b) - F(a) (Fundamental Theorem of Calculus). Represents area under curve from x=a to x=b. Applications: area between curves, volume of revolution, arc length, work, accumulation."
                ]
            },
            // SECTION 7: Linear Algebra
            linear_algebra: {
                keywords: ['matrix', 'vector', 'determinant', 'eigenvalue', 'linear algebra', 'transpose', 'inverse'],
                responses: [
                    "Matrices: rows × columns. Operations: multiply (A×B)ᵢⱼ = Σₖ Aᵢₖ Bₖⱼ, add element-wise, scalar multiply. Transpose: flip rows and columns, A^T. Determinant det(A) tells invertibility: det ≠ 0 means invertible. 2×2: det([a b; c d]) = ad - bc.",
                    "Systems: Ax = b solved by x = A⁻¹b (if invertible). Matrix inverse: AA⁻¹ = I (identity). Vectors: column of numbers, operations: dot product u·v = Σ uᵢvᵢ, cross product (3D), magnitude ||v|| = √(v·v). Linear independence: vectors linearly independent if no vector is combination of others.",
                    "Eigenvalues: Av = λv where λ is eigenvalue, v is eigenvector. Characteristic equation: det(A - λI) = 0. Applications: diagonalization, stability analysis, page rank. Matrix forms: symmetric, diagonal, triangular, sparse. Norms: ||A|| measures matrix size/conditioning."
                ]
            },
            // SECTION 8: Probability & Statistics
            probability: {
                keywords: ['probability', 'statistic', 'mean', 'median', 'standard deviation', 'variance', 'normal distribution', 'gaussian'],
                responses: [
                    "Probability: P(event) = favorable outcomes / total outcomes. Ranges 0 to 1. P(A and B) = P(A)×P(B|A) (conditional). Independent events: P(A and B) = P(A)×P(B). P(A or B) = P(A) + P(B) - P(A and B). Complement: P(not A) = 1 - P(A).",
                    "Statistics: Mean μ = Σx/n (average). Median = middle value when sorted. Mode = most frequent value. Variance σ² = Σ(x - μ)²/n (spread). Standard deviation σ = √variance. Normal distribution: bell curve, 68% within ±1σ, 95% within ±2σ, 99.7% within ±3σ.",
                    "Correlation: measure relationship, r ranges -1 to 1. Regression: fit line y = mx + b through points. Chi-square test: goodness of fit. t-test: compare means. Hypothesis testing: null hypothesis H₀, p-value threshold typically 0.05. Confidence interval: range likely containing true value."
                ]
            },
            // SECTION 9: Sequences & Series
            sequences_series: {
                keywords: ['sequence', 'series', 'arithmetic', 'geometric', 'sum', 'convergence', 'convergent'],
                responses: [
                    "Sequences: ordered list aₙ. Arithmetic: aₙ = a₁ + (n-1)d (common difference d). Geometric: aₙ = a₁ × r^(n-1) (common ratio r). Fibonacci: Fₙ = Fₙ₋₁ + Fₙ₋₂.\nSeries: sum of sequence Sₙ = Σ aᵢ (i from 1 to n).",
                    "Arithmetic series sum: Sₙ = n(a₁ + aₙ)/2. Geometric series sum: Sₙ = a₁(1 - r^n)/(1 - r). Infinite geometric series: S = a₁/(1 - r) if |r| < 1. Telescoping series: cancellation of terms simplifies.\nTaylor series: f(x) = Σ f^(n)(a)/n! × (x-a)^n (power series expansion).",
                    "Convergence: series converges if partial sums approach limit. Divergence: sums don't converge. Tests: ratio test, root test, integral test, p-series (∑1/n^p converges if p > 1). Alternating series: sign changes. Harmonic series diverges: ∑1/n. Convergence radius for power series."
                ]
            },
            // SECTION 10: Functions & Transformations
            functions: {
                keywords: ['function', 'domain', 'range', 'inverse', 'composite', 'transformation', 'f(x)', 'graph'],
                responses: [
                    "Function: relation where each input has one output, f: D → R (domain to range). Domain: valid inputs. Range: possible outputs. Even function: f(-x) = f(x) (symmetric about y-axis). Odd function: f(-x) = -f(x) (symmetric about origin).",
                    "Transformations: f(x + c) shifts left c, f(x - c) shifts right c. f(x) + c shifts up c, f(x) - c shifts down c. af(x) scales vertically by a. f(ax) scales horizontally by 1/a (a > 1 compresses). -f(x) reflects over x-axis, f(-x) reflects over y-axis.",
                    "Composition: (f ∘ g)(x) = f(g(x)). Inverse function: f⁻¹ where f(f⁻¹(x)) = x. To find inverse: swap x and y, solve for y. Logarithm is inverse of exponential. One-to-one: graph passes vertical and horizontal line tests. Onto: range equals codomain."
                ]
            },
            // SECTION 11: Exponential & Logarithmic
            exponential_logarithm: {
                keywords: ['exponential', 'logarithm', 'log', 'natural log', 'ln', 'e', 'base', 'power'],
                responses: [
                    "Exponential: f(x) = a^x where a > 0, a ≠ 1. Growth if a > 1, decay if 0 < a < 1. Natural exponential: e^x where e ≈ 2.718. Doubling time: t = ln(2)/r for growth rate r.\nLogarithm: log_b(x) = y means b^y = x. Common log: base 10. Natural log: ln(x) = log_e(x).",
                    "Properties: log(ab) = log(a) + log(b), log(a/b) = log(a) - log(b), log(a^n) = n×log(a). Change base: log_b(x) = ln(x)/ln(b). Inverse relationships: a^(log_a(x)) = x, log_a(a^x) = x. Solving: if 2^x = 8, then x = log₂(8) = 3.",
                    "Applications: compound interest A = P(1 + r/n)^(nt), continuous A = Pe^(rt). Half-life: N(t) = N₀ × (1/2)^(t/T). pH = -log[H⁺], decibels dB = 10 log(P/P₀). Richter scale log. Logarithmic regression/fitting exponential data."
                ]
            },
            // SECTION 12: Complex Numbers
            complex_numbers: {
                keywords: ['complex', 'imaginary', 'i', 'real', 'polar', 'argument', 'magnitude'],
                responses: [
                    "Complex number: z = a + bi where i² = -1. Real part Re(z) = a, imaginary part Im(z) = b. Operations: (a + bi) + (c + di) = (a+c) + (b+d)i, multiply using i² = -1. Conjugate z* = a - bi. Magnitude |z| = √(a² + b²).",
                    "Division: (a + bi)/(c + di) = [(a + bi)(c - di)]/[(c + di)(c - di)]. Polar form: z = r(cos(θ) + i×sin(θ)) = r×e^(iθ) where r = |z|, θ = arg(z). Euler's formula: e^(iθ) = cos(θ) + i×sin(θ). De Moivre's theorem: z^n = r^n × e^(inθ).",
                    "Finding roots: solve z^n = w. Quadratic formula works for complex coefficients. Fundamental theorem of algebra: degree n polynomial has n roots (counting multiplicities). Complex analysis: functions f(z) = u(x,y) + iv(x,y) where x+iy = z."
                ]
            },
            // SECTION 13: Differential Equations
            differential_equations: {
                keywords: ['differential equation', 'ODE', 'PDE', 'separable', 'linear', 'homogeneous', 'solution'],
                responses: [
                    "Differential equation: relates function to its derivatives. Ordinary DE (ODE): one variable. Partial DE (PDE): multiple variables. Order: highest derivative. Degree: highest power of highest derivative. Linear: first degree in dependent variable and derivatives.",
                    "Separable ODE: dy/dx = f(x)g(y). Separate: dy/g(y) = f(x)dx, integrate both sides. Linear first-order: dy/dx + P(x)y = Q(x), use integrating factor e^(∫P(x)dx). Homogeneous: dy/dx = f(y/x), use substitution v = y/x.",
                    "Solutions: general solution contains constants. Particular solution: initial conditions determine constants. Characteristic equation for linear constant-coefficient: substitute y = e^(rx). Applications: population growth dP/dt = rP, radioactive decay, Newton's cooling, harmonic motion d²x/dt² = -kx."
                ]
            },
            // SECTION 14: Number Theory
            number_theory: {
                keywords: ['number theory', 'prime', 'divisibility', 'modulo', 'GCD', 'LCM', 'congruence', 'remainder'],
                responses: [
                    "Divisibility: a divides b (a|b) if b = ac for integer c. Prime: number > 1 divisible only by 1 and itself. Composite: product of primes. Every integer > 1 is prime or composite. Fundamental theorem: every integer factorization into primes is unique.",
                    "GCD (greatest common divisor): largest d dividing both a,b. Euclidean algorithm: gcd(a,b) = gcd(b, a mod b). LCM (least common multiple): smallest number divisible by both. Relationship: a×b = gcd(a,b)×lcm(a,b). Coprime: gcd = 1.",
                    "Modular arithmetic: a ≡ b (mod n) means n divides (a-b). Congruence properties: linear in a, b. Fermat's Little Theorem: if p prime, a^(p-1) ≡ 1 (mod p). Euler's theorem: a^(φ(n)) ≡ 1 (mod n) if gcd(a,n)=1. Applications: RSA cryptography, checking divisibility."
                ]
            },
            // SECTION 15: Set Theory & Logic
            set_theory: {
                keywords: ['set', 'union', 'intersection', 'complement', 'subset', 'logic', 'proof', 'theorem'],
                responses: [
                    "Set: collection of distinct elements. Union A ∪ B: all elements in A or B. Intersection A ∩ B: elements in both. Complement A^c: elements not in A. Difference A - B: in A but not B. De Morgan's laws: (A ∪ B)^c = A^c ∩ B^c, (A ∩ B)^c = A^c ∪ B^c.",
                    "Subset: A ⊆ B if every element of A is in B. Proper subset: A ⊂ B if A ⊆ B and A ≠ B. Power set P(A): all subsets of A. Cardinality |A|: number of elements. Infinite: countably infinite (bijection with ℕ), uncountably infinite (like ℝ).",
                    "Logic: conjunction (AND ∧), disjunction (OR ∨), negation (NOT ¬). Truth tables verify equivalences. Tautology: always true. Contradiction: always false. Implications: if p then q (p → q). Contrapositive: ¬q → ¬p (logically equivalent). Proof by contradiction: assume false, derive contradiction."
                ]
            },
            // SECTION 16: Multivariable Calculus
            multivariable_calculus: {
                keywords: ['multivariable', 'partial derivative', 'gradient', 'divergence', 'curl', 'double integral', 'triple integral'],
                responses: [
                    "Partial derivatives: ∂f/∂x treating y constant, ∂f/∂y treating x constant. Second partial: ∂²f/∂x², ∂²f/∂y², ∂²f/∂x∂y. Schwarz theorem: ∂²f/∂x∂y = ∂²f/∂y∂x if continuous. Chain rule: df/dt = (∂f/∂x)(dx/dt) + (∂f/∂y)(dy/dt).",
                    "Gradient ∇f = (∂f/∂x, ∂f/∂y): direction of steepest increase. Directional derivative: D_u f = ∇f · u. Critical points: ∇f = 0. Hessian matrix: 2nd partial derivatives, determines local max/min/saddle. Lagrange multipliers: optimize f subject to constraint g = 0.",
                    "Multiple integrals: ∬_R f(x,y) dA = ∫∫ f(x,y) dy dx. Polar coordinates: x = r cos(θ), y = r sin(θ), dA = r dr dθ. Triple integral: ∭_V f(x,y,z) dV. Divergence ∇·F, Curl ∇×F. Divergence theorem: ∭_V ∇·F dV = ∬_S F·n dS. Stokes' theorem."
                ]
            },
            // SECTION 17: Abstract Algebra
            abstract_algebra: {
                keywords: ['abstract algebra', 'group', 'ring', 'field', 'algebra', 'operation', 'identity', 'associative'],
                responses: [
                    "Group (G, ×): set with operation, closure, associativity, identity element e, inverse for each element. Abelian group: commutative a×b = b×a. Subgroup: subset that's also a group. Order: number of elements. Cayley table: operation results.",
                    "Ring (R, +, ×): additive group, multiplication associative, distributive laws hold. Field: ring where nonzero elements form multiplicative group, division possible. Examples: ℤ (integers) is ring, ℚ, ℝ, ℂ are fields. Polynomial rings, matrix rings.",
                    "Homomorphism: structure-preserving function. Kernel: elements mapping to identity. Image: output set. Isomorphism: bijective homomorphism, structures identical. Permutation groups: bijections of set. Normal subgroups, quotient groups. Lagrange's theorem: |H| divides |G|."
                ]
            },
            // SECTION 18: Topology
            topology: {
                keywords: ['topology', 'open set', 'closed set', 'continuous', 'metric space', 'limit', 'convergent'],
                responses: [
                    "Topology: structure on set defining 'open' sets. Metric space: distance function d(x,y). Open ball B(x,r): points within distance r of x. Open set: union of open balls. Closed set: complement of open set. Closure: smallest closed set containing. Interior: largest open set contained.",
                    "Continuous function: preimage of open set is open. f: X → Y continuous iff f(lim x_n) = lim f(x_n). Homeomorphism: continuous bijection with continuous inverse. Compactness: every open cover has finite subcover. Connected: cannot partition into two nonempty open sets.",
                    "Hausdorff space: distinct points have disjoint open neighborhoods. Path-connected: continuous path between any points. Homotopy: continuous deformation of paths. Fundamental group π₁: classifies topological properties. Surface topology: sphere, torus, projective plane, genus."
                ]
            },
            // SECTION 19: Mathematical Proof Techniques
            proof_techniques: {
                keywords: ['proof', 'induction', 'contradiction', 'contrapositive', 'direct proof', 'existence', 'uniqueness'],
                responses: [
                    "Direct proof: assume hypothesis, use definitions/theorems to reach conclusion. Proof by contradiction: assume negation, derive contradiction, conclusion follows. Contrapositive proof: prove ¬q → ¬p instead of p → q (logically equivalent).",
                    "Mathematical induction: base case (n=1 true), inductive step (if true for n, true for n+1), conclude for all n. Strong induction: assume true for all k < n. Well-ordering principle: every nonempty set has minimum. Structural induction: for recursive structures.",
                    "Existence proof: show something exists (constructive: exhibit it, or non-constructive: show contradiction if not). Uniqueness: show exactly one. Proof by exhaustion: check all cases. Probability argument: show nonzero probability of existence. Pigeonhole principle: more items than containers, some container has >1."
                ]
            },
            // SECTION 20: Applied Mathematics
            applied_math: {
                keywords: ['applied', 'optimization', 'numerical', 'linear programming', 'calculus of variations', 'fourier'],
                responses: [
                    "Optimization: maximize/minimize function. Unconstrained: find critical points, check 2nd derivative. Constrained: Lagrange multipliers or substitution. Linear programming: optimize linear objective, linear constraints. Feasible region: polytope, optimum at vertex.",
                    "Numerical methods: approximations for difficult problems. Newton's method: x_(n+1) = x_n - f(x_n)/f'(x_n) for roots. Bisection method: divide interval, converges slowly. Gaussian elimination: solve Ax = b. Runge-Kutta: solve ODEs. Finite difference: discretize equations.",
                    "Fourier series: f(x) = a₀/2 + Σ[a_n cos(nx) + b_n sin(nx)]. Fourier transform: frequency domain representation. Wavelets: localized oscillations. Calculus of variations: extremize integrals ∫ L(y, y', x) dx (Euler-Lagrange equation). Applications: mechanics, signal processing, control theory."
                ]
            },
            // SECTION 21: Mathematical Constants
            constants: {
                keywords: ['constant', 'pi', 'e', 'phi', 'euler', 'golden ratio', 'imaginary unit'],
                responses: [
                    "π ≈ 3.14159: circle circumference/diameter. Irrational, transcendental. e ≈ 2.71828: natural exponential base, lim(n→∞)(1 + 1/n)^n. Irrational, transcendental. Golden ratio φ = (1 + √5)/2 ≈ 1.618. Fibonacci property: F_(n+1)/F_n → φ.",
                    "Imaginary unit i: i² = -1. Euler's identity: e^(iπ) + 1 = 0 (connects e, i, π, 1, 0). Infinity ∞: not number, concept of unbounded. Other constants: γ (Euler-Mascheroni) ≈ 0.5772, ρ (Copernic-Robbins constant).",
                    "Non-mathematical but famous: Avogadro 6.022×10²³, Planck constant 6.626×10⁻³⁴, Speed of light 3×10⁸ m/s. Mathematical constants appear in analysis, number theory, combinatorics. Pi in geometry, trigonometry, complex analysis. e in calculus, probability, DE solutions."
                ]
            },
            // Default off-topic response
            off_topic: {
                keywords: [],
                responses: [
                    "I'm specialized in Mathematics! Your question doesn't seem to be about math. Ask me anything about algebra, geometry, calculus, trigonometry, statistics, or any mathematical topic!",
                    "That's outside my math expertise! I focus exclusively on mathematics. Do you have a math question about equations, proofs, geometry, calculus, or any other topic?",
                    "I'm a math-focused assistant! Feel free to ask about any mathematical concept, problem solving, formulas, or techniques. What math topic interests you?"
                ]
            }
        };
