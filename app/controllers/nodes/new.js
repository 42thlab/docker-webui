import Ember from 'ember';
import errorHandler from '../../utils/errorHandler';

export default Ember.Controller.extend({
  // actions: {
  //   submit: function(defer) {
  //     let self = this;
  //
  //     let cluster = this.modelFor('cluster');
  //
  //     console.log(cluster.get('name'));
  //     // let node = this.store.createFragment('node');
  //     // let nodes = cluster.get('nodes');
  //     //
  //     // nodes.pushObject(node);
  //
  //
  //     this.get('model').save()
  //     .then(() => {
  //       defer.resolve();
  //     })
  //     .catch(error => {
  //       errorHandler(self);
  //       defer.reject();
  //     });
  //   },
  // }
});
