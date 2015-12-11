var assert = require('assert');
var utils = require('../src/utils');

describe('Utils module test', function() {
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
	describe('Check JSON string valid or not', function () {
		it('should return false', function () {
			assert.equal(false, utils.IsJSONStr(first, second));
		});

		it('should return true', function () {
			assert.equal(true, utils.IsJSONStr(JSON.stringify(first), JSON.stringify(second)));
		})
	})
})