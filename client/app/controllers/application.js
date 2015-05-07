import Ember from 'ember';

export default Ember.Controller.extend({
  init: function(){
    var modelNames = ["message"],
        socket = this.socketService.socket,
        controller = this;

    modelNames.forEach(function(name){
      socket.on(name, function(event){
        console.log(event);
        switch(event.verb){
          case "created":
            var model = event.data;
            model.id = event.id;
            controller.store.push(name, model);
          case "updated":
            var model = event.data;
            model.id = event.id;
            controller.store.push(name, model);
          case "destroyed":
            controller.store.find(name, event.previous.id).then(function(model){
              controller.store.deleteRecord(model);
            });
        }
      });
    });
  }
});
