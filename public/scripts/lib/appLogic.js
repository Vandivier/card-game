var socket = io(); //=io.connect('http://localhost');

socket.on('connect', function(socket){
  socket.emit('my other event', { my: 'data' });
  socket.emit('chat', 'test-chat');
  socket.on('chat', function(msg){
    console.log('message: ' + msg);
  });
});
  
$(document).click('#chat-button', function(){
  chatTxt = $('#chat-text').val();
  if (chatTxt) {
    socket.emit('news',{some: 'news'});
    socket.emit('chat', chatTxt);
    $('#chat-text').val('');
  }
  return false;
});

socket.on('error', function (reason){
    console.error('Unable to connect Socket.IO', reason);
});
socket.on('connect', function (){
    console.info('Connected');
});
socket.on("event", function (data){
    console.log(data);
});

/*
socket.on('news', function (data) {
  var data = data || 'test data...';
  console.log(data);
  socket.emit('my other event', { my: 'data' });
});
*/
