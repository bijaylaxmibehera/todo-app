const express=require('express')
const app=express()
const dotenv=require('dotenv')
const cors=require('cors')
const helmet=require('helmet')
const connectDB=require('./db/connectDB')
//configure dotenv
dotenv.config();
const port=process.env.PORT || 3000


app.use(express.json())
app.use(cors())
app.use(helmet())


//connect database
connectDB()

app.get('/', (req,res)=>{
    res.send("Hello, welcome to the todo API!")
})

app.listen(port, ()=>{
    console.log(`Server is running at: http://localhost:${port}`)
})