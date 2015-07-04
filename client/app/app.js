import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

// io.sails.autoConnect = true;
// io.sails.url = config.APP.websocketBaseUrl;

//require('torii/load-initializers')['default']();


loadInitializers(App, config.modulePrefix);

export default App;
