import DS from "ember-data";
import EmberValidations from 'ember-validations';

let Cluster = DS.Model.extend(EmberValidations.Mixin,
{
  name: DS.attr(),
  strategy: DS.attr(),
  state_message: DS.attr(),
  created_at: DS.attr('date'),
  updated_at: DS.attr('date'),
  nodes_count: DS.attr(),
  last_seen: DS.attr(),
  state: DS.attr(),
  nodes: DS.hasMany('node', { async: true }),
  isExpanded: DS.attr('boolean', {defaultValue: false}),
});

Cluster.reopen({
  validations: {
    name: {
      presence: true
    }
  }
});

export default Cluster;
