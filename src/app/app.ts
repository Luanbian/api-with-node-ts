import fastify from 'fastify'
import { routes } from '../routes/router'
import cors from '@fastify/cors'

export const app = fastify()
app.register(cors)
app.register(routes)