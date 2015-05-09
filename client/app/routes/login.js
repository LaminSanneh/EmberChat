import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    loginSubmitted: function(username, password){
      console.log(arguments);
      var controller = this;
      var providerName = 'local';
      // argument to open is passed into the provider
      this.get('session').open(providerName, {
        username: username,
        password: password
      }).then(function(authorization){
        console.log(authorization);
        // authorization as returned by the provider
        controller.dealWithLoginToken(authorization.sessionToken);
      });
    }
  },
  dealWithLoginToken: function(){
    var route = this.get('target');
    //route.transitionTo();
    console.log(this.get('session'));
    console.log(this.get('session').get('sessionToken'));
  }
});
