import Ember from 'ember';
import EmberValidations from 'ember-validations';


export default Ember.ObjectController.extend(
  EmberValidations.Mixin,
  {
  name: '',
  strategy: '',

  strategyOptions: [
   { name: 'spread' },
   { name: 'binpack' },
   { name: 'random' }
  ],

  canNotSubmit: function() {
    return !this.get('isValid');
  }.property('isValid'),

  validations: {
    name: {
      presence: true,
      length: { minimum: 5 }
    },
    strategy: {
      presence: true
    }
  },

  actions: {
    submit: function() {
      let cluster = this.store.createRecord('cluster', {
        name: this.get('name'),
        strategy: this.get('strategy')
      });

      let controller = this;

      cluster.save().then(() => {
        controller.set('name', '');
        controller.set('strategy', '');
        controller.transitionTo('clusters');
      });
    }
  }
});
