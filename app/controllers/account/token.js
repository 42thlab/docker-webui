import Ember from 'ember';
import errorHandler from '../../utils/errorHandler';

export default Ember.Controller.extend({
  actions: {
    submit: function(defer) {
      let self = this;

      this.store.find('account/token', '').then(function(data) {
        let session = localStorage.getItem('ember_simple_auth:session');
        let sessionJSON = JSON.parse(session);
        sessionJSON.secure.token = data.get('token');
        let newSession = JSON.stringify(sessionJSON);
        localStorage.setItem('ember_simple_auth:session', newSession);
        self.set('model', data.get('token'));
        defer.resolve();
      })
      .catch(error => {
        errorHandler(self);
        defer.reject();
      });
    }
  }
});
