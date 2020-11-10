import React, { useState } from 'react';

function TransactionList({ transactions, categories }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th colSpan='4'>Transactions List and Remaining Budget</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Budget</th>
          </tr>
          {transactions.map((transaction, index) => {
            return (
              <tr key={`transaction: ${index}`}>
                <td>{transaction.name}</td>
                <td>{transaction.amount}</td>
                <td>
                <select>
                  {categories.map(({ category }, index) => (
                    <option key={`category: ${index}`}>{category}</option>
                  ))}
                </select>
                </td>
                <td>{!transaction.budget ? '' : transaction.budget}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default TransactionList;