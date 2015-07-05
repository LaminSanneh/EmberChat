import Ember from 'ember';

export default Ember.Controller.extend({
  init: function(){
    var modelNames = ["message", "user", "chatSession"],
        socket = this.sailsSocket,
        controller = this;

    socket.on('didConnect', function(){
      console.log('Socket Connected');
    });

    socket.on('didDisconnect', function(){
      console.log('Socket Disconnected');
    });

    function getModel(type, id){
      return controller.store.getById(name, id);
    }

    modelNames.forEach(function(name){
      socket.on(name, function(event){

        console.log(event);
        switch(event.verb){
          case "created":
            getModel(name, event.id).then(function(model) {
              console.log(model);
              if(model){
                model.setProperties(event.data);
              }
              else{
                controller.store.push(name, event.data);
              }
            });
            break;
          case "updated":
            getModel(name, event.previous.id).then(function(model) {
              model.setProperties(event.data);
            });
            break;
          case "destroyed":
            getModel(name, event.previous.id).then(function(model){
              controller.store.deleteRecord(model);
            });
            break;
        }
      });
    });
  },
  currentUser: function(){
    // User as stored in the session cookie
    var currentSessionUser = this.get('session.secure.currentUser'); 
    if(Ember.isEmpty(currentSessionUser)){
      return {};
    }

    return this.store.getById('user',currentSessionUser.id);
  }.property('session.secure.currentUser.id')
});
