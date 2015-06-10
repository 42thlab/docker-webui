import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.ObjectController.extend(
  EmberValidations.Mixin,
  {
  newEmail: '',
  currentPassword: '',

  validations: {
    newEmail: {
      presence: true,
      length: { minimum: 6 }
    },
    currentPassword: {
      presence: true
    }
  },

  actions: {
    submit: function() {
      console.log("submit");
      // var self = this;
      // var data = {
      //   newEmail: this.getProperties('newEmail'),
      //   currentPassword: this.getProperties('currentPassword')
      // };
      //
      // $.ajax({
      //   type: "POST",
      //   url: 'http://127.0.0.1:4000/api/v1/password_reset',
      //   beforeSend: function(request) {
      //     request.setRequestHeader("Authorization", authorizationToken);
      //   },
      //   data: data,
      //   success: function(results) {
      //     console.log("success:" + results);
      //   },
      //   error: function(results) {
      //     console.log("failure:" + results);
      //   },
      //   dataType: 'json'
      // });
    }
  }
});
