import Ember from 'ember';

export default Ember.Object.extend({
  open: function(authorization){
    return new Ember.RSVP.Promise(function(resolve, reject){
      resolve({sessionToken: 'Some Temp Token2'});
    });
    //var userId = authorization.user,
    //    store  = this.get('store');
    //return store.find('user', userId).then(function(user){
    //  return {
    //    currentUser: user
    //  };
    //});
  }
});