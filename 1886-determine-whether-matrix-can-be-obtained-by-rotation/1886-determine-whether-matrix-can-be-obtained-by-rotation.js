/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
const findRotation = (mat, target) => {
    const n = mat.length, m = mat[0].length;
    const tar = JSON.stringify(target);
    for (let k = 0; k < 4; k++) {
        if (JSON.stringify(mat) === tar) return true;
        for (let i = 0; i < n; i++)
            for (let j = i; j < m; j++)
                [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
        mat.reverse();
    }
    return false;
};