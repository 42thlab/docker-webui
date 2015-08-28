import Ember from 'ember';
import errorHandler from '../../utils/errorHandler';

export default Ember.Controller.extend({
  strategyOptions: [
    { name: 'spread' },
    { name: 'binpack' },
    { name: 'random' }
  ],

  actions: {
    submit: function(defer) {
      let self = this;

      this.get('model').save()
      .then(() => {
        defer.resolve();
      })
      .catch(error => {
        errorHandler(self);
        defer.reject();
      });
    },
  }
});
