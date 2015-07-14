import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: ['application'],
  currentUser: Ember.computed.alias('controllers.application.currentUser')
});
