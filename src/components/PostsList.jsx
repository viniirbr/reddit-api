import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Posts() {
    const [reddits, setReddits] = useState([])
    
    const params = useParams();

    useEffect(()=>{
        getReddits(params.section)
    }, [params.section]);
    
    const getReddits = async (section) => {
        const response = await fetch(`https://www.reddit.com/r/reactjs/${section}.json?limit=10`);
        const data = await response.json();
        setReddits(data.data.children);
        console.log(reddits)
    }
  return (
    <div>
        {reddits.map(item => {
            return(
            <h1>{item.data.title}</h1>
            )
        })}
    </div>
  )
}

export default Posts