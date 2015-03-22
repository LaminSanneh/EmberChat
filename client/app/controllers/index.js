import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    messageSubmitted: function(messageBody){
      console.log(this.get('messageBody'));
      this.store.createRecord('message', {
        body: messageBody
      }).save();
    }
  }
});
