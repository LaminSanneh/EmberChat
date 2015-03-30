import Ember from 'ember';

export default Ember.Component.extend({

  inEditMode: false,
  actions: {
    delete: function () {
      this.sendAction('deleteMessageAction', this.get('message'));
    },

    enableEditMode: function(){
      this.set('inEditMode', true);
    },

    disableEditMode: function(){
      this.set('inEditMode', false);
    }
  }
});
