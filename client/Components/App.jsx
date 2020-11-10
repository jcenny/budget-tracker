import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import CategoryForm from './CategoryForm.jsx';
import PurchaseForm from './PurchaseForm.jsx';
import TransactionList from './TransactionList.jsx';


function App() {
  const [transactions, setTransactions] = useState([]);
  const [categories, setCategories] = useState([]);

  const getTransactions = () => {
    Axios.get('/transactions')
      .then((data) => {
      setTransactions(data.data);
      })
      .catch(err => console.log(`error getting transactions: ${err}`)) 
  };

  const getCategories = () => {
    Axios.get('/categories')
      .then((data) => {
        setCategories(data.data);
      })
      .catch(err => console.log(`error getting categories: ${err}`))
  }

  const addCategory = ({category, budget}) => {
    Axios.post('/categories', { category, budget })
      .then(() => {
        getCategories();
      })
      .catch(err => console.log(`error posting category: ${err}`))
  }

  useEffect(() => {
    getTransactions();
    getCategories();
  }, [])

  return (
    <div>
      <TransactionList transactions={transactions} categories={categories}/>
      <CategoryForm addCategory={addCategory}/>
      <PurchaseForm />
    </div>
  )
}

export default App;