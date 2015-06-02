import Ember from 'ember';
import EmberValidations from 'ember-validations';


export default Ember.ObjectController.extend(
  EmberValidations.Mixin,
  {
  name: '',
  strategy: '',

  showErrors: false,

  validations: {
    name: {
      presence: true,
      length: { minimum: 5 }
    }
  },

  actions: {
    createCluster: function() {
      if (!this.get('isValid')) {
        this.set('showErrors', true);
        return false;
      }

      let cluster = this.store.createRecord('cluster', {
        name: this.get('name'),
        strategy: this.get('strategy')
      });

      let controller = this;

      cluster.save().then(cluster => {
        controller.set('name', '');
        controller.set('strategy', '');
        controller.transitionTo('clusters');
      });
    }
  }
});
