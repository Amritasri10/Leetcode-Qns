/**
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 */
var maximumBeauty = function (items, queries) {
    const maxI = Number.MAX_SAFE_INTEGER;
    let res = [[0, 0, maxI]]

    items.sort((a, b) => a[0] - b[0])

    for (let item of items) {
        let price = item[0]
        let beauty = item[1]
        let lastBracket = res.at(-1)

        if (beauty > lastBracket[1]) {
            res[res.length - 1][2] = price
            res.push([price, beauty, maxI])
        }
    }

    let ans = []

    for (let x of queries) {
        for (let i = res.length - 1; i > -1; i--) {
            if (res[i][0] <= x) {
                ans.push(res[i][1])
                break
            }
        }
    }

    return ans

};