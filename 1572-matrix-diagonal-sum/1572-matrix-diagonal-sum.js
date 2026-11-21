/**
 * @param {number[][]} mat
 * @return {number}
 */
const diagonalSum=t=>{let e=0,l=t[0].length-1;for(let n=0;n<t.length;n++,l--)n!==l&&(e+=t[n][l]),e+=t[n][n];return e};