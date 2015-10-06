import DS from 'ember-data';

let Container = DS.Model.extend({
  // node: DS.belongsTo('node'),
  Names: DS.attr(),
  // Image: DS.attr(),
  Command: DS.attr(),
  Created: DS.attr(),
  Status: DS.attr(),
  Ports: DS.attr(),
  Labels: DS.attr(),
  SizeRw: DS.attr(),
  SizeRootFs: DS.attr(),
});

export default Container;
