import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    return this.store.find('account/profile', '');
  },

  actions: {
    submit: function(){
      this.get('currentModel').save();
    },
  }
});
