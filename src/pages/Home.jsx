import { Route, Routes, Navigate} from 'react-router-dom'
import PostsList from '../components/PostsList'

function Home() {

    return (
        <Routes>
            <Route path='/' element={<Navigate replace to='/hot'/>}/>
            <Route path='/:section' element={<PostsList />}/>
        </Routes>
    )
}

export default Home