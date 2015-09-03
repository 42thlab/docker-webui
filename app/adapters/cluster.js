import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  updateRecord: function(store, type, record) {
    var json = {};
    var serializer = store.serializerFor(type.typeKey);
    serializer.serializeIntoHash(json, type, record);
    var id = record.get('id');

    return this.ajax(this.buildURL(type.typeKey, id), "PATCH", { data: json });
  },
});
