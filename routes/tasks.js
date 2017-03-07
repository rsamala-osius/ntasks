module.exports = app => {

    /*app.get("/tasks", (req, res) =>
        res.json({
            tasks: [
                { 'title': 'Buy books', 'location': 'Himalaya Book store' },
                { 'title': 'Buy fruits', 'location': 'Kothapet fruit market' }
            ]
        })
    );*/

    const Tasks = app.models.tasks;

    app.get('/tasks', (req, res) => {
        Tasks.findAll({}, (tasks_i) => {
            res.json({ tasks: tasks_i });
        });
    });

};