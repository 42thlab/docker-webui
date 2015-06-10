import Ember from 'ember';

export default Ember.Controller.extend({
  userEmail: localStorage.getItem('userEmail'),

  actions: {
    logout: function(){
      this.get('session').invalidate();
      this.transitionTo('index');
    }
  }
});
