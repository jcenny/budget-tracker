const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const Controllers = require('./controllers.js')

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../public')))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/categories', (req, res) => {
  Controllers.getCategories(req.body, res);
});

app.get('/transactions', (req, res) => {
  Controllers.getTransactions(req.body, res);
});

app.post('/categories', (req, res) => {
  Controllers.postCategory(req.body, res);
});

app.post('/transactions', (req, res) => {
  Controllers.postTransaction(req.body, res);
});

app.listen(port, () => console.log(`Listening from port: ${port}`))
