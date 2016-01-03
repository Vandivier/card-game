var socket = io(); //=io.connect('http://localhost');

$(document).click('#chat-button', function(){
  chatTxt = $('#chat-text').val();
  if (chatTxt) {
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
socket.on('chat', function(msg){
  //console.log('message: ' + msg);
  $('#console').append('<br>' + msg);
});
