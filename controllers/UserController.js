
var Controller = require('./Controller')
var User = require('../entities/User')

module.exports = class UserController extends Controller {
	constructor () {
		super()
	}

	list (req, res) {
		res.json([
			new User('A', 11),
			new User('B', 12),
			new User('C', 13),
		])
	}

	insert (req, res) {
		var name = req.body.name
		res.json('hello ' + name)
	}
}