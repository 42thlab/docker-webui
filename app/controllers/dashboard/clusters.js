import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    delete: function(cluster) {
      this.store.find('cluster', cluster.get('id')).then(function (record) {
        record.destroyRecord();
      });
    }
  }
});
