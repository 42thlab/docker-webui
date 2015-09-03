import Ember from 'ember';
import ApplicationSerializer from '../application';

export default ApplicationSerializer.extend({
  keyForAttribute: function(attr, method) {
    return Ember.String.underscore(attr);
  }
});
