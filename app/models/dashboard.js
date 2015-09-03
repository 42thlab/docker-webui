import DS from "ember-data";
import Ember from "ember";

var inflector = Ember.Inflector.inflector;
inflector.irregular('account', 'account');

let Account = DS.Model.extend({
});

export default Account;
