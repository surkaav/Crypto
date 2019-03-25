
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

  const k={
    key:(len)=>{
        console.log("Key");
        AVAL={'6':3,'7':5,'8':7,'9':9,'10':11,'11':13,'12':15,'13':17,'14':19,'15':21,'16':23}
        console.log("ret"+AVAL[''+len]);
        return AVAL[len];
    }
}

  const crypt={
      login:(pwd,len)=>{
          var ka=k.key(len);
          af.encrypt(pwd,ka,b);
      }
}
  

res.send(crypt.login(pwd,len));
    // res.sendFile(__dirname + '/crypnew.html');
});
app.get('/new', function (req, res) {
    res.sendFile(__dirname + '/crypnew.html');
});
app.post('/new1', function (req, res) {
    res.sendFile(__dirname + '/crypnew.html');
});


var server = app.listen(2000, function () {
    console.log('Node server is running..');
});
