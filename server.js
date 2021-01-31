const express = require('express')
const bodyParser = require('body-parser');

//Create express app
const app = express();

//parse request of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

require('./Routes/route.js')(app);
console.log("Server is running.....");

app.listen(3000, () =>{
  console.log("Server has started on port 3000 !")
  require('./Config/db.connection');
});


