/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const possiblyEquals=(e,t)=>{const r=Array.from({length:e.length+1},(()=>Array.from({length:t.length+1},(()=>[])))),n=(l,i,f)=>{if(l===e.length&&i===t.length)return 0===f;if(void 0!==r[l][i][f])return r[l][i][f];let g=e[l],h=t[i];if(l<e.length&&i<t.length&&g===h&&0===f&&n(l+1,i+1,f))return!0;if(l<e.length&&isNaN(g)&&f<0&&n(l+1,i,f+1))return!0;if(i<t.length&&isNaN(h)&&f>0&&n(l,i+1,f-1))return!0;let a=0;for(let t=0;t<3&&l+t<e.length;t++){let r=e[l+t];if(isNaN(r))break;if(a=10*a+parseInt(r),n(l+t+1,i,f+a))return!0}a=0;for(let e=0;e<3&&i+e<t.length;e++){let r=t[i+e];if(isNaN(r))break;if(a=10*a+parseInt(r),n(l,i+e+1,f-a))return!0}return r[l][i][f]=!1,!1};return n(0,0,0)};