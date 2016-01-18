import {Injectable} from 'angular2/core';

@Injectable()
export class AppLogic {
  test() {
    console.log('AppLogic is here!!');
  }
  init() {
    $(document).submit('#chat-form', function(){
      chatTxt = $('#chat-text').val();
      if (chatTxt) {
        socket.emit('chat', chatTxt);
        $('#chat-text').val('');
      }
    });
  }
}