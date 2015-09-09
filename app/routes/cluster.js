import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function(params) {
    let cluster;

    return this.store.find('cluster', params.cluster_id).then(record => {
      cluster = record;
      return cluster.get('nodes');
    }).then(() => {
      return cluster;
    });
  }
});
