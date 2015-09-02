import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import EmberValidations from 'ember-validations';

export default Ember.Route.extend(EmberValidations.Mixin,AuthenticatedRouteMixin, {
  model: function() {
    let cluster = this.modelFor('cluster');

    let id = cluster.get('id');


    return this.store.query('node', {cluster_id: id});
  },

  actions: {
    delete: function(node) {
      let cluster = this.modelFor('cluster');

      let id = cluster.get('id');

      node.set('cluster_id', id);
      node.destroyRecord();
      // this.store.find('node').then(function (record) {
      //   record.destroyRecord();
      // });
    }
  }
});
