import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

function CategorySelector(props) {
    return (
        <ButtonRow>
            <Navigation to={'/hot'} onClick={props.onclick}>Hot</Navigation>
            <Navigation to={'/new'} onClick={props.onclick}>New</Navigation>
            <Navigation to={'/rising'} onClick={props.onclick}>Rising</Navigation>
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