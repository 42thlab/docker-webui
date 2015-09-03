import ApplicationSerializer from '../application';

export default ApplicationSerializer.extend({
  extractFind: function(store, typeClass, payload, id) {
    payload = {
      'account/profile': payload.profile
    };

    return this._super(store, typeClass, payload, id);
  }
});
