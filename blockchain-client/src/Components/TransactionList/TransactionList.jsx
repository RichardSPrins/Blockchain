import React from 'react'
import styled from 'styled-components'
import Transaction from '../Transaction/Transaction'

const ListContainer = styled.div`
  color: white;
  margin: 0 auto;
  width: 80%;
  height: 80%;
  border: 1px solid black;
  overflow: scroll;
` 
const Title = styled.p`
  margin: .5rem;
  padding: 0;
  font-size: 1.2rem;
  color: white;
`
const TransactionList = (props) => {
  const {transactions, id} = props
  return (
    <ListContainer>
      <Title>Your recent transactions: </Title>
      {
        transactions && transactions.map(block => <Transaction id={id} sender={block.sender} recipient={block.recipient} amount={block.amount}/>)
      }
    </ListContainer>
  )
}

export default TransactionList