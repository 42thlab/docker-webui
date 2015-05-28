import Ember from 'ember';

export default Ember.Controller.extend({
  nodesCount: function() {
    return this.get('model.length');
  }.property('model.length')
});
