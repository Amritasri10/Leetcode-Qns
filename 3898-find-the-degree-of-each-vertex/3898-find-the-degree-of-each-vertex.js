/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const findDegrees = (matrix) => matrix.map((v) => v.reduce((a, b) => a + b));