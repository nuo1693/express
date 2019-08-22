var express = require('express'); //加载express模块
var app = express();
var port = process.env.PORT || 3000; //监听的端口
app.use(express.static(__dirname + '/dist'));
app.get('/', function (req, res) {
  //get,put,post,delete
  res.sendfile(__dirname + './dist/index.html');
});
app.listen(port, function () {
  console.log('TechNode is on port' + port + '!');
});