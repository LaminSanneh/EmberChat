import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function (params) {
    return this.store.find('chatSession', params.id);
  },
  renderTemplate: function (controller, model) {
    this.render();
    this.render('headers/chat-session',{
      into: 'application',
      outlet: 'mainHeader'
    });
  }
});
