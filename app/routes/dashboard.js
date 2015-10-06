import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    return this.store.findAll('cluster');
  },

  actions: {
    transitionToClusters: function() {
      Ember.$('.nodeMenu').slideUp();
      Ember.$('.clusterItem').removeClass('selected');
      Ember.$('.nodeItem').removeClass('selected');
      Ember.$('#allClusters').addClass('selected');

      this.transitionTo('clusters');
    },

    transitionToCluster: function(cluster) {
      Ember.$('.nodeMenu').not('#'+cluster.id+' .nodeMenu').slideUp();
      Ember.$('#'+cluster.id+' .nodeMenu').slideDown();
      Ember.$('#allClusters').removeClass('selected');
      Ember.$('.nodeItem').removeClass('selected');
      Ember.$('.clusterItem').not('#'+cluster.id+' .clusterItem').removeClass('selected');
      Ember.$('#'+cluster.id+' .clusterItem').addClass('selected');

      this.transitionTo('cluster', cluster);

      // this.currentModel.forEach(function(c) {
      //   if (c.id != cluster.id) {
      //     c.set('isExpanded', false);
      //   } else {
      //     c.set('isExpanded', true);
      //   };
      // });
    },

    transitionToNode: function(node) {
      Ember.$('#allClusters').removeClass('selected');
      Ember.$('.clusterItem').removeClass('selected');
      Ember.$('.nodeItem').not('#'+node.id+'.nodeItem').removeClass('selected');
      Ember.$('#'+node.id+'.nodeItem').addClass('selected');

      this.transitionTo('containers', node);
    }
  }
});
