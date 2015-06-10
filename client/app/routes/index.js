import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.find("message");
  },
  setupController: function (controller, model) {
    this._super(controller, model);
    controller.set('loggedInUsers', this.store.find('user'));
  }
});
