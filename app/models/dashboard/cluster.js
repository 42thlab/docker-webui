import DS from "ember-data";
import EmberValidations from 'ember-validations';
import Ember from "ember";

let Cluster = DS.Model.extend(EmberValidations.Mixin,
{
  name: DS.attr(),
  strategy: DS.attr(),
});

Cluster.reopen({
  validations: {
    name: {
      presence: true
    },
    strategy: {
      presence: true
    }
  }
});

export default Cluster;
