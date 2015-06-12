import Ember from 'ember';
// import config from './config/environment';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    return this.store.findAll('container');
  }
  // queryParams: {
  //   all: { refreshModel: true }
  // },
  // model: function(params) {
  //   return Ember.$.getJSON(`${config.apiURL}/containers/json?all=${params.all}`);
  // }
});
