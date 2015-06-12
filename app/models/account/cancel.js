import DS from "ember-data";
import EmberValidations from 'ember-validations';
import Ember from "ember";

var inflector = Ember.Inflector.inflector;
inflector.irregular('cancel', '/');

let Cancel = DS.Model.extend(EmberValidations.Mixin,
{
  password: DS.attr()
});

Cancel.reopen({
  validations: {
    password: {
      presence: true
    }
  }
});

export default Cancel;
