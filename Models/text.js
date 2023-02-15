const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    text: {
        type: String,
    }
})
const textDB = mongoose.model('texts', schema)
module.exports = textDB