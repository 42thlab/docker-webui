import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import config from '../config/environment';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  renderTemplate: function() {
    this.render('container', { into: 'dashboard' });
  },

  model: function(params){
    return Ember.$.getJSON(`${config.apiURL}/containers/${params.container_id}/json`);
  },
});
