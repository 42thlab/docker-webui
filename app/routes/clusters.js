import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  setupController: function(controller, model){
    this._super(controller, model);

    Ember.run.scheduleOnce('afterRender', function(){
      Ember.$('.nodeMenu').slideUp();
      Ember.$('.clusterItem').removeClass('selected');
      Ember.$('.nodeItem').removeClass('selected');
      Ember.$('#allClusters').addClass('selected');
    });
  }
});
