import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  namespace: '',

  findAll: function(store, type, sinceToken) {
    var query, url;

    if (sinceToken) {
      query = { since: sinceToken };
    }

    url = this.get('host')+"/containers/json";

    return this.ajax(url, 'GET', { data: query });
  },

  handleResponse: function(status, headers, payload) {
    if (this.isSuccess(status, headers, payload)) {
      return payload;
    } else if (this.isInvalid(status, headers, payload)) {
      return new InvalidError(payload.errors);
    }

    let errors = this.normalizeErrorResponse(status, headers, payload);

    return new AdapterError(errors);
  },

});
