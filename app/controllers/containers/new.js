import Ember from 'ember';
import EmberValidations from 'ember-validations';


export default Ember.ObjectController.extend(
  EmberValidations.Mixin,
  {
  nodeId: '',
  nodes: function() {
    return this.store.findAll('node');
  }.property(),
  command: '',
  image: '',

  canNotSubmit: function() {
    return !this.get('isValid');
  }.property('isValid'),

  validations: {
    command: {
      presence: true,
      length: { minimum: 5 }
    },
    image: {
      presence: true,
      length: { minimum: 5 }
    },
    nodeId: {
      presence: true
    }
  },

  actions: {
    submit: function() {
      let node = this.store.find('node', this.get('nodeId'));

      let container = this.store.createRecord('container', {
        command: this.get('command'),
        image: this.get('image'),
        node: node
      });

      let controller = this;

      container.save().then(container => {
        node.get('containers').addObject(container);
        controller.set('command', '');
        controller.set('image', '');
        controller.set('nodeId', '');
        controller.transitionTo('containers');
      });
    }
  }
});
