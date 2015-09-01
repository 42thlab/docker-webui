import DS from 'ember-data';
import Ember from 'ember';
import ENV from '../config/environment';

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

    var cluster_id = record.get('cluster_id');
    let url = this.get('host')+"/"+this.get('namespace')+"/clusters/"+cluster_id+"/"+type.typeKey+"s";

    return this.ajax(url, "POST", { data: json });
  },

  urlForQuery: function(query, modelName) {
    let partialUrl = "clusters/"+query['cluster_id']+"/"+modelName;

    console.log(partialUrl);

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
