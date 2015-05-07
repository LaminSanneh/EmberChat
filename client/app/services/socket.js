import Ember from 'ember';
import config from '../config/environment';

io.sails.autoConnect = true;
io.sails.url = config.APP.websocketBaseUrl;

var socket = io.sails.connect();

socket.get("/api/messages", function(messages){
  console.log(messages);
});

export default Ember.Object.extend({
  socket: socket
});
