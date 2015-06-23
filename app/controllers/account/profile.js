import Ember from 'ember';
import errorHandler from '../../utils/errorHandler';

export default Ember.Controller.extend({
  actions: {
    submit: function(setPromise) {
      let self = this;

      return setPromise(
        this.get('model').save()
        .catch(error => {
          errorHandler(self);
          return rej();
        })
      );
    }
  }
});
