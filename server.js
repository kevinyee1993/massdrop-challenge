const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();

// keeps database credentials hidden
const dotenv = require('dotenv');
dotenv.config();
var url = process.env.MONGOLAB_URI;

var db;

MongoClient.connect(url, function(err, client) {
  if(err) return console.log(err);

  db = client.db('massdrop');

  // only start server if it is connected to database
  app.listen(3000, function() {
    console.log("listening to port 3000");
  });

});

// tells body parser to extract data from form element and adds them
// to the body property of the request object
app.use(bodyParser.urlencoded({ extended: true }));



// can use this to get the url they send in
app.get('/', function(req, res) {
  // res.send('This is a get request');
  res.sendFile(__dirname + '/index.html');
  // var cursor = db.collection('jobs').find().toArray(function(err, results) {
    // console.log(results[0].name);
  // });
});


app.get('/id', function(req, res) {
  let jobId = req.query.id;
  console.log(req.query.id);
});

app.post('/job', function(req, res) {
  db.collection('jobs').save(req.body, function(err, result) {
    if(err) return console.log(err);

    console.log("successfully saved to db");

    // redirects user back to root after done posting to db
    res.redirect('/');
  });
});

/*
<form class="" action="/todo" method="post">
  <input type="text" name="name">
  <input type="text" name="priority">
  <button type="submit">Submit</button>
</form>
*/
