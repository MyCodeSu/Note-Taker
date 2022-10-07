const path = require('path');
const fs = require('fs');

// routing
module.exports = (app) => {

// GET
app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
});

}