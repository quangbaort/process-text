
const mongoose = require("mongoose");

const connectDB = async () => {
    const url = "mongodb://localhost" +
        ":27017"
    try {
        mongoose.set('strictQuery', false)
        const con = await mongoose.connect(url,{
            useNewUrlParser: true,
        })
        console.log('ket noi thanh cong toi database')
    } catch (error) {
        console.log(error)
    }
}
module.exports = connectDB