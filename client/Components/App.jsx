import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import CategoryForm from './CategoryForm.jsx';
import PurchaseForm from './PurchaseForm.jsx';
import TransactionList from './TransactionList.jsx';


function App() {
  const [transactions, setTransactions] = useState([]);

  const getTransactions = () => {
    Axios.get('/transactions').then((data) => {
      setTransactions(data.data);
    })
  }

  useEffect(getTransactions, [])

  return (
    <div>
      <TransactionList transactions={transactions}/>
      <CategoryForm />
      <PurchaseForm />
    </div>
  )
}

export default App;