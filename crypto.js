
var express = require('express');
var app = express();
const af=require('./affine_cipher');

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/crypto.html');
});

app.get('/reg', function (req, res) {
    res.sendFile(__dirname + '/cryptoreg.html');
});
app.get('/can', function (req, res) {
    res.sendFile(__dirname + '/crypto.html');
});
app.post('/new', function (req, res) {

  var pwd = req.body.password;
  var len = req.body.password.length;
  var b=33;

  const crypt={
      login:(pwd,len)=>{
          var a=k.key(len);
          af.encrypt(pwd,a,b);
      }
  }
  const k={
      key:(len)=>{
          if(len==6){
              a=3;
          }
          else if(len==7){
              a=5;
          }
          else if(len==8){
              a=7;
          }
          else if(len==9){
              a=9;
          }
          else if(len==10){
              a=11;
          }
          else if(len==11){
              a=13;
          }
          else if(len==12){
              a=15;
          }
          else if(len==13){
              a=15;
          }
          else if(len==14){
              a=19;
          }
          else if(len==15){
              a=21;
          }
          else if(len==16){
              a=23;
          }
      }
  }


res.send(crypt.login(pwd,len));
    // res.sendFile(__dirname + '/crypnew.html');
});
app.get('/new', function (req, res) {
    res.sendFile(__dirname + '/crypnew.html');
});


var server = app.listen(2000, function () {
    console.log('Node server is running..');
});
