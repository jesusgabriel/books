var express = require('express');
var app = express();
var BodyParser = require('body-parser');
var mongoose = require('mongoose');
var Book = require('./Book.model.js');
var port = 8080;
var db = 'mongodb://localhost/library';

mongoose.connect(db);

app.get('/', function(req, res){
res.send("Happy to be Here");

});
app.get('/books', function(req, res){
console.log("books is running ");
Book.find()
.exec(function(err,books){
  if(err){
    res.send('Error has occured')
  }else {
    console.log(books);
    res.json(books);
    }
  });
});

app.get('/books/:id', function(req, res){
Book.findOne({
  _id: req.params.id;
 });
 .exec(function(err,book){
   if(err){
     res.send('Error occured');
   }else {
     res.json(book);
     }
   });
});


app.listen(port, function(){
  console.log('listening on port 8080');
});
