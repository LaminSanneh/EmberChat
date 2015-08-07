import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  currentUser: Ember.computed.alias('controllers.application.currentUser'),
  existingUsers : function(){
    return this.get('allUsers').filter(function(user){
      return this.get('currentUser').id !== user.get('id');
    }.bind(this));
  }.property('currentUser'),
  actions: {
    startNewOrExistingSession: function (startingUser, otherUser) {
      var checkSession,
        controller = this,
        chatSession;

      if(this.targetUserIsCurrentUser(otherUser, startingUser)){
        return;
      }

      chatSession = this.sessionAlreadyExistsWithTargetUser(otherUser);
      if(chatSession[0]){
        controller.transitionToRoute('chatSession', chatSession[1]);
        return;
      }

      var chatSession = {
        users: [],
        messages: [],
        startedBy: startingUser,
        type: 'private'
      };

      this.store.createRecord('chatSession', chatSession).save().then(function(newSession){
        newSession.get('users').addObjects([startingUser,otherUser]);
        newSession.save().then(function(newSession1) {
          controller.transitionToRoute('chatSession', newSession1);
        });
      });
    }
  },
  targetUserIsCurrentUser: function(targetUser, currentUser){
    return targetUser.get('id') === currentUser.get('id');
  },
  sessionAlreadyExistsWithTargetUser: function(targetUser){
    var sessionExists = false,
      requiredSession = null;
    targetUser.get('chatSessions').forEach(function(session){
      session.get('users').forEach(function(user){
        if(user.get('id') === targetUser.get('id')){
          sessionExists = true;
          requiredSession = session;
        }
      });
    });

    return [sessionExists, requiredSession];
  }
});
