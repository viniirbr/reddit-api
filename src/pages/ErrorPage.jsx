import React from 'react'
import styled from 'styled-components'

function ErrorPage(props) {
  return (
    <ErrorWrapper>
        <h2>Não foi possível acessar as informações do Reddit. Tente novamente mais tarde.</h2>
        <h3>Erro: {props.errorMessage}</h3>
    </ErrorWrapper>
  )
}

const ErrorWrapper = styled.div`
    height: 300px;
    width: 90%;
    margin: 0 auto;

    h2 {
        color: rgb(99, 36, 198);
    }
    h3 {
        color: #c20404;
    }
`
export default ErrorPage