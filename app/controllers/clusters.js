import Ember from 'ember';

export default Ember.Controller.extend({
  clustersCount: function() {
    return this.get('model.length');
  }.property('model.length'),

  actions: {
    delete: function(cluster) {
      this.store.find('cluster', cluster.get('id')).then(function (record) {
        record.destroyRecord();
      });
    }
  }
});
