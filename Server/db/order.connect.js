const mongoose = require('mongoose')


mongoose.set('strictQuery', false)
const connectDB = (URI) =>{
    mongoose
        .connect(URI)
}
module.exports = connectDB