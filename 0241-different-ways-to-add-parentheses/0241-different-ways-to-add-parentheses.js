var diffWaysToCompute = function(expression) {
    let res = [];
    for (let i = 0; i < expression.length; i++) {
        let oper = expression[i];
        if (oper === '+' || oper === '-' || oper === '*') {
            let s1 = diffWaysToCompute(expression.slice(0, i));
            let s2 = diffWaysToCompute(expression.slice(i + 1));
            for (let a of s1) {
                for (let b of s2) {
                    if (oper === '+') res.push(a + b);
                    else if (oper === '-') res.push(a - b);
                    else if (oper === '*') res.push(a * b);
                }
            }
        }
    }
    if (res.length === 0) res.push(parseInt(expression));
    return res;
};