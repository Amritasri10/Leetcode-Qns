/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
const checkValid=e=>{for(let t=1;t<=e.length;t++){for(let l=0;l<e[0].length;l++){let r=!1;for(let f=0;f<e.length;f++)if(e[f][l]===t){r=!0;break}if(!r)return!1}for(let l=0;l<e.length;l++){let r=!1;for(let f=0;f<e[l].length;f++)if(e[l][f]===t){r=!0;break}if(!r)return!1}}return!0};