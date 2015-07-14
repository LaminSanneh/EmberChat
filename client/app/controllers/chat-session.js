import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  currentUser: Ember.computed.alias('controllers.application.currentUser'),
  actions:{
    messageSubmitted: function(messageBody, session, sender){

      this.store.createRecord('message', {
        body: messageBody,
        chatSession: session,
        sender: sender
      }).save().then(function(){
        this.set('messageBody', '');
      }.bind(this));
    },

    deleteMessage: function(message) {

      message.destroyRecord();
    },

    updateMessage: function(message){
      if(message.get('isDirty')){
        message.save();
      }
    }
  }
});
