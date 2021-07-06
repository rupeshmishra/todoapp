var Todos = require('../models/todomodel');

module.exports = function(app){
    app.get('/api/setupTodos', function(req, res){

        //seed database
        var starterTodos = [
            {
                username: 'test',
                todo: 'Buy milk',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Play with Tanishka',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Do Homework',
                isDone: false,
                hasAttachment: false
            }
        ];

        Todos.create(starterTodos, function(err, results){
            res.send(results);
        })
    })
}