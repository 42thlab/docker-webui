import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    all: { refreshModel: true }
  },
  model: function(params) {
    return Ember.$.getJSON(`${config.apiURL}/containers/json?all=${params.all}`);
  }
});
