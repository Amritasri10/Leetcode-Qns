/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @param {number} k
 * @return {number}
 */
var shortestPath = function(n, edges, labels, k) {
    const m = edges.length;
    const head = new Int32Array(n).fill(-1);
    const nxt = new Int32Array(m);
    for (let i = 0; i < m; i++) {
        nxt[i] = head[edges[i][0]];
        head[edges[i][0]] = i;
    }
    const lab = new Uint8Array(n);
    for (let i = 0; i < n; i++) lab[i] = labels.charCodeAt(i);

    const dist = new Float64Array(n * k).fill(Infinity);
    const keys = [];
    const vals = [];
    let topKey = 0, topVal = 0;

    const push = (key, val) => {
        let i = keys.length;
        keys.push(key);
        vals.push(val);
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (keys[p] <= key) break;
            keys[i] = keys[p];
            vals[i] = vals[p];
            i = p;
        }
        keys[i] = key;
        vals[i] = val;
    };

    const pop = () => {
        topKey = keys[0];
        topVal = vals[0];
        const lk = keys.pop();
        const lv = vals.pop();
        const size = keys.length;
        if (size > 0) {
            let i = 0;
            while (true) {
                let c = 2 * i + 1;
                if (c >= size) break;
                if (c + 1 < size && keys[c + 1] < keys[c]) c++;
                if (keys[c] >= lk) break;
                keys[i] = keys[c];
                vals[i] = vals[c];
                i = c;
            }
            keys[i] = lk;
            vals[i] = lv;
        }
    };

    dist[0] = 0;
    push(0, 0);
    while (keys.length > 0) {
        pop();
        const d = topKey;
        const state = topVal;
        if (d > dist[state]) continue;
        const u = Math.floor(state / k);
        const run = state - u * k + 1;
        if (u === n - 1) return d;
        for (let e = head[u]; e !== -1; e = nxt[e]) {
            const v = edges[e][1];
            const nr = lab[v] === lab[u] ? run + 1 : 1;
            if (nr > k) continue;
            const ns = v * k + nr - 1;
            const nd = d + edges[e][2];
            if (nd < dist[ns]) {
                dist[ns] = nd;
                push(nd, ns);
            }
        }
    }
    return -1;
};