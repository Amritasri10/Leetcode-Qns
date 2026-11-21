/**
 * @param {string} s
 * @return {number}
 */
var countValidSubstrings = function(s) {
    let n = s.length;
    let count = 0;
    let left = 0;

    for(let i = 0; i < n; i++){
        if(i >= 2 && s[i - 2] === 'a' 
           && s[i - 1] === 'b' && s[i] === 'c'){
            left = i - 1;
        }

        count += i - left + 1;
    }

    return count;
};