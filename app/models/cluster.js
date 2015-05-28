import DS from 'ember-data';

let Cluster = DS.Model.extend({
  name: DS.attr(),
  strategy: DS.attr(),
  state: DS.attr(),
  stateMessage: DS.attr(),
  nodesCount: DS.attr(),
  nodes: DS.hasMany('node' , {async: true}),
  containersCount: DS.attr(),
  created_at: DS.attr(),
  updated_at: DS.attr()
});

Cluster.reopenClass({
  FIXTURES: [
    {
      id: 1,
      name: 'My cluster',
      strategy: 'Rush strategy',
      state: 'Online',
      stateMessage: 'Everything is fucking awesome',
      nodesCount: 2,
      nodes: [1, 2],
      containersCount: 5,
      createdAt: new Date("2013-02-07T16:44:57"),
      updatedAt: new Date("2014-02-07T16:44:57")
    },
    {
      id: 2,
      name: 'My second cluster',
      strategy: 'Tempo strategy',
      state: 'Online',
      stateMessage: 'Everything is okay',
      nodesCount: 0,
      nodes: [],
      containersCount: 0,
      createdAt: new Date("2013-02-07T16:44:57"),
      updatedAt: new Date("2014-02-07T16:44:57")
    }
  ]
});

export default Cluster;
