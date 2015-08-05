import Ember from 'ember';
import FormGroupComponent from 'ember-idx-forms/form';

export default FormGroupComponent.extend({
  labelSave: 'Save',
  labelSaving: 'Saving',
  labelSaved: 'Saved',

  isSaving: false,
  isSaved: false,

  validationNeeded: true,

  submit: function(e) {
    var self = this;

    if (e) {
      e.preventDefault();
    };

    var defer = Ember.RSVP.defer();

    defer.promise.then(function(){
      self.set('isSaving', false);
      self.set('isSaved', true);
    }).catch(function(){
      self.set('isSaving', false);
    });

    if (self.get('validationNeeded')) {
      return this.get('model').validate()
        .then(function() {
          self.set('isSaving', true);
          return self.get('targetObject').send(self.get('action'), defer);
        })
        .catch(function() {
          self.showErrors(self);
        });
    } else {
      self.set('isSaving', true);
      return self.get('targetObject').send(self.get('action'), defer);
    }
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
