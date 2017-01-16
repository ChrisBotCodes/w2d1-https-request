var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  var buffData = '';

  https.get(requestOptions, function(response) {
    response.setEncoding('utf8');
    buffData += response;
    response.on('data', function (data) {
      console.log(data);
    });
    response.on('end', function() {
    });
  })
}

getAndPrintHTML();