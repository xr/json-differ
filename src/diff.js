var utils = require('./utils');

function compare(first, second) {
	var prop,
		propDiff,
		diff = {};

	for (prop in second) {
		if (!first || first[prop] !== second[prop]) {
			if (typeof second[prop] === 'object' && !Array.isArray(second[prop])) {
				if (propDiff = compare(first[prop], second[prop])) {
					diff[prop] = propDiff;
				}
			} else {
				diff[prop] = second[prop];
			}
		}
	}

	for (prop in diff) {
		return diff;
	}

	return false;
}

function diff(first, second) {
	if (utils.IsJSONStr(first) && utils.IsJSONStr(second)) {
		return JSON.stringify(compare(JSON.parse(first), JSON.parse(second)));
	} else {
		return 'Not Valid JSON String';
	}
}



module.exports = exports = diff;