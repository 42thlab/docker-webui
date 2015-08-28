import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import EmberValidations from 'ember-validations';

export default Ember.Route.extend(EmberValidations.Mixin,AuthenticatedRouteMixin, {
  model: function() {
    let node = this.store.createRecord('node');

    let cluster = this.modelFor('cluster');
    node.set('cluster_id', cluster.get('id'));
    node.set('region', 'region1');
    node.set('node_size', 'size455');

    return node;
  },

  renderTemplate: function() {
    this.render('nodes/new', { into: 'dashboard' });
  },

  actions: {
    submit: function(defer) {
      let self = this;

      this.currentModel.save()
      .then(() => {
        defer.resolve();
      })
      .catch(error => {
        // errorHandler(self);
        defer.reject();
      });
    },
  }
});
