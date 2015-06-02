import DS from 'ember-data';

let Node = DS.Model.extend({
  cluster: DS.belongsTo('cluster'),
  name: DS.attr(),
  isMaster: DS.attr(),
  labels: DS.attr(),
  state: DS.attr(),
  stateMessage: DS.attr(),
  fqdn: DS.attr(),
  publicIp: DS.attr(),
  region: DS.attr(),
  nodeSize: DS.attr(),
  cpu: DS.attr(),
  disk: DS.attr(),
  memory: DS.attr(),
  dockerVersion: DS.attr(),
  deployedAt: DS.attr(),
  updatedAt: DS.attr(),
  containersCount: DS.attr(),
  containers: DS.hasMany('container' , {async: true}),
});

Node.reopenClass({
  FIXTURES: [
    {
      id: 1,
      cluster: 1,
      name: 'Master machina',
      isMaster: true,
      labels: ['my label 1', 'my label 2'],
      state: 'Online',
      stateMessage: 'Everything is awesome',
      fqdn: 'generated FQDN',
      publicIp: '127.0.0.1',
      region: 'region 1',
      nodeSize: 'size 1',
      cpu: 2,
      disk: 500,
      memory: 200,
      dockerVersion: '1.6.1',
      deployedAt: new Date("2013-02-07T16:44:57"),
      updatedAt: new Date("2014-02-07T16:44:57"),
      containersCount: 2,
      containers: [1, 2]
    }, {
      id: 2,
      cluster: 1,
      name: 'Slave Tintin',
      isMaster: false,
      labels: ['my label 3'],
      state: 'Online',
      stateMessage: 'Currently working well',
      fqdn: 'generated FQDN',
      publicIp: '127.0.0.2',
      region: 'region 2',
      nodeSize: 'size 2',
      cpu: 1,
      disk: 200,
      memory: 100,
      dockerVersion: '1.6.1',
      deployedAt: new Date("2013-02-07T16:44:57"),
      updatedAt: new Date("2014-02-07T16:44:57")
    }
  ]
});

export default Node;
