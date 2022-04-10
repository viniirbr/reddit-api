import { Route, Routes, Navigate} from 'react-router-dom'
import PostsList from '../components/PostsList'

function Home(props) {

    console.log(props.limit)

    return (
        <Routes>
            <Route path='/' element={<Navigate replace to='/hot'/>}/>
            <Route path='/:section' element={<PostsList limit={props.limit}/>}/>
        </Routes>
    )
}

export default Home