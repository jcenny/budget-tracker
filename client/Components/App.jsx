import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import CategoryForm from './CategoryForm.jsx';
import PurchaseForm from './PurchaseForm.jsx';
import TransactionList from './TransactionList.jsx';


function App() {
  const [transactions, setTransactions] = useState([]);
  const [categories, setCategories] = useState([]);

  const getTransactions = () => {
    Axios.get('/transactions').then((data) => {
      setTransactions(data.data);
    })
  };

  const getCategories = () => {
    Axios.get('/categories').then((data) => {
      setCategories(data.data);
    })
  }

  useEffect(() => {
    getTransactions();
    getCategories();
  }, [])

  return (
    <div>
      <TransactionList transactions={transactions} categories={categories}/>
      <CategoryForm />
      <PurchaseForm />
    </div>
  )
}

export default App;