import Ember from 'ember';
import FormGroupComponent from 'ember-idx-forms/form';

export default FormGroupComponent.extend({
  label: 'Save',

  submit: function(e) {
    var self = this;

    if (e) {
      e.preventDefault();
    }

    var defer = Ember.RSVP.defer();

    defer.promise.then(function(){
      self.set('label', 'Save');
    }).catch(function(){
      self.set('label', 'Save');
    });

    return this.get('model').validate()
      .then(function() {
        self.set('label', 'Saving');
        return self.get('targetObject').send(self.get('action'), defer);
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
  },
});
