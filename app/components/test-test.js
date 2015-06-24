import Ember from 'ember';
import FormGroupComponent from 'ember-idx-forms/form';

export default FormGroupComponent.extend({
  submit: function(e) {
    console.log("tata");
    var promise;
    var self = this;

    if (e) {
      e.preventDefault();
    }

    return this.get('model').validate()
      .then(function() {
        return self.get('targetObject').send(self.get('action'));
      })
      .catch(function() {
        self.showErrors(self);
      });
  },

  showErrors: function (view) {
    var self = this;
    jQuery.each(view._childViews, function (key, validation) {
      if (jQuery.inArray("form-group", validation.classNames) > 0) {
        validation.set('canShowErrors', true);
      }
      if (validation._childViews) {
        self.showErrors(validation);
      }
    });
  }
});
