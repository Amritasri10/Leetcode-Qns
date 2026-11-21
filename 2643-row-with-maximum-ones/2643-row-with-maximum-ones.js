/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function(mat) {
    let res = [0, 0];
    let row = mat.length;
    for (let i = 0; i < row; i++){
        let count = mat[i].reduce((acc, val) => acc + val, 0);
        if (count > res[1]){
            res[0] = i;
            res[1] = count;
        }
    }
    return res;
};