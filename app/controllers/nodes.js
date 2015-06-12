import Ember from 'ember';

export default Ember.Controller.extend({
  nodesCount: function() {
    return this.get('model.length');
  }.property('model.length'),

  actions: {
    delete: function(node) {
      this.store.find('node', node.get('id')).then(function (record) {
        record.destroyRecord();
      });
    }
  }
});
