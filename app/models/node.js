import DS from "ember-data";
import EmberValidations from 'ember-validations';

let Node = DS.Model.extend(EmberValidations.Mixin,
{
  name: DS.attr(),
  cluster: DS.belongsTo('cluster'),
  master: DS.attr(),
  // labels: DS.attr(),
  state: DS.attr(),
  state_message: DS.attr(),
  last_state: DS.attr(),
  agent_cmd: DS.attr(),
  byon: DS.attr(),
  fqdn: DS.attr(),
  public_ip: DS.attr(),
  region: DS.attr(),
  node_size: DS.attr(),
  cpu: DS.attr(),
  disk: DS.attr(),
  memory: DS.attr(),
  docker_version: DS.attr(),
  swarm_version: DS.attr(),
  created_at: DS.attr(),
  updated_at: DS.attr()
});

Node.reopen({
  validations: {
    name: {
      presence: true
    }
  }
});

export default Node;
