import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import EmberValidations from 'ember-validations';

export default Ember.Route.extend(EmberValidations.Mixin,AuthenticatedRouteMixin, {
  model: function() {
    return this.store.createRecord('cluster');
  },

  renderTemplate: function() {
    this.render('clusters/new', { into: 'dashboard' });
  }
});
