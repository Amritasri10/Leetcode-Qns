/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} s
 * @param {string[]} queries
 * @return {boolean[]}
 */
class Tree {  // Euler tour: the subtree of x is tin[x] .. tout[x] - 1; LCA by a sparse table over the DFS order
    constructor(n, edges) {
        const graph = Array.from({length: n}, () => []);
        for (const [u, v] of edges) {
            graph[u].push(v);
            graph[v].push(u);
        }

        const parent = new Int32Array(n), tin = new Int32Array(n), tout = new Int32Array(n), order = [];  // the root is its own parent; order: the nodes in DFS order
        const stack = [0];
        while (stack.length) {  // DFS without recursion; ~x marks the moment x's subtree is done
            const x = stack.pop();
            if (x < 0) {
                tout[~x] = order.length;
                continue;
            }
            tin[x] = order.length;
            order.push(x);
            stack.push(~x);
            for (const y of graph[x])
                if (y !== parent[x]) {
                    parent[y] = x;
                    stack.push(y);
                }
        }

        const first = [order.map(x => tin[parent[x]])];  // first[k][i]: the earliest parent among order[i .. i + 2^k - 1]
        for (let k = 1; 1 << k <= n; k++) {
            const prev = first[k - 1], half = 1 << (k - 1);
            first.push(prev.slice(0, n - (1 << k) + 1).map((a, i) => Math.min(a, prev[i + half])));
        }
        this.parent = parent;
        this.tin = tin;
        this.tout = tout;
        this.order = order;
        this.first = first;
    }

    lca(u, v) {  // the parent that comes first in DFS order among the nodes after u up to v
        if (u === v) return u;
        const l = Math.min(this.tin[u], this.tin[v]), r = Math.max(this.tin[u], this.tin[v]);
        const k = 31 - Math.clz32(r - l);
        return this.order[Math.min(this.first[k][l + 1], this.first[k][r - (1 << k) + 1])];
    }
}

class RootPaths {  // get(x): XOR of the letter bits from the root down to x
    constructor(tree, bit) {
        this.tree = tree;
        this.start = Int32Array.from(bit);  // the masks for the initial letters: a parent comes before its children in DFS order
        for (const x of tree.order.slice(1)) this.start[x] ^= this.start[tree.parent[x]];
        this.fenwick = new Int32Array(bit.length + 1);  // a Fenwick tree over the Euler tour with the changes since the start
    }

    flip(x, d) {  // XOR d into the root path of every node in x's subtree
        for (let i of [this.tree.tin[x] + 1, this.tree.tout[x] + 1])  // d starts at x's subtree and cancels out after it
            for (; i < this.fenwick.length; i += i & -i) this.fenwick[i] ^= d;
    }

    get(x) {
        let mask = this.start[x];
        for (let i = this.tree.tin[x] + 1; i > 0; i -= i & -i) mask ^= this.fenwick[i];
        return mask;
    }
}

var palindromePath = function(n, edges, s, queries) {
    const tree = new Tree(n, edges);
    const bit = Array.from(s, c => 1 << (c.charCodeAt(0) - 97));  // bit[x]: the bit of x's letter
    const paths = new RootPaths(tree, bit);

    const ans = [];
    for (const q of queries) {
        if (q[0] === 'u') {  // "update x c"
            const x = parseInt(q.slice(7)), newBit = 1 << (q.charCodeAt(q.length - 1) - 97);
            paths.flip(x, bit[x] ^ newBit);  // the new letter changes the root path of every node in x's subtree
            bit[x] = newBit;
        } else {  // "query u v"
            const space = q.lastIndexOf(' ');
            const u = +q.slice(6, space), v = +q.slice(space + 1);
            const mask = paths.get(u) ^ paths.get(v) ^ bit[tree.lca(u, v)];  // the LCA cancels out in get(u) ^ get(v), so add it back
            ans.push((mask & (mask - 1)) === 0);  // at most one letter is odd
        }
    }
    return ans;
};