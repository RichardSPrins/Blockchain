import React, {useEffect, useState} from 'react';
import Header from './Components/Header/Header'
import WalletPage from './Components/WalletPage/WalletPage'
import axios from 'axios'



function App() {
  const [coin_chain, set_coin_chain] = useState([])
  const [id, set_id] = useState('')
  const [transactions, set_trans] = useState([])
  
  useEffect(() => {
    axios
    .get('http://localhost:5000/chain', {
      headers: {
        contentType: 'application/json'
      }
    })
    .then(res => {
      // console.log(res.data)
      set_coin_chain(res.data.chain)
    })
  }, [])
  
  
  
  useEffect(() => {
    let allTransactions = coin_chain.map(block => block.transactions)
    // console.log(allTransactions)
    let transList = allTransactions.reduce((total, amount) => {
      return total.concat(amount)
    }, [])

    let userTrans = transList.filter(block => block.recipient === id || block.sender === id)
    // set_trans()
    // console.log(userTrans)
    set_trans(userTrans)
  }, [id])
  

  return (
    <div className="App">
      <Header/>
      <WalletPage chain={coin_chain} transactions={transactions} id={id} set_id={set_id} set_trans={set_trans}/>
    </div>
  );
}

export default App;
