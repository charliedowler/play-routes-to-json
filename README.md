## play-routes-to-json [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

> Convert your play routes file to a nicer json format

See [play-routes-from-json](https://github.com/charliedowler/play-routes-from-json) to generate a routes file from your new JSON format.

## Install
```sh
$ npm install --save play-routes-to-json
```

## Usage

```js
var routesToJSON = require('play-routes-to-json');
var fs = require('fs');
fs.readFile('conf/routes', function(err, data) {
  console.log(routesToJSON(data));
  //=> { type: 'GET', path: '/path/to/action', controller: '@controllers.handleAction()' }
});
```

## License

MIT © [Charlie Dowler](http://charliedowler.com)

[npm-url]: https://npmjs.org/package/play-routes-to-json
[npm-image]: https://badge.fury.io/js/play-routes-to-json.png

[travis-url]: http://travis-ci.org/charliedowler/play-routes-to-json
[travis-image]: https://secure.travis-ci.org/charliedowler/play-routes-to-json.png?branch=master