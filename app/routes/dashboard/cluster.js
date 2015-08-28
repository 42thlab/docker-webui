import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import EmberValidations from 'ember-validations';
import config from '../../config/environment';

export default Ember.Route.extend(EmberValidations.Mixin,AuthenticatedRouteMixin, {
  model: function(params) {
    // let session = localStorage.getItem('ember_simple_auth:session');
    // let json = JSON.parse(session);
    //
    // let cluster = this.store.find('cluster', params.cluster_id);
    // let nodes = Ember.$.ajax({
    //   url: `${config.apiURL}/${config.apiNamespace}/clusters/${params.cluster_id}/nodes`,
    //   headers: {
    //     'Authorization': `JWT ${json.secure.token}`
    //   }
    // });
    //
    // return {
    //   cluster: cluster,
    //   nodes : nodes,
    // };

    console.log("tata");

    return this.store.find('cluster', params.cluster_id);
  }
});
