const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/taskManagerdb')
.then(()=>{console.log('connected to db')})
.catch(( error)=>{console.log('Error occured while connecting to db', error)});

module.exports = mongoose;