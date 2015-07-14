import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    startNewOrExistingSession: function (startingUser, otherUser) {
      console.log('In component');
      this.sendAction('startNewOrExistingSessionAction', startingUser, otherUser);
    }
  }
});
