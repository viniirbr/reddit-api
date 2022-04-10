import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Post from './Post';
import CircularProgress from '@mui/material/CircularProgress';
import ErrorPage from '../pages/ErrorPage';
import axios from 'axios';

function PostsList(props) {
    const [reddits, setReddits] = useState([]);
    const [error, setError] = useState(null);

    const params = useParams();

    useEffect(() => {
        getReddits(params.section)
    }, [params.section, props.limit]);

    const getReddits = async (section) => {

        try {
            const json = await axios.get(`https://www.reddit.com/r/reactjs/${section}.json?limit=${props.limit}`,
                { timeout: 5000 });
            setReddits(json.data.data.children);
            
        } catch (e) {
            setError(e.message);
        }
    }
    if (error == null) {
        return (
            <PostsWrapper>
                {(reddits.length === 0) ? <CircularProgress style={{color: 'rgb(99, 36, 198)'}}/> : reddits.map(item => {
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
    } else {
        return (<ErrorPage errorMessage={error} />)
    }

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