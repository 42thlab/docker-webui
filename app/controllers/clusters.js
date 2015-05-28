import Ember from 'ember';

export default Ember.Controller.extend({
  clustersCount: function() {
    return this.get('model.length');
  }.property('model.length')
});
