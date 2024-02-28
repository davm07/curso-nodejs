const fs = require('node:fs'); // a partir de Node 16, se recomienda poner node: antes de cualquier modulo a importar

const stats = fs.statSync('./archivo.txt')

console.log(
    stats.isFile(),
    stats.isDirectory(),
    stats.isSymbolicLink(),
    stats.size,
)