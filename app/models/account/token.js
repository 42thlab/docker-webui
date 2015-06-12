import DS from "ember-data";
import EmberValidations from 'ember-validations';
import Ember from "ember";

var inflector = Ember.Inflector.inflector;
inflector.irregular('token', 'new_token');

let Token = DS.Model.extend(EmberValidations.Mixin,
{
  token: DS.attr()
});

export default Token;
