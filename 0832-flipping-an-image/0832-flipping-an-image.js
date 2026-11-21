/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
		for(let row in A) {
			A[row] = A[row].reverse();
			A[row] = A[row].map(x => 1 - x);
		}
	return A;
};