# map-merge
[![Build Status](http://img.shields.io/travis/fand/map-merge.svg?style=flat-square)](https://travis-ci.org/fand/map-merge)
[![NPM Version](https://img.shields.io/npm/v/@fand/map-merge.svg?style=flat-square)](https://www.npmjs.org/package/fand.map-merge)
[![License](http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](http://fand.mit-license.org/)

## Installation

```
npm install -S @fand/map-merge
```

## Example

```js
import mapMerge from "map-merge";

const src = [{
    name  : 'foo',
    value : 123,    
}, {
    name  : 'bar',
    value : 456,
}]

const dst = mapMerge(src, (e) => ({ [e.name] : e.value }));
assert.deepEqual(dst, { foo : 123, bar : 456 });
```

## LICENSE
MIT
