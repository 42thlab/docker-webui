import Ember from 'ember';
import errorHandler from '../../utils/errorHandler';
import invalidateSession from '../../utils/invalidateSession';

export default Ember.Controller.extend({
  actions: {
    submit: function(setPromise) {
      let self = this;

      return setPromise(
        this.get('model').save()
        .then(() => {
          invalidateSession(self);
        })
        .catch(error => {
          errorHandler(self);
          return rej();
        })
      );
    }
  }
});
