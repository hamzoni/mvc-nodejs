

// run scanner
const Scanner = require('./Scanner')
var scanner = new Scanner()

// run express
var express = require('express')

const app = express()

var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

module.exports = class Route {


	static split (logic) {
		return {
			a: logic.split('@')[0], // controller name
			b: logic.split('@')[1], // method name
		}
	}

	// 
	static start (port = 80) {
		app.listen(port, function () {
			console.log('http://localhost:' + port)
		})
	}

	// METHODS
	static get (path, logic) {
		var x = Route.split(logic)
		var method = scanner.controllers[x.a][x.b]
		if (!method) return

		router.get(path, method);
		app.use(router)
	}

	static post (path, logic) {
		var x = Route.split(logic)
		var method = scanner.controllers[x.a][x.b]
		if (!method) return

		router.post(path, method);
		app.use(router)
	}

	static put (path, logic) {
		var x = Route.split(logic)
		var method = scanner.controllers[x.a][x.b]
		if (!method) return

		router.put(path, method);
		app.use(router)
	}

	static delete (path, logic) {
		var x = Route.split(logic)
		var method = scanner.controllers[x.a][x.b]
		if (!method) return

		router.delete(path, method);
		app.use(router)
	}

}