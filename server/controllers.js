const Models = require('./db/models.js')

module.exports = {
  getTransactions: (req, res) => {
    Models.getTransactions((err, data) => {
      if (err) {
        console.log(`error getting transactions: ${err}`);
        res.sendStatus(404);
      } else {
        res.send(data);
      }
    })
  },
  getCategories: (req, res) => {
    Models.getCategories((err, data) => {
      if (err) {
        console.log(`error getting categories: ${err}`);
        res.sendStatus(404);
      } else {
        res.send(data)
      }
    })
  },
  postTransaction: (req, res) => {
    Models.getCategories(req, (err) => {
      if (err) {
        console.log(`error adding transaction: ${err}`);
        res.sendStaus(400);
      } else {
        res.sendStatus(200);
      }
    })
  },
  postCategory: (req, res) => {
    Models.postCategory(req, (err) => {
      if (err) {
        console.log(`error adding category: ${err}`);
        res.sendStatus(400)
      } else {
        res.sendStatus(200)
      }
    })
  }, 
  updateTransaction: (req, res) => {

  }
}