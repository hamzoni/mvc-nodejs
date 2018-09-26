const Route = require('./services/Route')

Route.get('/books', 'BookController@hello')
Route.get('/users/list', 'UserController@list')
Route.post('/users/insert', 'UserController@insert')
Route.put('/users/update', 'UserController@update')

Route.start(9090)