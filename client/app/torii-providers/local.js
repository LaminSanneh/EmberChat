import Ember from 'ember';
import config from '../config/environment';

export default Ember.Object.extend({
  open: function(credentials){
    return new Ember.RSVP.Promise(function(resolve, reject){
      var data = {
        username: credentials.username,
        password: credentials.password,
        anonymous: credentials.anonymous
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
  }
});