import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Wallet from '../Wallet/Wallet'


const PageContainer = styled.div`
  width: 1000px!important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #535153;
  height: calc(100vh - 80px);
  margin: 0 auto
`

const WalletPage = (props) => {
  const {chain, transactions, id, set_id} = props
  const [input_text, set_input_text] = useState('')
  const [balance, set_balance] = useState(null)

  const handle_text_change = e => {
    set_input_text(e.target.value)
  }

  const handle_submit = e => {
    e.preventDefault();
    set_id(input_text)
  }
  
  useEffect(() => {
    if(transactions){
      let filtered_balance = transactions.reduce((total=0, amount) => {
        if(amount.sender === id){
          total-= Number(amount.amount)
        }
        total += Number(amount.amount)

        return parseInt(total)
      }, [])
      set_balance(filtered_balance)
    }
  }, [transactions])


  // console.log('input text', input_text)
  // console.log('set ID: ', id )
  // console.log('chain', chain)
  // console.log('trans', transactions)

  return (
    <PageContainer>
      <h2 style={{color: 'white'}}>Check your current Balance</h2>
      <p style={{color: 'white'}}>Enter your Name</p>
      <form onSubmit={handle_submit} >
        <input 
          type="text"
          name="id"
          value={input_text}
          onChange={handle_text_change}
        />
        <button>Go!</button>
      </form>
      <Wallet user={id} transactions={transactions} balance={balance}/>
    </PageContainer>
  )
}

export default WalletPage