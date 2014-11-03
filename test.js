var routesToJSON = require('./');
var test = require('tap').test;
var fs = require('fs');

fs.readFile('testRoutes', function(err, data) {
  var result = JSON.parse(routesToJSON(data.toString())).routes;
  var zero = result[0];
  var one = result[1];
  var two = result[2];
  var three = result[3];

  test('route zero parsed', function(t) {
    t.equal(zero.type, 'GET');
    t.equal(zero.path, '/');
    t.equal(zero.controller, 'controllers.Application.index()');
    t.end();
  });
  test('route one parsed', function(t) {
    t.equal(one.type, 'GET');
    t.equal(one.path, '/assets/*file');
    t.equal(one.controller, 'controllers.Assets.at(path="/public",file)');
    t.end();
  });
  test('route two parsed', function(t) {
    t.equal(two.type, 'GET');
    t.equal(two.path, '/path/to/something');
    t.equal(two.controller, '@controllers.package.class.method()');
    t.end();
  });
  test('route three parsed', function(t) {
    t.equal(three.type, 'POST');
    t.equal(three.path, '/path/to/something');
    t.equal(three.controller, '@controllers.package.class.method(issue_id:Integer,issue_key,project_id:Integer,project_key)');
    t.end();
  });
});
