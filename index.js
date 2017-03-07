import express from "express";

const PORT = 3000;
const app = express();

app.set('json spaces',4);
app.get("/", (req, res) => res.json({status: 'NTASK -API'}));

app.get("/tasks", (req, res) => 
    res.json({
        tasks : [
            {'title' :'Buy books', 'location': 'Himalaya Book store' },
            {'title': 'Buy fruits', 'location': 'Kothapet fruit market'}
        ]
    })
);

app.listen(PORT , () => console.log(`NTASK API -PORT ${PORT}` ));
