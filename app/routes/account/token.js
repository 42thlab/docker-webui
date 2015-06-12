import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    let session = localStorage.getItem('ember_simple_auth:session');
    let sessionJSON = JSON.parse(session);

    return sessionJSON.secure.token;
  },

  actions: {
    submit: function(){
      self = this;

      this.store.find('account/token', '').then(function(token) {
        let session = localStorage.getItem('ember_simple_auth:session');
        let sessionJSON = JSON.parse(session);
        sessionJSON.secure.token = token.get('token');
        let newSession = JSON.stringify(sessionJSON);
        localStorage.setItem('ember_simple_auth:session', newSession);
        self.refresh();
      });
    },
  }
});
