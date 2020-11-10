import React, { useState } from 'react';

function TransactionList({ transactions }) {
  return (
    <div>
      <table>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Remaining Budget</th>
        </tr>
        {transactions.map((transaction) => {
          return (
            <tr>
              <td>{transaction.name}</td>
              <td>{transaction.amount}</td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default TransactionList;