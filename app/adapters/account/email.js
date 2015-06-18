import DS from 'ember-data';
import Ember from 'ember';
import ENV from '../../config/environment';

export default DS.RESTAdapter.extend({
  host: ENV.apiURL,
  namespace: ENV.apiNamespace,

  headers: function() {
    let session = localStorage.getItem('ember_simple_auth:session');
    let json = JSON.parse(session);

    return {
      'Authorization': `JWT ${json.secure.token}`
    };
  }.property().volatile(),

  createRecord: function(store, type, record) {
    var json = {};
    var serializer = store.serializerFor(type.typeKey);
    serializer.serializeIntoHash(json, type, record);
    var id = record.get('id');
    return this.ajax(this.buildURL(type.typeKey, ''), "PATCH", { data: json });
  },
});
