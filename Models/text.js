const mongoose = require('mongoose')

const schema = new mongoose.Schema({

})
const textDB = mongoose.model('texts', schema)
module.exports = textDB