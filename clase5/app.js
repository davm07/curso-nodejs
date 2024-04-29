// como leer un JSON en ESModules
// import fs from 'node:fs'
// const movies = JSON.parse(fs.readFileSync('./movies.json', 'utf-8'))

// EN EL FUTURO: el import del json sera asi:
// import movies from './movies.json' with { type: 'json' }

// métodos normales: GET/HEAD/POST
// métodos complejos: PUT/PATCH/DELETE

// CORS PRE-Flight basicamente es como una peticion previa al recurso
// OPTIONS

import express, { json } from 'express' // require -> commonJS
import { createMovieRouter } from './routes/movies.js'
import { corsMiddleware } from './middlewares/cors.js'
import 'dotenv/config'

// después
export const createApp = ({ movieModel }) => {
  const app = express()
  app.use(json())
  app.use(corsMiddleware())
  app.disable('x-powered-by')

  app.use('/movies', createMovieRouter({ movieModel }))

  const PORT = process.env.PORT ?? 1234

  app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`)
  })
}
