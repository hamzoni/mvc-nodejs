const fs = require('fs');


module.exports = class Scanner {

	getFiles() {
		return fs.readdirSync('controllers')
	}

	constructor () {
		var fns = this.getFiles()

		var r = require('../controllers/Controller')

		this.controllers = {}

		for (var i = 0; i < fns.length; i++) {
			var x = require('../controllers/' + fns[i])

			if (x.prototype instanceof r) {
				this.controllers[fns[i].split('.').slice(0, -1).join('.')] = new x()
			}
		}
	}

}