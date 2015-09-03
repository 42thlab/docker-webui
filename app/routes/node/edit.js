import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import EmberValidations from 'ember-validations';

export default Ember.Route.extend(EmberValidations.Mixin,AuthenticatedRouteMixin, {
  renderTemplate: function() {
    this.render('node/edit', { into: 'dashboard' });
  },

  actions: {
    submit: function(defer) {
      let model = this.currentModel;

      let cluster = this.modelFor('cluster');
      model.set('cluster', cluster);

      model.save()
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
