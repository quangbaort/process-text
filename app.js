var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api');
const connectDB = require('./database/conbection')
const mongoose = require("mongoose");

var app = express();

app.use(logger('dev'));
// connectDB
const url = "mongodb://127.0.0.1:27017/text"
try {
    mongoose.set('strictQuery', false)
    const con =  mongoose.connect(url,{
        useNewUrlParser: true,
    }).then(result => {
        console.log('ket noi thanh cong')
    }).catch(error => {
        console.log(error)
    })

} catch (error) {
    console.log(error)
}
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', apiRouter);


module.exports = app;
