import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

function CategorySelector() {
    return (
        <ButtonRow>
            <Navigation to={'/hot'}>Hot</Navigation>
            <Navigation to={'/new'}>News</Navigation>
            <Navigation to={'/rising'}>Rising</Navigation>
        </ButtonRow>
    )
}

const ButtonRow = styled.div`
    display: flex;
    justify-content: center;
    margin: 30px 10px;
`
const Navigation = styled(NavLink)`
    margin-right: 20px;
    text-align: center;
    text-decoration: none;
    box-sizing: border-box;
    padding-top: 10px;
    width: 150px;
    height: 40px;
    border-radius: 10px;
    border: none;
    background: rgba(167, 176, 190, 1);
    color: white;
    cursor: pointer;

    &.active {
        background: rgb(99, 36, 198);
    }
`

export default CategorySelector