import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function (controller, model) {
    this._super(controller, model);
    controller.set('existingUsers', this.store.find('user'));
  }
});
