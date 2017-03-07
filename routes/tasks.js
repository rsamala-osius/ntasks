module.exports = app => {

    app.get("/tasks", (req, res) =>
        res.json({
            tasks: [
                { 'title': 'Buy books', 'location': 'Himalaya Book store' },
                { 'title': 'Buy fruits', 'location': 'Kothapet fruit market' }
            ]
        })
    );

};