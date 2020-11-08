import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 200px; 
  height: 200px;
  border: 2px solid green;
  border-radius: 20px;
  padding: 20px;
`

const Button = styled.button`
  width: 30%;
  text-decoration: none;
  border: none;
  background-color: green;
  color: white;
  padding: 5px;
`

export {
  Container,
  Button,
}