var app = require('./server-config.js');

var port = process.env.PORT || 3000;

app.listen(port);

console.log('Server now listening on the one and only port ' + port);
