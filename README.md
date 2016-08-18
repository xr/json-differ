# JSON DIFFER

  Check diff between two JSON objects.

## Installation
```bash
  $ npm install json-differ
```
### Usage
```js
var diff = require('json-differ');

var first = {
        "foo": {
            "bar": "baz",
            "biz": "foo"
        },
        "fiz": {
            "foo": "baz"
        },
        "bar": "baz",
        "baz": [
            "foo",
            "bar"
        ]
    };

var second = {
        "foo": {
            "bar": "baz1",
            "biz": "foo"
        },
        "fiz": {
            "foo": "baz"
        },
        "bar": "baz",
        "baz": [
            "foo1"
        ]
    };

diff(JSON.stringify(first), JSON.stringify(second));
// => {"foo":{"bar":"baz1"},"baz":["foo1"]}
```
### Test
npm test 
