const items = [];
let id = 1;
module.exports = { all: () => items, add: (text) => { const n = { id: id++, text }; items.unshift(n); return n; } };
