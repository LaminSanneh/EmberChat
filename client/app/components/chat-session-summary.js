import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    goToSession: function(session){
      console.log('clicked component');
      this.sendAction('goToSessionAction', session);
    },
    deleteChatSession: function (session) {
      this.sendAction('deleteChatSessionAction', session);
    }
  }
});
