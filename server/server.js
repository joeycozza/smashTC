#!/usr/bin/env node
var debug = require('debug')('generated-express-app');
var app = require('./app');

app.set('port', process.env.PORT || 1337);

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});
