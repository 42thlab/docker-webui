/* jshint node: true */
var apiURL = process.env.API_URL;
var API_NAMESPACE = 'api/v1';

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'daas-webui',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    contentSecurityPolicy: {
      'connect-src': '*',
      'script-src': '*'
    },
    apiURL: apiURL,
    apiNamespace: API_NAMESPACE,
    'simple-auth': {
      authorizer: 'simple-auth-authorizer:token',
      authenticationRoute: 'index',
      // session: 'session:withCurrentUser'
    },
    'simple-auth-token': {
      serverTokenEndpoint: apiURL+'/'+API_NAMESPACE+'/auth/login',
      identificationField: 'email',
      passwordField: 'password',
      tokenPropertyName: 'token',
      authorizationPrefix: 'JWT ',
      authorizationHeaderName: 'Authorization',
      headers: {},
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

    // ENV['simple-auth'].store = 'simple-auth-session-store:ephemeral';
  }

  if (environment === 'production') {
    ENV.contentSecurityPolicy =  {
      'connect-src': "'self' "+apiURL,
      'script-src': "'self' "+apiURL
    };
  }

  return ENV;
};
