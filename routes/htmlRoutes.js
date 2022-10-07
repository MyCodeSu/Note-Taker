const path = require('path');

// routing
module.exports = (app) => {

    // GET /notes and return notes.html
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

// GET wildcard and returns index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})
};