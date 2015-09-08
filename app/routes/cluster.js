import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function(params) {
    return this.store.find('cluster', params.cluster_id).then(cluster => cluster.get('nodes'));
  },

  actions: {
    deleteNode: function(node) {
      node.destroyRecord();
    }
  }
});
