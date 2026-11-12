/**
 * @param {number[][]} graph
 * @return {number[]}
 */
const eventualSafeNodes = (graph, revert = graph.map(_ => []), safeNodes=[]) => {
    graph.forEach((nodes, i) => nodes.forEach(n => revert[n].push(i)));
    const counts = graph.map(l => l.length);
    const queue = counts.map((v, i) => v ? -1 : i).filter(v => v >= 0);
    while (queue.length) {
        let node = queue.shift();
        safeNodes.push(node);
        revert[node].forEach(a => !--counts[a] && queue.push(a));
    }
    return safeNodes.sort((a, b) => a - b);
};