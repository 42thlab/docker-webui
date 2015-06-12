import DS from "ember-data";
import EmberValidations from 'ember-validations';
import Ember from "ember";

var inflector = Ember.Inflector.inflector;
inflector.irregular('email', 'change_email');

let Email = DS.Model.extend(EmberValidations.Mixin,
{
  newEmail: DS.attr(),
  password: DS.attr()
});

Email.reopen({
  validations: {
    newEmail: {
      presence: true,
      length: { minimum: 5 }
    },
    password: {
      presence: true
    }
  }
});

export default Email;
