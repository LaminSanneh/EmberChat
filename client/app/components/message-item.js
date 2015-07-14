import Ember from 'ember';

export default Ember.Component.extend({

  inEditMode: false,
  ownedByMe: function(){
      return this.get('message.sender.id') === this.get('session.secure.currentUser.id');
  }.property(),
  actions: {
    delete: function () {
      this.sendAction('deleteMessageAction', this.get('message'));
    },

    enableEditMode: function(){
      this.set('inEditMode', true);
    },

    finishedEditing: function(){
      this.set('inEditMode', false);
      this.sendAction('updateMessageAction', this.get('message'));
    }
  }
});
