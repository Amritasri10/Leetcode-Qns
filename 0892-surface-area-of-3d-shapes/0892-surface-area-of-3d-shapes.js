/**
 * @param {number[][]} grid
 * @return {number}
 */
const surfaceArea=t=>{const e=t.length,n=t[0].length;let r=0;for(let l=0;l<e;l++)for(let e=0;e<n;e++)t[l][e]>0&&(r+=4*t[l][e]+2),l>0&&(r-=2*Math.min(t[l-1][e],t[l][e])),e>0&&(r-=2*Math.min(t[l][e-1],t[l][e]));return r};