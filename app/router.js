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
    this.resource('clusters', function() {
      this.route('new');
    });
    this.resource('cluster', { path: '/cluster/:cluster_id' }, function() {
      this.route('edit');
      this.resource('nodes', function() {
        this.route('new');
      });
      this.resource('node', { path: '/node/:node_id' }, function() {
        this.route('edit');
        this.resource('containers', function() {
          this.route('new');
        });
        this.resource('container', { path: '/container/:container_id' }, function() {
          this.route('edit');
        });
      });
    });
  });
});

export default Router;
