import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'daas-webui/tests/helpers/start-app';

var application;

module('Integration: Account management', {
  setup: function() {
    application = startApp();
  },

  teardown: function() {
    Ember.run(application, 'destroy');
  }
});

test('account management', function(assert) {
  invalidateSession();

  authenticateSession();
  visit('account/profile');
  andThen(function() {
    assert.equal(currentPath(), 'index');
  });

  invalidateSession();

  visit('');
  fillIn('input[placeholder="Enter a valid email"]', 'usertest@mail.com');
  fillIn('input[placeholder="Enter a password"]', 'password');
  click('button');
  andThen(function() {
    assert.equal(currentPath(), 'index');
    assert.equal(localStorage.getItem("userEmail"), 'usertest@mail.com');
  });

  visit('account/profile');
  andThen(function() {
    assert.equal(currentPath(), 'account.profile');
  });

  fillIn('input[placeholder="Enter a full name"]', 'user test toto');
  click('button');
  andThen(function() {
    assert.equal(find('input[placeholder="Enter a full name"]').val(), 'user test toto');
  });

  fillIn('input[placeholder="Enter a full name"]', 'user test tata');
  click('button');
  andThen(function() {
    assert.equal(find('input[placeholder="Enter a full name"]').val(), 'user test tata');
  });

  visit('account/email');
  andThen(function() {
    assert.equal(currentPath(), 'account.email');
  });

  visit('account/password');
  andThen(function() {
    assert.equal(currentPath(), 'account.password');
  });

  visit('account/token');
  andThen(function() {
    assert.equal(currentPath(), 'account.token');
  });

  invalidateSession();
});
