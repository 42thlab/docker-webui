import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('account', function() {
    this.route('profile');
    this.route('email');
    this.route('password');
    this.route('token');
    this.route('cancel');
  });
  this.route('dashboard', function() {
    this.route('clusters');
    this.route('clusters/new');
    this.route('nodes');
    this.route('nodes/new');
    this.route('containers');
    this.route('containers/new');
  });
  this.resource('clusters');
  this.resource('cluster', { path: '/cluster/:cluster_id' });
  this.resource('clusters/new');
  this.resource('nodes');
  this.resource('node', { path: '/node/:node_id' });
  this.resource('nodes/new');
  this.resource('containers');
  this.resource('container', { path: '/container/:container_id' });
  this.resource('containers/new');
});

export default Router;
