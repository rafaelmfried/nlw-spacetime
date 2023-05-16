import fastify from 'fastify'
import dotenv from 'dotenv'
import { PrismaClient } from '@prisma/client'

dotenv.config()

const PORT: number = parseInt(process.env.PORT || '3333')

const app = fastify()
const prisma = new PrismaClient()

app.post('/users', async () => {
  const users = await prisma.user.findMany()
  return users
})

app
  .listen({
    port: PORT,
  })
  .then(() => {
    console.log(`Listening at port ${PORT}`)
  })
