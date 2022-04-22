const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

let db = new sqlite3.Database('backend-project');

//db.run('CREATE TABLE tasks(id int AUTO_INCREMENT, description varchar(255))');
app.post('/pendientes', function(req, res){
    db.run(`INSERT INTO tasks(description) VALUES ('${req.body.description}') `)
    res.send("sent sucessfull")
});

app.listen(3000);

process.on ('SIGINT', function(){
    console.log('Adios - Atte. El servidor');
    db.close();
    process.exit();
}) 