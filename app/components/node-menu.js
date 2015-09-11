import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement : function(){
    $("#nodeMenu").slideDown();
  },
  willDestroyElement : function(){
    $("#nodeMenu").slideUp();
  }
});
