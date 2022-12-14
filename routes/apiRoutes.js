const path = require('path');
const fs = require('fs');

var uniqid = require('uniqid');

// routing
module.exports = (app) => {

    // GET
    app.get('/api/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../db/db.json'));
    });

    //POST - add to db.json and return to app. 
    app.post('/api/notes', (req, res) => {
        let db = fs.readFileSync('db/db.json');
        db = JSON.parse(db);
        res.json(db);
        // create user note object
        let taskNote = {
            title: req.body.title,
            text: req.body.text,
            id: uniqid()
        };
        // pushing taskNote to db.json
        db.push(taskNote);
        fs.writeFileSync('db/db.json', JSON.stringify(db));
        res.json(db);
    });

    // DELETE route
    app.delete('/api/notes/:id', (req, res) => {
        let db = JSON.parse(fs.readFileSync('db/db.json'))
        let deleteTask = db.filter(item => item.id !== req.params.id);
        fs.writeFileSync('db/db.json', JSON.stringify(deleteTask));
        res.json(deleteTask);
    })
};