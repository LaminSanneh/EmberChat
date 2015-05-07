import Ember from 'ember';

export default Ember.ArrayController.extend({
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
    }
  }
});
