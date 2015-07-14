import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  currentUser: Ember.computed.alias('controllers.application.currentUser'),
  actions: {
    goToSession: function (session) {
      console.log('In controller');
      this.transitionToRoute('chatSession', session);
    },
    deleteChatSession: function(session){
      session.destroyRecord();
    }
  }
});
