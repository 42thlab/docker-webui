import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import EmberValidations from 'ember-validations';

export default Ember.Route.extend(EmberValidations.Mixin,AuthenticatedRouteMixin, {
  renderTemplate: function() {
    this.render('node/edit', { into: 'dashboard' });
  },

  actions: {
    submit: function(defer) {
      this.currentModel.save()
      .then(() => {
        defer.resolve();
      })
      .catch(() => {
        // errorHandler(self);
        defer.reject();
      });
    },
  }
});
