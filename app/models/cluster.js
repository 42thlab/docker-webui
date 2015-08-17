import DS from "ember-data";
import EmberValidations from 'ember-validations';
import Ember from "ember";

let Cluster = DS.Model.extend(EmberValidations.Mixin,
{
  name: DS.attr(),
  strategy: DS.attr(),
  state_message: DS.attr(),
  token: DS.attr(),
  created_at: DS.attr(),
  updated_at: DS.attr(),
  nodes_count: DS.attr(),
  containers_count: DS.attr(),
  last_ping: DS.attr(),
  state: DS.attr()
});

Cluster.reopen({
  validations: {
    name: {
      presence: true
    }
  }
});

export default Cluster;
