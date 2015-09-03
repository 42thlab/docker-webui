import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import EmberValidations from 'ember-validations';

export default Ember.Route.extend(EmberValidations.Mixin,AuthenticatedRouteMixin, {
  model: function() {
    let node = this.store.createRecord('node');

    let cluster = this.modelFor('cluster');
    node.set('cluster', cluster);
    node.set('region', 'region1');
    node.set('node_size', 'size455');

    return node;
  },

  renderTemplate: function() {
    this.render('nodes/new', { into: 'dashboard' });
  },

  actions: {
    submit: function(defer) {
      this.currentModel.save()
      .then(() => {
        // let cluster = this.modelFor('cluster');
        // cluster.nodes.pushObject(node);
        defer.resolve();
      })
      .catch(() => {
        // errorHandler(self);
        defer.reject();
      });
    },
  }
});
