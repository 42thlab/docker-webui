import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    delete: function(cluster) {
      let self = this;

      self.store.find('cluster', cluster.get('id')).then(function (record) {
        record.destroyRecord().then(() => self.transitionTo('dashboard.clusters'));
      });
    }
  }
});
