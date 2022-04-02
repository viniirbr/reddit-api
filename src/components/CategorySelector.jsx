import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function CategorySelector() {
  return (
      <ButtonRow>
          <Link to={'/hot'}><button>Hot</button></Link>
          <Link to={'/news'}><button>News</button></Link>
          <Link to={'/rising'}><button>Rising</button></Link>
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
;
    }
`

export default CategorySelector