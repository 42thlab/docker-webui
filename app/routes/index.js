import Ember from "ember";

export default Ember.Route.extend({
  model: function(){
    return this.store.createRecord('user');
  },

  actions: {
    login: function(){
      let user = this.get('currentModel');

      let credentials = {
        identification: user.get('email'),
        password: user.get('password')
      };

      let authenticator = 'simple-auth-authenticator:token';

      this.get('session').authenticate(authenticator, credentials);
    },
  }
});
