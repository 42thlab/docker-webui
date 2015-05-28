import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('clusters');
  this.resource('cluster', { path: '/cluster/:cluster_id' });
  this.resource('nodes');
  this.resource('node', { path: '/node/:node_id' });
  this.resource('containers');
  this.resource('container', { path: '/container/:container_id' });
});

export default Router;
