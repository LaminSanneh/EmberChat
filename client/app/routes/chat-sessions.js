import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  setupController: function (controller, model) {
    this._super(controller, model);
    this.controllerFor('application').set('title', 'Recent Chat');
  },
  renderTemplate: function (controller, model) {
    this.render();
    this.render('headers/chat-sessions',{
      into: 'application',
      outlet: 'mainHeader'
    });
  }
});
