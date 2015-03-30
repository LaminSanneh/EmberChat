import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    messageSubmitted: function(messageBody){

      this.store.createRecord('message', {
        body: messageBody
      }).save();
    },

    deleteMessage: function(message) {

      message.destroyRecord();
    }
  }
});
