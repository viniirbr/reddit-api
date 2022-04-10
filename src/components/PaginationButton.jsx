import React from 'react'
import styled from 'styled-components'
import AddIcon from '@mui/icons-material/Add'; 

function PaginationButton(props) {
  return (
    <PagButton onClick={props.onclick}>
      <AddIcon style={{color:'fff'}}/>
      <p>Ver mais</p>
    </PagButton>
  )
}

const PagButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(99, 36, 198);
  width: 90%;
  height: 50px;
  border: none;
  margin: 20px auto;
  margin-bottom: 40px;
  font-size: 1.2rem;
  transition: all 0.5s;
  border-radius: 10px;

  &:hover {
    background: rgb(62, 23, 126);
  }
  cursor: pointer;
    p {
      color: white;
    }
`

export default PaginationButton