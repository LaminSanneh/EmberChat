import Ember from 'ember';
import config from '../config/environment';

export default Ember.Controller.extend({
  needs: ['application'],
  currentUser: Ember.computed.alias('controllers.application.currentUser'),
  serverUrl: config.APP.websocketBaseUrl,
  actions: {
    uploadImage: function (file) {
      var currentUser = this.get('currentUser'),
        controller = this;

      file.read().then(function (url) {
        currentUser.set('avatar', url)
      });

      file.upload(config.APP.websocketBaseUrl+'/api/images/upload').then(function (response) {
        var filenameOnServer = response.body.files[0].fd.split("/");
        filenameOnServer = filenameOnServer[filenameOnServer.length-1];
        var httpUrl = controller.get('serverUrl') + '/images/uploads/' + filenameOnServer;
        currentUser.set('avatar', httpUrl);
        return currentUser.save();
      }, function () {
        currentUser.rollback();
      });
    }
  }
});
