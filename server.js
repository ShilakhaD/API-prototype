const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');
const app = express();
const port = 3000;

const mainRoutes = require('./routes');
app.use(mainRoutes);

app.use(bodyParser.urlencoded({ extended: true }));
MongoClient.connect(db.url, (err, database)=>{
	if(err) return console.log(err);
	require('./routes/')(app, database);
app.listen(port, ()=>{
	console.log('The server is up. Go to localhost:'+port);
});

});