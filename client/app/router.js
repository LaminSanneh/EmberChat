import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('login', function() {});
  this.resource('user', function() {});
  this.route('register');
  this.route('chatSessions');
  this.route('chatSession', {path: '/chatSessions/:id'});
  this.route('users');
});

export default Router;
