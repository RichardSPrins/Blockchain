import React from 'react'
import styled from 'styled-components'

const HeaderComponent = styled.div`
  background-color: #291a33;
  height: 80px;
  display: flex;
  align-items: center
`

const HeaderTitle = styled.p`
  font-size: 2rem;
  padding: 0;
  margin: 0;
  color: white
`

const Header = () => {
  return (
    <HeaderComponent>
      <HeaderTitle>Crypto Wallet</HeaderTitle>
    </HeaderComponent>  
  )
}

export default Header