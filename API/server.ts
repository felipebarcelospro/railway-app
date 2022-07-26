import express from 'express'

import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const server = express()
const prisma = new PrismaClient()

server.get('/', async (request, response) => {
  const users = await prisma.user.findMany()

  response.send(users)
})


const { PORT } = process.env
server.listen(PORT, () => console.log(`Server started at ${PORT}`))