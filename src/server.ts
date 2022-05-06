import cors from 'cors'
import 'dotenv/config'
import express from 'express' 
import { routes } from './routes'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json({limit: '50mb'}))
app.use(cors())
app.use(express.json())
app.use(routes)

const port = process.env.PORT
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

