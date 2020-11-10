const db = require('./index.js');

module.exports = {
  getTransactions: (callback) => {
    db.query('SELECT * FROM transactions;', (err, data) => {
      if (err) {
        console.log(`error getting transactions from DB: ${err}`);
        callback(err, null);
      } else {
        callback(null, data);
      }
    })
  },
  getCategories: (callback) => {
    db.query('SELECT * FROM categories;', (err, data) => {
      if (err) {
        console.log(`error getting categories from DB: ${err}`);
        callback(err, null);
      } else {
        callback(null, data)
      }
    })
  },
  postTransaction: (req, callback) => {
    const {name, amount} = req;
    db.query(`INSERT INTO transaction (name, amount) VALUES ('${name}', ${amount});`, (err) => {
      if (err) {
        console.log(`error posting transaction to DB: ${err}`);
        callback(err);
      } else {
        callback(null)
      }
    })
  },
  postCategory: (req, callback) => {
    const {category, budget} = req;
    db.query(`INSERT INTO categories (category, budget) VALUES ('${category}',${budget});`, (err) => {
      if (err) {
        console.log(`error posting category to DB: ${err}`);
        callback(err);
      } else {
        callback(null)
      }
    })
  }, 
  updateTransaction: (req, res) => {

  }
}