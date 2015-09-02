import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import EmberValidations from 'ember-validations';

export default Ember.Route.extend(EmberValidations.Mixin,AuthenticatedRouteMixin, {
  model: function() {
    let cluster = this.modelFor('cluster');

    let id = cluster.get('id');

    return this.store.queryRecord('node', {cluster_id: id});
  },

  renderTemplate: function() {
    this.render('node', { into: 'dashboard' });
  },

  actions: {
    delete: function() {
      let self = this;

      let cluster = this.modelFor('cluster');

      let id = cluster.get('id');

      this.currentModel.set('cluster_id', id);
      this.currentModel.destroyRecord().then(() => self.transitionTo('nodes', id));
    }
  }
});
