import { Route, Routes } from 'react-router-dom'
import Posts from '../components/PostsList';

function Home() {

    return (
        <Routes>
            <Route path='/:section' element={<Posts/>}/>
        </Routes>
    )
}

export default Home