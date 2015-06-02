import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('container');
  }
  // queryParams: {
  //   all: { refreshModel: true }
  // },
  // model: function(params) {
  //   return Ember.$.getJSON(`${config.apiURL}/containers/json?all=${params.all}`);
  // }
});
