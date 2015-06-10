import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.ObjectController.extend(
  EmberValidations.Mixin,
  {
  newPassword: '',
  newPasswordConfirmation: '',
  currentPassword: '',

  validations: {
    newPassword: {
      confirmation: true,
      presence: true,
      length: { minimum: 6 }
    },
    newPasswordConfirmation: {
      presence: true
    },
    currentPassword: {
      presence: true
    }
  },

  actions: {
    submit: function() {
      console.log("submit");
    }
  }
});
