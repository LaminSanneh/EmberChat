import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin,{
  model: function () {
    var loggedInUserFromCookie = this.controllerFor('application').get('currentUser');
    return this.store.find('user', loggedInUserFromCookie.id);
  }
});
