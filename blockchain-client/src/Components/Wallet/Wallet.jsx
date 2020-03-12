import React, { useState } from 'react'
import styled from 'styled-components'
import TransactionList from '../TransactionList/TransactionList'


const WalletComponent = styled.div`
  height: 70%;
  width: 800px;
  border-radius: 10px;
  background-color: #282c34;
  margin: 10px;
  display: flex;
  flex-direction: column;
`

const UserName = styled.p`
  margin: .5rem;
  padding: 0;
  font-size: 2.2rem;
  color: white;
  font-weight: bold;
`

const BalanceTitle = styled.p`
  margin: .5rem;
  padding: 0;
  font-size: 1.2rem;
  color: white;

`

const Balance = styled.p`
  margin: .5rem;
  padding: 0;
  font-size: 1.2rem;
  color: white;
`



const Wallet = (props) => {
  const {balance, user, transactions} = props
  return (
    <WalletComponent>
      <UserName>
        {user}
      </UserName>
      <BalanceTitle>Your wallet currently holds:
      </BalanceTitle>
      <Balance>{balance} {`${balance ? 'coins' : ''}`}</Balance>
      <TransactionList transactions={transactions} id={user}/>
    </WalletComponent>
  )
}

export default Wallet