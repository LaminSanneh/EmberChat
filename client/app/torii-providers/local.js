import Ember from 'ember';

export default Ember.Object.extend({
  open: function(options){
    return new Ember.RSVP.Promise(function(resolve, reject){
      resolve({sessionToken: 'Some Temp Token'});
    });
  }
});