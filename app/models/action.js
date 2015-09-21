import DS from "ember-data";

let Action = DS.Model.extend({
  type: DS.attr(),
  started_at: DS.attr('date'),
  node: DS.belongsTo('node'),
});

export default Action;
