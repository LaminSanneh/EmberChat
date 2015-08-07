/**
 * FileControllerController
 *
 * @description :: Server-side logic for managing Filecontrollers
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
 var fs = require('fs');

module.exports = {
	upload: function (req, res) {

    // e.g.
    // 0 => infinite
    // 240000 => 4 minutes (240,000 miliseconds)
    // etc.
    //
    // Node defaults to 2 minutes.
    res.setTimeout(0);
		var uploadDirectory = './assets/images/uploads';

    req.file('file')
    .upload({
			dirname: uploadDirectory,
      // You can apply a file upload limit (in bytes)
      maxBytes: 10000000

    }, function whenDone(err, uploadedFiles) {
      if (err) return res.serverError(err);
      else {
				var filename = uploadedFiles[0].fd.substring(uploadedFiles[0].fd.lastIndexOf('/')+1);
				var uploadLocation = uploadDirectory + '/' + filename;
				var tempLocation = uploadedFiles[0].fd;
				fs.createReadStream(tempLocation).pipe(fs.createWriteStream(uploadLocation));
				return res.json({
	        files: uploadedFiles,
	        textParams: req.params.all()
	      });
			}
    });
  }
};
