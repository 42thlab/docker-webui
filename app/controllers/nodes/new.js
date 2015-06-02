import Ember from 'ember';
import EmberValidations from 'ember-validations';


export default Ember.ObjectController.extend(
  EmberValidations.Mixin,
  {
  clusterId: '',
  clusters: function() {
    return this.store.findAll('cluster');
  }.property(),
  name: '',
  region: '',
  size: '',

  canNotSubmit: function() {
    return !this.get('isValid');
  }.property('isValid'),

  validations: {
    name: {
      presence: true,
      length: { minimum: 5 }
    },
    clusterId: {
      presence: true
    }
  },

  actions: {
    submit: function() {
      let cluster = this.store.find('cluster', this.get('clusterId'));

      let node = this.store.createRecord('node', {
        name: this.get('name'),
        region: this.get('region'),
        size: this.get('size'),
        cluster: cluster
      });

      let controller = this;

      node.save().then(node => {
        cluster.get('nodes').addObject(node);
        controller.set('name', '');
        controller.set('region', '');
        controller.set('size', '');
        controller.set('clusterId', '');
        controller.transitionTo('nodes');
      });
    }
  }
});
