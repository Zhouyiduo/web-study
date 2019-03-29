var express = require('express');
var app = express();
 
app.use(express.static('public'));
app.use(express.static('./'));
 
app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

app.get('/load-arraybuffer',function(req,res){
    var buffer = new ArrayBuffer(8);
    var x1 = new Int8Array(buffer);
    var x1text = new Int8Array([64,0,0,0]);
    x1.set(x1text);
    res.send(x1);
 })
  
var server = app.listen(8088, function () {
 
    var host = server.address().address
    var port = server.address().port
   
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
   
  })