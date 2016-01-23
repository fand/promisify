# Promisify
[![Build Status](http://img.shields.io/travis/fand/promisify.svg?style=flat-square)](https://travis-ci.org/fand/promisify)
[![NPM Version](https://img.shields.io/npm/v/@fand/promisify.svg?style=flat-square)](https://www.npmjs.com/package/@fand/promisify)
[![License](http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](http://fand.mit-license.org/)

Promisify without any dependencies.

## Installation

```
npm install -S @fand/promisify
```

## Example

```js
var fs = require('fs');
var p = require('@fand/promisify');

p(fs.readFile)
  ('./package.json', 'utf8')
  .then((res) => console.log(res));
```

## LICENSE
MIT
