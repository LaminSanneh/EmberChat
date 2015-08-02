import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin,{
  setupController: function (controller, model) {
    this._super(controller, model);
    controller.set('existingUsers', this.store.find('user'));
  },
  renderTemplate: function (controller, model) {
    this.render();
    this.render('headers/users',{
      into: 'application',
      outlet: 'mainHeader'
    });
  }
});
