
const Controller = require('./Controller')

module.exports = class BookController extends Controller {

    constructor () {
        super()
    }

    hello (req, res) {
        res.json('hello')
    }

}