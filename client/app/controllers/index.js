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

      if(this.targetUserIsCurrentUser(targetUser, this.get('currentUser')) || this.sessionAlreadyExistsWithTargetUser(targetUser)){
        return;
      }

      var chatSession = {
        users: [],
        messages: [],
        startedBy: this.get('currentUser'),
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
  },
  targetUserIsCurrentUser: function(targetUser, currentUser){
    return targetUser.get('id') === currentUser.get('id');
  },
  sessionAlreadyExistsWithTargetUser: function(targetUser){
    var sessionExists = false;
    targetUser.get('chatSessions').forEach(function(session){
      session.get('users').forEach(function(user){
        if(user.get('id') === targetUser.get('id')){
          sessionExists = true;
        }
      });
    });

    return sessionExists;
  }
});
