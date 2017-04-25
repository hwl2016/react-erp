const express = require('express');
const debug = require('debug');
var server = express();
var path = require('path');
var http = require('http');

// 网站图标
// var favicon = require('serve-favicon');
// server.use(favicon(path.join(__dirname + '/public/favicon.png')));

// 加载静态文件路由
// server.use('/static', express.static(path.join(__dirname + '/public')));
// server.use('/release', express.static(path.join(__dirname + '/dist')));
server.use('/data', express.static(path.join(__dirname + '/data')));

// CORS, 跨域资源共享
// server.all( '*', function ( req, res, next ) {
//   res.set( {
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
//     'Access-Control-Max-Age': '3600',
//     'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Cookie'
//     // 'Access-Control-Allow-Headers': '*'
//   } );
//   next();
// });

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:63342');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials','true');
    next();
};
server.use(allowCrossDomain);

// 加载模拟后台接口的逻辑路由
// server.all(require('./core/simulator').sysRouters(server));

// 错误处理
server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

http.createServer(server).listen(8000);