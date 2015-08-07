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
  },
  summaryImage: function(){
    var component = this;
    var otherUsers = this.get('sessionModel.users').filter(function(user){
      return user.get('id') != component.get('session.secure.currentUser.id');
    });

    return otherUsers.get('firstObject.avatar');
  }.property(),
});
