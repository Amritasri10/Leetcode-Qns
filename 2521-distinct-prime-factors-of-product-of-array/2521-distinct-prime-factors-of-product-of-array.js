/**
 * @param {number[]} nums
 * @return {number}
 */
const distinctPrimeFactors=t=>{let e={};const r=t=>{for(let e=2,r=Math.sqrt(t);e<=r;e++)if(t%e===0)return!1;return t>1};return t.map(t=>{if(r(t)&&!e[t])e[t]=1;else for(let n=1;n<=t/2;n++)t%n==0&&r(n)&&!e[n]&&(e[n]=1)}),Object.keys(e).length};