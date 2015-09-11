import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import EmberValidations from 'ember-validations';

export default Ember.Route.extend(EmberValidations.Mixin,AuthenticatedRouteMixin, {
  renderTemplate: function() {
    this.render('node', { into: 'dashboard' });
  },

  setupController: function(controller, model){
    this._super(controller, model);

    Ember.run.scheduleOnce('afterRender', function(){
      Ember.$('#allClusters').removeClass('selected');
      Ember.$('.clusterItem').removeClass('selected');
      Ember.$('.nodeItem').not('#'+model.id+'.nodeItem').removeClass('selected');
      Ember.$('#'+model.id+'.nodeItem').addClass('selected');
    });
  },

  actions: {
    delete: function() {
      let self = this;

      this.currentModel.destroyRecord().then(() => self.transitionTo('cluster'));
    }
  }
});
