import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  createRecord: function(store, type, record) {
    var json = {};
    var serializer = store.serializerFor(type.modelName);
    serializer.serializeIntoHash(json, type, record);

    let cluster_id = record.get('cluster').id;

    let url = this.get('host')+"/"+this.get('namespace')+"/clusters/"+cluster_id+"/"+type.modelName+"s";

    return this.ajax(url, "POST", { data: json });
  },

  deleteRecord: function(store, type, snapshot) {
    let node_id = snapshot.id;
    let cluster_id = snapshot.get('cluster').id;

    let url = this.get('host')+"/"+this.get('namespace')+"/clusters/"+cluster_id+"/"+type.modelName+"s/"+node_id;

    return this.ajax(url, "DELETE");
  },

  updateRecord: function(store, type, record) {
    var json = {};
    var serializer = store.serializerFor(type.modelName);
    serializer.serializeIntoHash(json, type, record);

    let node_id = record.get('id');
    let cluster_id = record.get('cluster').id;

    let url = this.get('host')+"/"+this.get('namespace')+"/clusters/"+cluster_id+"/"+type.typeKey+"s/"+node_id;
    return this.ajax(url, "PATCH", { data: json });
  },
});
