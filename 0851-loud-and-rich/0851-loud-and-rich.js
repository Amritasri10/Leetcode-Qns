/**
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */
const loudAndRich=(n,t)=>{const r=[],o=[],u={};n.forEach(([n,t])=>r[t]?r[t].push(n):r[t]=[n]);for(let n=0;n<t.length;n++)o.push(c(n));return o;function c(n){if(n in u)return u[n];if(!r[n])return u[n]=n,n;let o=n,e=t[n];for(const u of r[n]){const n=c(u);t[n]<e&&(o=n,e=t[n])}return u[n]=o,u[n]}};