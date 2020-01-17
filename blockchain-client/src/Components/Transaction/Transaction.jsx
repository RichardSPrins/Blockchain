import React from 'react'
import styled from 'styled-components'

const Trans = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: space-around;
`

const Transaction = (props) => {
  const {sender, recipient, amount, id} = props
  return (
    <Trans>
    {
      recipient === id ? <p>^</p> : <p>v</p>
    }
      <p>{sender}</p>
      <p>{recipient}</p>
      <p>${amount}</p>
    </Trans>
  )
}
export default Transaction