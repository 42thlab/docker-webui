import Ember from 'ember';
import errorHandler from '../../utils/errorHandler';

export default Ember.Controller.extend({
  actions: {
    submit: function(setPromise) {
      let self = this;

      return setPromise(
        this.get('model').save()
        .then(() => {
          localStorage.setItem("userEmail", self.get('model.newEmail'));
          //TODO: refresh the user email in the navbar template
        })
        .catch(error => {
          errorHandler(self);
          return rej();
        })
      );
    }
  }
});
