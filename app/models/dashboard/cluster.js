import DS from "ember-data";
import EmberValidations from 'ember-validations';
import Ember from "ember";

let Cluster = DS.Model.extend(EmberValidations.Mixin,
{
  name: DS.attr(),
  strategy: ['toto', 'tata'],
});

export default Cluster;
