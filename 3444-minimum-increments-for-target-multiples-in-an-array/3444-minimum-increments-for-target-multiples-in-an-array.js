/**
 * @param {number[]} nums
 * @param {number[]} target
 * @return {number}
 */
var minimumIncrements = function(nums, target) {
    //we'll fill this with the lcm of all possible permutations of target
    let lcms = new Array(2**target.length);
    //we'll fill this with a list of the best 'num' to pick for that corresponding permutation
    let combinationTopFours = new Array(lcms.length);

    for(let i = 1; i < combinationTopFours.length; ++i) {
        combinationTopFours[i] = [];

        let factors = [];
        for(let j = 0; j < target.length; ++j) {
            if((i & (1<<j))) {
                factors.push(target[j]);
            }
        }

        let lcm = findlcm(factors);
        lcms[i] = lcm;
    }

    for(let numIdx = 0; numIdx < nums.length; ++numIdx) {
        let num = nums[numIdx];
        for(let i = 1; i < combinationTopFours.length; ++i) {
            let lcm = lcms[i];

            let diff = Number((BigInt(lcm) - (BigInt(num) % BigInt(lcm))) % BigInt(lcm));

            insertIntoCombination(combinationTopFours[i], numIdx, diff);
        }
    }

    return dfs(0, [])
    

    //brute force dfs, where the target is having all bits set to 1.
    //i.e. for a target of [1,2,3,4], the mask would be 1111 -> 15
    function dfs(mask, usedIndexes) {
        if(mask === ((2**target.length)-1)) {
            return 0;
        }
        let best = Infinity;
        for(let i = 1; i < combinationTopFours.length; ++i) {
            if((mask & i)) { continue; }

            //just try everything lol.
            let topFour = combinationTopFours[i];
            for(let j = 0; j < topFour.length; ++j) {
                let [diff, numsIdx] = topFour[j];
                //if we already tried this num, we can't touch it again
                if(usedIndexes.includes(numsIdx)) { continue; }

                best = Math.min(best, diff + dfs(mask | i, [...usedIndexes, numsIdx]));
            }
        }

        return best;
    }

    function insertIntoCombination(arr, idx, diff) {
        if(arr.length < target.length) {
            return arr.push([diff, idx]);
        }

        arr.sort((a, b) => a[0]-b[0]);

        if(diff < arr.at(-1)[0]) {
            arr[arr.length-1] = [diff, idx];
        }
    }
};


function gcd(a, b) { 
    if (!b) { return a; }
    return gcd(b, a % b); 
} 

function findlcm(arr) {
    let ans = arr[0]; 

    for (let i = 1; i < arr.length; i++) {
        ans = (arr[i] * ans) / gcd(arr[i], ans); 
    }

    return ans; 
} 