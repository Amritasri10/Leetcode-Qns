/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var modifiedMatrix = function(matrix) {
    let arr = []

    for(let j = 0; j < matrix[0].length; j++){
        let max = -Infinity

        for(let i = 0; i < matrix.length; i++){
            max = Math.max(max, matrix[i][j])
    }

    arr.push(max)
}
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            if(matrix[i][j]==-1){
                matrix[i][j]=arr[j]
            }
        }
    }return matrix
    
};