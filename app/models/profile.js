import DS from "ember-data";
import EmberValidations from 'ember-validations';

var inflector = Ember.Inflector.inflector;
inflector.irregular('profile', 'profile');

let Profile = DS.Model.extend(EmberValidations.Mixin,
{
  fullName: DS.attr()
});

export default Profile;
