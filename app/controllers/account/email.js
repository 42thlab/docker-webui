import Ember from 'ember';
import errorHandler from '../../utils/errorHandler';
import EmberValidations from 'ember-validations';

var _asyncSubmitDeffer = Ember.RSVP.defer();

export default Ember.Controller.extend(EmberValidations.Mixin,{
  actions: {
    submit: function(setPromise) {
      var model = this.get('model');
      var self = this;

      console.log("toto");
      this.get('model').save();

      // return setPromise(
      //   this.get('model').save()
      //   .then(() => {
      //     localStorage.setItem("userEmail", self.get('model.newEmail'));
      //     //TODO: refresh the user email in the navbar template
      //   })
      //   .catch(error => {
      //     errorHandler(self);
      //     return rej();
      //   })
      // );
    },
  }
});
