const express = require('express');


const app= express();
const mongoose =require('./db/mongoose');
 

// app.listen(3000, function(){console.log('listening on port 3000')});
app.listen(3000, () => {console.log('listening on port 3000')});