import React, { useState } from 'react';
import { Container, Button } from './Styles/FormStyles.jsx';

function CategoryForm() {
  const [category, setCategory] = useState('');
  const [budget, setBudget] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'category') {
      setCategory(value);
    } else if (name === 'budget') {
      setBudget(value);
    }
  }

  const handleSubmit = (e) => {

  }

  return (
    <form>
      <Container>
        <label>Category</label>
        <input name='category' type='text' placeholder='e.g. groceries, gym' value={category} onChange={handleChange} />
        <label>Budget</label>
        <input name='budget' type='number' min='0' placeholder='$0' value={budget} onChange={handleChange} />
        <Button onClick={handleSubmit}>Submit</Button>
      </Container>
    </form>
  )
}

export default CategoryForm;