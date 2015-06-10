import Ember from 'ember';

export default Ember.Controller.extend({
  init: function(){
    var modelNames = ["message", "user"],
        socket = this.socketService.socket,
        controller = this;

    modelNames.forEach(function(name){
      socket.on(name, function(event){

        function getModel(type, id){
          return controller.store.find(name, id);
        }

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
  }
});
