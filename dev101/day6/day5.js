// REST api (create TODO, get todods)

const express = require('express')
const mysql = require('mysql')
const cors = require('cors');

const app = express()
const port = 3000

app.use(cors({ origin: '*' }));

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
