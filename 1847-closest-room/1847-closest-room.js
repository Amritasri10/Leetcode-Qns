/**
 * @param {number[][]} rooms
 * @param {number[][]} queries
 * @return {number[]}
 */
const closestRoom=(t,o)=>{t.sort(((t,o)=>o[1]-t[1]));const n=o.map(((t,o)=>[...t,o])).sort(((t,o)=>o[1]-t[1])),e=Array(o.length).fill(-1),r=[];let l=0;for(let[o,s,c]of n){for(;l<t.length&&t[l][1]>=s;)insertSorted(r,t[l][0]),l++;if(0===r.length)continue;const n=lowerBound(r,o);let f=-1,i=1/0;if(n<r.length){const t=Math.abs(r[n]-o);(t<i||t===i&&r[n]<f)&&(f=r[n],i=t)}if(n>0){const t=Math.abs(r[n-1]-o);(t<i||t===i&&r[n-1]<f)&&(f=r[n-1],i=t)}e[c]=f}return e};function insertSorted(t,o){let n=lowerBound(t,o);t.splice(n,0,o)}function lowerBound(t,o){let n=0,e=t.length;for(;n<e;){const r=n+e>>1;t[r]<o?n=r+1:e=r}return n}