import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';


export default Ember.Route.extend(ApplicationRouteMixin, {
  model: function(params){
    return Ember.RSVP.hash({
      messages: this.store.find('message')
    });
  },
  setupController: function(controller, model){
    this._super(controller, model);
    controller.set('messages', model.messages);
  },
  actions: {
    invalidateSession: function() {
      var controller = this.controllerFor('application'),
        route = this,
        currentUser = controller.get('currentUser');

      currentUser.set('isConnected', false);
      currentUser.save().then(function(){
        route.get('session').invalidate();
      });
    }
  }
});
