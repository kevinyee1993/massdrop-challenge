const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// tells body parser to extract data from form element and adds them
// to the body property of the request object
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, function() {
  console.log("listening to port 3000");
});


// can use this to get the url they send in
app.get('/', function(req, res) {
  // res.send('This is a get request');
  res.sendFile(__dirname + '/index.html');
});

app.post('/todo', function(req, res) {
  console.log(req.body);
});
