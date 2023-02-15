var express = require('express');
var router = express.Router();
const folderDB = require('../Models/folders')
const textDB = require('../Models/text')
/* GET home page. */
router.get('/folder_api/:id', function(req, res, next) {
    if(!req.params.id) {
        res.json({
            data: [],
            message: 'not found folder'
        }).status(404)
    }
    const queryFolder = { folder_id:  req.params.id };

    textDB.find(queryFolder).then(folder => {
        res.json({
            data: folder,
            message: "get success"
        })
    }).catch(error => {
        res.json({
            data: [],
            message: 'not found folder'
        }).status(404)
    })
});

module.exports = router;
