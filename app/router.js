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
    this.route('cluster', { path: '/cluster/:cluster_id' });
    this.route('cluster/edit', { path: '/cluster/:cluster_id/edit' });
    this.route('clusters/new');
    this.route('nodes');
    this.route('nodes/new');
    this.route('containers');
    this.route('containers/new');
  });
});

export default Router;
