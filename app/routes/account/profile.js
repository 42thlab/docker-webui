import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import errorHandler from '../../utils/errorHandler';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    return this.store.find('account/profile', '').catch(errorHandler(this));
  },

  actions: {
    submit: function(){
      this.get('currentModel').save().catch(errorHandler(this));
    },
  }
});
