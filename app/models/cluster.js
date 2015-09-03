import DS from "ember-data";
import EmberValidations from 'ember-validations';

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
  state: DS.attr(),
  nodes: DS.hasMany('node'),
});

Cluster.reopen({
  validations: {
    name: {
      presence: true
    }
  }
});

export default Cluster;
