var https = require('https');

module.exports = function getHTML (options, callback) {
  https.get(options, function(response) {
    response.setEncoding('utf8');
    var body = '';
    response.on('data', function(data) {
      body += data;
      callback(body);
    });
    response.on('end', function() {
    });
  });
};