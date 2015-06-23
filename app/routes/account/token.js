import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    let session = localStorage.getItem('ember_simple_auth:session');
    let sessionJSON = JSON.parse(session);

    return sessionJSON.secure.token;
  }
});
