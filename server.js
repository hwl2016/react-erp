const express = require('express');
const debug = require('debug');
var server = express();
var path = require('path');
var http = require('http');

var fs = require('fs');

// 加载静态文件路由
server.use('/', express.static(path.join(__dirname + '/public')));

// CORS, 跨域资源共享
server.all( '*', function ( req, res, next ) {
  res.set( {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
    'Access-Control-Max-Age': '3600',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Cookie, send'
    // 'Access-Control-Allow-Headers': '*'
  } );
  // res.send('all method invoke');
  next();
});

server.get('/', function(req, res) {
	var indexPath = './public/index.html';
	fs.readFile(indexPath, function(err, result) {
		if(!err) {
			res.send(result.toString());
		}
	})
})

var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
}

var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
}

var cb2 = function (req, res) {
  res.send('Hello from C!');
}

server.get('/example/c', [cb0, cb1, cb2]);

//下载文件
server.get('/download', function(req, res) {
	res.download('./package.json');
});

server.get('/:role/getAll', (req, res) => {
	fs.readFile(`./public/data/${req.params.role}.json`, (err, result) => {
		if(!err) {
			res.json( JSON.parse(result.toString()) );
		}
	})
})


// 错误处理
server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

http.createServer(server).listen(8000);

