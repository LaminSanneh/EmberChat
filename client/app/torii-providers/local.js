import Ember from 'ember';
import config from '../config/environment';

export default Ember.Object.extend({
  open: function(credentials){
    return new Ember.RSVP.Promise(function(resolve, reject){
      var data = {
        username: credentials.username,
        password: credentials.password
      },
      url = config.APP.websocketBaseUrl + '/' + config.APP.websocketNamespace + '/login';
      
      Ember.$.ajax({
        url: url,
        data: data,
        method: 'post',
        success: function(res){
          resolve({currentUser: res});
        },
        error: function(res){
          reject(res);
        }
      });
    });
  },
  fetch: function(data){
    var that = this;
    console.log('Hello');
    console.log(data);
    return new Ember.RSVP.Promise(function(resolve, reject){
      that.store.find('user', data.currentUser.id).then(function(user){
        
        resolve({
            currentUser:{
            id: user.id
          },
          provider: data.provider
        });
      });
    });
  }
});