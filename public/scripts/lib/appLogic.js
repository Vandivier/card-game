var socket = io(); //=io.connect('http://localhost');

socket.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});
socket.on('news', function (data) {
  var data = data || 'test data...';
  console.log(data);
  socket.emit('my other event', { my: 'data' });
});

console.log('check3');

//var socket = io();
$(document).click('#chat-button', function(){
  chatTxt = $('#chat-text').val();
  if (chatTxt) {
    socket.emit('news',{some: 'news'});
    socket.emit('chat message', chatTxt);
    $('#chat-text').val('');
    console.log(chatTxt);
  }
  return false;
});

console.log('check2');
$(function(){
  console.log('jquery check');
});
