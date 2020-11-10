import React, { useState } from 'react';
import { Container, Button } from './Styles/FormStyles.jsx';

function PurchaseForm() {
  const [amount, setAmount] = useState('');
  const [from, setFrom] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'amount') {
      setAmount(value);
    } else if (name === 'from') {
      setFrom(value);
    }
  }

  return (
    <form>
      <Container>
        <label>Amount</label>
        <input name='amount' type='number' min='0' placeholder={'$0'} value={amount} onChange={handleChange} />
        <label>From</label>
        <input name='from' type='text' placeholder='e.g. Trader Joes' value={from} onChange={handleChange} />
        <Button>Submit</Button>
      </Container>
    </form>
  )
}

export default PurchaseForm;