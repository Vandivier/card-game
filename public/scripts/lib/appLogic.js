import {Injectable, OnInit} from 'angular2/core';
/*
var socket = io(); //=io.connect('http://localhost');

$(document).submit('#chat-form', function(){
  chatTxt = $('#chat-text').val();
  if (chatTxt) {
    socket.emit('chat', chatTxt);
    $('#chat-text').val('');
  }
});

socket.on('error', function (reason){
    console.error('Unable to connect Socket.IO', reason);
});
socket.on('connect', function (){
    console.info('Connected');
    socket.emit('test', {});
});
socket.on('defaultUsername', function (data){
    console.log(data.username);
    $('#localUsername').val(data.username);
});
socket.on('chat', function(msg){
  //console.log('message: ' + msg);
  $('#console').append('<br>' + msg);
});
*/

@Injectable
export class AppLogic implements OnInit {
  ngOnInit() {
    console.log('AppLogic is here!!');
  }
}