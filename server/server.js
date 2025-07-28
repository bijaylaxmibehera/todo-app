const express=require('express')
const app=express()
const dotenv=require('dotenv')
const connectDB=require('./db/connectDB')



app.use(express.json())

dotenv.config();
connectDB()

app.listen(3000, ()=>{
    console.log(`The server is running on port 3000`)
})