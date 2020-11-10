const mysql = require('mysql');

const db = mysql.createConnection({
  user: 'root',
  database: 'budget_tracker'
});

module.exports = db;