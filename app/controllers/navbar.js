import Ember from 'ember';
import invalidateSession from '../utils/invalidateSession';

export default Ember.Controller.extend({
  userEmail: function() {
    return localStorage.getItem('userEmail');
  }.property().volatile(),

  actions: {
    logout: function(){
      invalidateSession(this);
    }
  }
});
