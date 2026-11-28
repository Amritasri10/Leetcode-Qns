var toHex = function(num) {
    if (num === 0) return "0";
    if (num < 0) num += 2 ** 32;

    const hex = "0123456789abcdef";
    let result = "";

    while (num > 0) {
        result = hex[num & 15] + result;
        num >>>= 4;
    }

    return result;
};