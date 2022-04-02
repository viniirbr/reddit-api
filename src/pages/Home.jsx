import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Home() {

    const [reddits, setReddits] = useState([])
    
    const params = useParams();

    useEffect(()=>{
        getReddits()
    }, []);
    
    const getReddits = async (section) => {
        const response = await fetch(`https://www.reddit.com/r/reactjs/hot.json?limit=10`);
        const data = await response.json();
        setReddits(data.data.children);
        console.log(reddits)
    }

    return (
        <div>
            {reddits.map((reddit) => {
                return(
                    <h1 key={reddit.id}>{reddit.data.title}</h1>
                )
            })}
        </div>
    )
}

export default Home