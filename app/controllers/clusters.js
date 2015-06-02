import Ember from 'ember';

export default Ember.Controller.extend({
  clustersCount: function() {
    return this.get('model.length');
  }.property('model.length'),

  actions: {
    deleteCluster: function(c) {
      this.store.find('cluster', c.get('id')).then(function (cluster) {
        cluster.destroyRecord();
      });
    }
  }
});
