import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Post from './Post';
import CircularProgress from '@mui/material/CircularProgress';

function PostsList() {
    const [reddits, setReddits] = useState([])

    const params = useParams();

    useEffect(() => {
        getReddits(params.section)
    }, [params.section]);

    const getReddits = async (section) => {
        
        const response = await fetch(`https://www.reddit.com/r/reactjs/${section}.json?limit=10`);
        const data = await response.json();
        setReddits(data.data.children);
    }
    return (
        <PostsWrapper>
            {(reddits.length === 0) ? <CircularProgress /> : reddits.map(item => {
                return (
                    <Post
                        key={item.data.id}
                        title={item.data.title}
                        author={item.data.author}
                        url={item.data.url}
                        date={item.data.created_utc} />
                )
            })}
        </PostsWrapper>
    )
}

const PostsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
    width: 90%;
`

export default PostsList;