const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect('mongodb+srv://captcha1:dCA7Gd1xmOTaCYof@captcha.ind1sb1.mongodb.net/?retryWrites=true&w=majority', () => {
            console.log('MongoDB: connected')
        })
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
module.exports = connectDB