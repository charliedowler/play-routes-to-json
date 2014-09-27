var routesToJSON = require('./');
var fs = require('fs');

function testFailed(err) {
  throw new Error(err);
}

// TODO: Setup proper tests
fs.readFile('testRoutes', function(err, data) {
  var result = JSON.parse(routesToJSON(data.toString())).routes;
  var zero = result[0];
  var one = result[1];
  var two = result[2];
  var three = result[3];
  if (zero.type != 'GET' || zero.path != '/' || zero.controller != 'controllers.Application.index()') testFailed('Zero failed');
  if (one.type != 'GET' || one.path != '/assets/*file' || one.controller != 'controllers.Assets.at(path="/public",file)') testFailed('One failed');
  if (two.type != 'GET' || two.path != '/path/to/something' || two.controller != '@controllers.package.class.method()') testFailed('Two failed');
  if (three.type != 'POST' || three.path != '/path/to/something' || three.controller != '@controllers.package.class.method(issue_id:Integer,issue_key,project_id:Integer,project_key)') testFailed('Three failed');
  console.log('All tests passed');
  process.exit(0);
});
