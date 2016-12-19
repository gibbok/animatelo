var path = require('path');
var tap = require('gulp-tap');
var stylish = typeof require('jshint-stylish') === 'string' ? require(require('jshint-stylish')) : require('jshint-stylish');

function byErrorLine (a, b) {
	return a.error.line - b.error.line;
}

function tapJscs (action) {
	return function () {
		return tap(function (file) {
			if (!file.jscs || file.jscs.success) {
				return;
			}
			action(file);
		});
	};
}

function toJshint (file) {
	// fetch error list
	var errorList = file.jscs.errors._errorList || file.jscs.errors;
	var filePath = path.relative(process.cwd(), file.path);

	// map errors to jshint format
	return errorList.map(function (error) {
		return {
			file: filePath,
			error: {
				character: error.column,
				code: 'W ' + error.rule,
				line: error.line,
				reason: error.message
			}
		}
	});
}

module.exports = tapJscs(function (file) {
	stylish.reporter(toJshint(file));
});

module.exports.combineWithHintResults = tapJscs(function (file) {
	file.jshint = file.jshint || {};
	file.jshint.success = false;
	file.jshint.results = (file.jshint.results || []).concat(toJshint(file));
	file.jshint.results.sort(byErrorLine);
});
