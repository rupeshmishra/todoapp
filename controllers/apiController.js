var Todos = require('../models/todomodel');
var bodyParser = require('body-parser');

module.exports = function(app){
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended:true }));

    app.get('/api/todos/:uname', function(req, res){
        Todos.find({ username: req.params.uname }, function(err, results){
            if(err) throw error;

            res.send(results);
        });
    });

    app.get('/api/todos/:id', function(req, res){
        Todos.findById({ _id: req.params.id }, function(err, results){
            if(err) throw error;

            res.send(results);
        });
    });

    app.post('/api/todo', function(req, res){
        if(req.body.id){
            Todos.findByIdAndUpdate(req.body.id, {
                todo: req.body.todo, 
                isDone: req.body.isDone, 
                hasAttachment: req.body.hasAttachment 
            }, function(err, results){
                if(err) throw err;

                res.send('success');
            });
        }else{
            var newTodo = Todos({
                username: 'test',
                todo: req.body.todo, 
                isDone: req.body.isDone, 
                hasAttachment: req.body.hasAttachment 
            });
            newTodo.save(function(err){
                res.send('success');
            });
        }
    });

    app.delete('/api/todo', function(req, res){
        if(req.body.id){
            Todos.findByIdAndRemove(req.body.id, function(err){
                if(err) throw err;

                res.send('success');
            });
        }else{
            res.send('ID is missing for this delete operation');
        }
    });

}