const express = require('express')
const app = express()

//import variable environnement packge
require('dotenv').config()
var cors = require('cors')
app.use(express.json())

//import order route
const orderroutes = require('./routes/order.routes')

// import mongoose connect
const connecttodb = require('./db/order.connect')
app.use(cors())

// using order
app.use('/api/v1/',orderroutes)


const connectDB = async (URI,port) =>{
    try {
        await connecttodb(URI)
        app.listen(port,console.log(`app is working ${port}...`))
    } catch (error) {
        console.log(error)
    }
}



//listen the connections on the specified host and port
connectDB(process.env.URI_MONGODB,process.env.PORT)