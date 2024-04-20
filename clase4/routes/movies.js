import { Router } from 'express'
import { MovieController } from '../controllers/movies.js'

export const moviesRouter = Router()

// Todos los recursos que sean MOVIES se identifica con /movies
moviesRouter.get('/', MovieController.getAll)

// Recupera una pelicula por id
moviesRouter.get('/:id', MovieController.getById)

moviesRouter.post('/', MovieController.create)

moviesRouter.delete('/:id', MovieController.delete)

moviesRouter.patch('/:id', MovieController.update)
