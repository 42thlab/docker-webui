import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    delete: function() {
      let self = this;

      this.get('model').destroyRecord().then(() => self.transitionTo('clusters'));
    },

    deleteNode: function(node) {
      node.destroyRecord();
    },
  }
});
