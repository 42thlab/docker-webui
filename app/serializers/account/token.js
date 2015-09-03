import ApplicationSerializer from '../application';

export default ApplicationSerializer.extend({
  extractFind: function(store, typeClass, payload, id) {
    payload = {
      'account/token': {
        id: 1,
        token: payload.token
      }
    };

    return this._super(store, typeClass, payload, id);
  }
});
