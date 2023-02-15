const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    folder_api: {
        type: String,
    }
})
const folderDB = mongoose.model('folders', schema)
module.exports = folderDB