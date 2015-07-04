/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-chat',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    contentSecurityPolicy : {
      // 'default-src': "'none'",
      // 'script-src': "'self' 'unsafe-eval' 'unsafe-inline' localhost:35729",
      // 'font-src': "'self' data: http://fonts.gstatic.com",
      // 'connect-src': "'self' ws://localhost:35729",
      // 'img-src': "'self'",
      // 'style-src': "'self' fonts.googleapis.com",
      // 'media-src': "'self'"
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      websocketBaseUrl: 'http://localhost:1337',
      websocketNamespace: 'api',
      // if you want some useful debug information related to sails 
      SAILS_LOG_LEVEL: 'debug',
      emberDataSails:  {
        // default is to use same host and port as the ember app: 
        host: '//localhost:1337',
        // this is the default and is the path to the sails io script: 
        //scriptPath: '/js/dependencies/sails.io.js' 
      }
    },

    torii: {
      sessionServiceName: 'session',
      providers: {
        local: {

        },
        'facebook-connect': {
            appId: 'xxxxx-some-app-id',
            scope: 'email,user_birthday'
        }
      }
    }

  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  ENV.contentSecurityPolicy['script-src'] += ' http://localhost:1337';
// allow the websocket to connect
  ENV.contentSecurityPolicy['connect-src'] += ' http://localhost:1337 ws://localhost:1337';

  return ENV;
};
