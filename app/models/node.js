import DS from "ember-data";
import EmberValidations from 'ember-validations';

let Node = DS.Model.extend(EmberValidations.Mixin,
{
  // cluster: DS.belongsTo('cluster'),
  name: DS.attr(),
  cluster: DS.belongsTo('cluster'),
  // cluster_id: DS.attr(),
  // isMaster: DS.attr(),
  // labels: DS.attr(),
  // state: DS.attr(),
  // stateMessage: DS.attr(),
  // fqdn: DS.attr(),
  // publicIp: DS.attr(),
  region: DS.attr(),
  node_size: DS.attr(),
  // cpu: DS.attr(),
  // disk: DS.attr(),
  // memory: DS.attr(),
  // dockerVersion: DS.attr(),
  // deployedAt: DS.attr(),
  // updatedAt: DS.attr(),
  // containersCount: DS.attr(),
  // containers: DS.hasMany('container' , {async: true}),
});

Node.reopen({
  validations: {
    name: {
      presence: true
    }
  }
});

export default Node;
