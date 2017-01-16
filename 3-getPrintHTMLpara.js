var https = require('https');

function getAndPrintHTML (options) {

  https.get(options, function(response) {
    response.setEncoding('utf8');
    var body = '';
    response.on('data', function(data) {
      body += data;
      console.log(body);
    });
    response.on('end', function() {
    });
  });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);