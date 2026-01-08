import express from 'express'
import type { Request, Response } from 'express'
import { ENV } from './config/env.js'

const app = express()

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Express + TypeScript')
})

const port = Number(ENV.PORT) || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
