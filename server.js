var express = require("express")
var app = express()

var port =3456;

var http = require('http');
var server = http.createServer(
    app
).listen(port, () => {
    console.log('Socket.io test started on port ', port)
});

var io = require('socket.io')(server)


io.on('connection', (socket) => {
    socket.on('echo', (data) => {
        socket.emit('echo', {youSent:data});
    });
    setInterval(()=>{
            socket.emit('time', {myTime:new Date(Math.floor((new Date()).getTime()/1000)*1000).toISOString()});
    },1000)


});

