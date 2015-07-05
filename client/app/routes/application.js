import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';


export default Ember.Route.extend(ApplicationRouteMixin, {
  model: function(params){
    return Ember.RSVP.hash({
      messages: this.store.find('message'),
      users: this.store.find('user'),
      chatSessions: this.store.find('chatSession')
    });
  },
  setupController: function(controller, model){
    this._super(controller, model);
    controller.set('messages', model.messages);
    controller.set('users', model.users);
    controller.set('chatSessions', model.chatSessions);
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
