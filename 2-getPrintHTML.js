var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function(response) {
    response.setEncoding('utf8');
    var buffData = '';
    response.on('data', function (data) {
      buffData += data;
      console.log(buffData);
    });
    response.on('end', function() {
    });
  });
}

getAndPrintHTML();