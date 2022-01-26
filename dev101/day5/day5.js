// Database - MySQL
// Todo list 
/**
CREATE SCHEMA `dev101` ;

CREATE TABLE `dev101`.`todos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `task` VARCHAR(45) NULL,
  `definition` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));

SELECT * FROM dev101.todos;
 */

const express = require('express')
var mysql = require('mysql')

const app = express()
const port = 3000

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'toor',
  database: 'dev101'
})

connection.connect()

app.use(express.json());

app.get('/', (req, res) => {
  connection.query('SELECT * FROM todos', function (err, rows, fields) {
    if (err) throw err
  
    console.log('The solution is: ', rows[0])
    res.send(rows)
  })
})

app.post('/add', (req, res) => {
  console.log('Request: ', req.body)
  connection.query(`INSERT INTO todos (task, definition) VALUES ('${req.body.task}', '${req.body.definition}')`, function (err, rows, fields) {
    if (err) throw err
  
    res.send('Successfully added new todo')
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
