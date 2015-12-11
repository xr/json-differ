var assert = require('assert');
var diff = require('../src/diff');

describe('Find the difference between two JSON objects', function() {
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
  describe('test diff function', function () {
  	it('should throw an error when obj1 or obj2 is not a valid JSON string', function () {
      	assert.equal('Not Valid JSON String', diff(first, second));
    });

    it('should return a JSON format object which obj2 diff with obj1', function () {
    	var firstStr = JSON.stringify(first);
    	var secondStr = JSON.stringify(second);
    	assert.equal('{"foo":{"bar":"baz1"},"baz":["foo1"]}', diff(firstStr, secondStr));
    });
  });
});