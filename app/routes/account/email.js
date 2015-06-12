import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    return this.store.createRecord('account/email');
  },

  actions: {
    submit: function(){
      this.get('currentModel').save();
      //add new email in session
    },
  }
});
