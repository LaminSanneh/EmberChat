import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    loginSubmitted: function(username, password){
      var route = this;
      
      var providerName = 'local',
      options = {
        username: username,
        password: password
      };

      this.get('session').authenticate('simple-auth-authenticator:torii', providerName, options).then(function(user, user2){
        var users = route.get('currentModel.users'),
        currentUser = users.findBy('username', username);
        console.log('Logged in with simple auth');
        currentUser.set('isConnected', true).save().then(function(){
          route.transitionTo('index');
        });
      });
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
