var express = require('express');
var proxy = require('http-proxy-middleware');

// proxy 中间件的选择项
var options = {
    target: 'http://dealer.yokeamall.com:8086', // 目标服务器 host
    changeOrigin: true,               // 默认false，是否需要改变原始主机头为目标URL
    ws: false,                         // 是否代理websockets
};

// 创建代理
var exampleProxy = proxy(options);

// 使用代理
var app = express();
app.use(express.static(__dirname + '/dist4'));
app.use('/', exampleProxy);
app.listen(9999);