import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  createRecord: function(store, type, record) {
    var json = {};
    var serializer = store.serializerFor(type.typeKey);
    serializer.serializeIntoHash(json, type, record);

    // var cluster_id = record.get('cluster_id');
    var cluster = record.get('cluster');
    let url = this.get('host')+"/"+this.get('namespace')+"/clusters/"+cluster.id+"/"+type.typeKey+"s";

    return this.ajax(url, "POST", { data: json });
  },

  deleteRecord: function(store, type, snapshot) {
    var id = snapshot.id;

    var cluster_id = snapshot.get('cluster_id');

    let url = this.get('host')+"/"+this.get('namespace')+"/clusters/"+cluster_id+"/"+type.typeKey+"s/"+id;

    return this.ajax(url, "DELETE");
  },

  updateRecord: function(store, type, record) {
    var json = {};
    var serializer = store.serializerFor(type.typeKey);
    serializer.serializeIntoHash(json, type, record);
    var cluster = record.get('cluster');

    let url = this.get('host')+"/"+this.get('namespace')+"/clusters/"+cluster.id+"/"+type.typeKey+"s/"+record.get('id');
    return this.ajax(url, "PATCH", { data: json });
  },

  urlForQuery: function(query, modelName) {
    let partialUrl = "clusters/"+query['cluster_id']+"/"+modelName;

    return this._buildURL(partialUrl);
  },

  urlForQueryRecord: function(query, modelName) {
    let partialUrl = "clusters/"+query['cluster_id']+"/"+modelName;

    return this._buildURL(partialUrl);
  },

  _buildURL: function(modelName, id) {
    let url = this.get('host')+"/"+this.get('namespace')+"/"+modelName+"s";

    return url;
  },

  sortQueryParams: function(obj) {
    // var keys = Object.keys(obj);
    // var len = keys.length;
    // if (len < 2) {
    //   return obj;
    // }
    // var newQueryParams = {};
    // var sortedKeys = keys.sort();
    //
    // for (var i = 0; i < len; i++) {
    //   newQueryParams[sortedKeys[i]] = obj[sortedKeys[i]];
    // }
    // return newQueryParams;

    return '';
  },
});
