import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import EmberValidations from 'ember-validations';

export default Ember.Route.extend(EmberValidations.Mixin,AuthenticatedRouteMixin, {
  renderTemplate: function() {
    this.render('node', { into: 'dashboard' });
  },

  actions: {
    delete: function() {
      let self = this;

      this.currentModel.destroyRecord().then(() => self.transitionTo('cluster'));
    }
  }
});
