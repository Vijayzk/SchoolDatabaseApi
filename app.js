import express from 'express'
import connectDB from './db/connectdb.js'
import web from './routes/web.js'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
const port = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL 



//Database Connection
connectDB(DATABASE_URL)

//API JSON
app.use(express.json())

//Load Routes
app.use('/student',web)


app.listen(port,()=>{
    console.log(`Server listening at http://localhost:${port}`)
})