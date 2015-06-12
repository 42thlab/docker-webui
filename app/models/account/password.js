import DS from "ember-data";
import EmberValidations from 'ember-validations';
import Ember from "ember";

var inflector = Ember.Inflector.inflector;
inflector.irregular('password', 'change_password');

let Password = DS.Model.extend(EmberValidations.Mixin,
{
  newPassword: DS.attr(),
  newPasswordConfirmation: DS.attr(),
  oldPassword: DS.attr()
});

Password.reopen({
  validations: {
    newPassword: {
      confirmation: true,
      presence: true,
      length: { minimum: 5 }
    },
    newPasswordConfirmation: {
      presence: true
    },
    oldPassword: {
      presence: true
    }
  }
});

export default Password;
