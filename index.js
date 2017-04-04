import express from "express";
import consign from "consign";
import mongoose from "mongoose";

const PORT = 3000;
const app = express();

var mongoDB = 'mongodb://raju:raju12@ds151450.mlab.com:51450/employee';
mongoose.connect(mongoDB);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//  mongodb://<dbuser>:<dbpassword>@ds151450.mlab.com:51450/employee   -- raju/raju12

app.set('json spaces',4);

consign()
    .include('models')
    .then('routes')
    .into(app);

app.listen(PORT , () => console.log(`NTASK API -PORT ${PORT}` ));
