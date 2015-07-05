import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: ['application'],
  currentUser: Ember.computed.alias('controllers.application.currentUser'),
  actions: {
    messageSubmitted: function(messageBody){

      this.store.createRecord('message', {
        body: messageBody
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
    },
    startNewOrExistingSession: function(targetUser){

      if(targetUser.get('id') === this.get('currentUser.id')){
        return;
      }

      var chatSession = {
        users: [],
        messages: [],
        type: 'private'
      },
      controller = this;
      this.store.createRecord('chatSession', chatSession).save().then(function(newSession){
        newSession.get('users').addObjects([controller.get('currentUser'),targetUser]);
        newSession.save();
      });
    },
    deleteChatSession: function(session){
      session.destroyRecord();
    }
  }
});
