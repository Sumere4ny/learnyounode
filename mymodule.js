module.exports = function (dirPath, fileEnd) {
  var fs = require('fs');
  fs.readdir(dirPath, function (err, list) {
    for (var i = 0; i < list.length; i++) {
      if (list[i].split('.')[1] == fileEnd) {
        console.log(list[i]);
      }
    }
  });
}
