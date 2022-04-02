import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

function CategorySelector() {
  return (
      <ButtonRow>
          <NavLink to={'/hot'}><button>Hot</button></NavLink>
          <NavLink to={'/new'}><button>News</button></NavLink>
          <NavLink to={'/rising'}><button>Rising</button></NavLink>
      </ButtonRow>
  )
}

const ButtonRow = styled.div`
    display: flex;
    justify-content: center;
    margin: 30px 10px;

    button {
        margin-right: 20px;
        width: 150px;
        height: 40px;
        border-radius: 10px;
        border: none;
        background: rgba(167, 176, 190, 1);
        color: white;
        cursor: pointer;
    }
`

export default CategorySelector