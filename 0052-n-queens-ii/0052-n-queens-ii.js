/**
 * @param {number} n
 * @return {number}
 */
const totalNQueens=e=>{const t=new Set,d=new Set,n=new Set;let a=0;return function l(s){if(s!==e)for(let a=0;a<e;a+=1)t.has(a)||d.has(s+a)||n.has(s-a)||(t.add(a),d.add(s+a),n.add(s-a),l(s+1),t.delete(a),d.delete(s+a),n.delete(s-a));else a+=1}(0),a};