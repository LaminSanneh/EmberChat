import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    loginSubmitted: function(username, password){
      console.log(arguments);
      var route = this;
      
      var providerName = 'local',
      options = {
        username: username,
        password: password
      };

      this.get('session').authenticate('simple-auth-authenticator:torii', providerName, options).then(function(){
        console.log('Logged in with simple auth');
        this.redirectToRoute('index');
      });
      // argument to open is passed into the provider
      // this.get('session').open(providerName, {
      //   username: username,
      //   password: password
      // }).then(function(authorization){
      //   console.log(authorization);
      //   // authorization as returned by the provider
      //   route.dealWithLoginToken(authorization.sessionToken);
      // });
    }
  },
  dealWithLoginToken: function(sessionToken){
    var route = this.get('target');
    //route.transitionTo();
    console.log(this.get('session'));
    console.log(this.get('session').get('sessionToken'));
  },
  dealWithAnonymousLogin: function(username){
    
    this.store.createRecord('user', {
      username: username,
      anonymous: true
    }).save().then(function(user){
      console.log(user);
    });
  }
});
