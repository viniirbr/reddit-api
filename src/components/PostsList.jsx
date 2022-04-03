import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Post from './Post';
import CircularProgress from '@mui/material/CircularProgress';

function Posts() {
    const [reddits, setReddits] = useState([])
    
    const params = useParams();

    useEffect(()=>{
        getReddits(params.section)
    });
    
    const getReddits = async (section) => {
        const response = await fetch(`https://www.reddit.com/r/reactjs/${section}.json?limit=10`);
        const data = await response.json();
        setReddits(data.data.children);
        console.log(data)
    }
  return (
    <PostsList>
        {(reddits.length===0)?<CircularProgress/>:reddits.map(item => {
            return(
            <Post key={item.data.id} title={item.data.title} author={item.data.author} url={item.data.url}/>
            )
        })}
    </PostsList>
  )
}

const PostsList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
    width: 90%;
`

export default Posts