import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  setupController: function(controller, model){
    this._super(controller, model);

    Ember.run.scheduleOnce('afterRender', function(){
      Ember.$('#'+model.id+' .nodeMenu').show();
      Ember.$('#allClusters').removeClass('selected');
      Ember.$('.nodeItem').removeClass('selected');
      Ember.$('.clusterItem').not('#'+model.id+' .clusterItem').removeClass('selected');
      Ember.$('#'+model.id+' .clusterItem').addClass('selected');
    });
  },

  model: function(params) {
    let cluster;

    return this.store.find('cluster', params.cluster_id).then(record => {
      cluster = record;
      return cluster.get('nodes');
    }).then(() => {
      return cluster;
    });
  }
});
