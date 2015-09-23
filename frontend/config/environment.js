/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'frontend',
    environment: environment,
    baseURL: '/',
    apiURL: 'http://localhost:1776',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    'ember-simple-auth': {
      base: {
        store: 'session-store:local-storage'
      },
      crossOriginWhitelist: ['http://localhost:1776']
    },
    'simple-auth-token': {
      serverTokenEndpoint: 'http://localhost:1776/login',
      identificationField: 'email'
    },
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval' http://platform.twitter.com https://platform.twitter.com https://cdn.syndication.twimg.com https://syndication.twitter.com",
      'font-src': "'self' https://fonts.gstatic.com data:",
      'connect-src': "'self' http://localhost:1776",
      'img-src': "'self' http://semantic-ui.com https://pbs.twimg.com https://abs.twimg.com https://syndication.twitter.com http://platform.twitter.com data:;",
      'report-uri':"'localhost'",
      'style-src': "'self' 'unsafe-inline' https://fonts.googleapis.com http://platform.twitter.com",
      'frame-src': "'none'"
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
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

  return ENV;
};
