const express = require('express');

//app setup
const app = express();
const server  = app.listen(4000, function(){
  console.log('listening to request on port 4000');
});

//Static file
app.use(express.static('public'));
