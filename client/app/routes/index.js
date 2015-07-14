import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin,{
  model: function(){
    return this.store.find("message");
  },
  setupController: function (controller, model) {
    this._super(controller, model);
    controller.set('loggedInUsers', this.store.find('user'));
  },
  redirect: function () {
    return this.transitionTo('chatSessions');
  }
});
