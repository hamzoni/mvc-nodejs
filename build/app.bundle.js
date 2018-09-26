'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bodyParser = require('body-parser');

var app = new _express2.default();
app.use(bodyParser);

app.get('/', function (req, res) {
	res.json({
		'name': 'quy'
	});
});

app.listen(9091);
