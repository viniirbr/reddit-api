import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <HeaderContainer>
        <h1>REACT<span>JS</span></h1>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
    background: rgb(99, 36, 198);
    height: 80px;
    display: flex;
    justify-content: center;

    h1 {
        color: white;
    }

    span {
        color: #f9bd4f;
    }

`
export default Header