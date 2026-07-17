const fs = require('fs');
fs.mkdirSync('dist', { recursive: true });
fs.copyFileSync('src/sum.js', 'dist/sum.js');
console.log('build ok → dist/');