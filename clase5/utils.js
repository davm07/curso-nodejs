// como leer un json en ESModules recomendado por ahora (2023)
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url) // import.meta.url basicamente contiene la direccion en la que se encuentra nuestro archivo actualmente

export const readJSON = (path) => require(path)
