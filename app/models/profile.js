import DS from "ember-data";
import EmberValidations from 'ember-validations';
import Ember from "ember";

var inflector = Ember.Inflector.inflector;
inflector.irregular('profile', 'profile');

let Profile = DS.Model.extend(EmberValidations.Mixin,
{
  fullname: DS.attr(),
  created_at: DS.attr()
});

export default Profile;
