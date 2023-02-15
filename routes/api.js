var express = require('express');
var router = express.Router();
const folderDB = require('../Models/folders')
const textDB = require('../Models/text')
/* GET home page. */
router.get('/:id', async (req, res, next) => {
    console.log('a')
    if(!req.params.id) {
        res.json({
            data: [],
            message: 'not found folder'
        }).status(404)
    }
    const queryFolder = { folder_id:  req.params.id };
    const result = await textDB.findOne(queryFolder)
    await textDB.deleteOne(queryFolder)
    res.json({
        data: result,
        message: "get sucess"
    }).status(200)
});

module.exports = router;
