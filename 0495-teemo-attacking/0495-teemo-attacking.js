/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
const findPoisonedDuration=(n,t)=>{if(0===n.length)return 0;let e=0;for(let o=0;o<n.length-1;o++){const r=n[o+1]-n[o];e+=Math.min(r,t)}return e+=t,e};