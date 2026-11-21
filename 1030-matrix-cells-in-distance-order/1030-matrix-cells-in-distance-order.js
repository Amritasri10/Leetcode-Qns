/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
const allCellsDistOrder=(s,t,o,r)=>{const l=[],a=[];for(let a=0;a<s;++a)for(let s=0;s<t;++s){const t=Math.abs(a-o)+Math.abs(s-r);void 0===l[t]&&(l[t]=[]),l[t].push([a,s])}for(const s of l)a.push(...s);return a};