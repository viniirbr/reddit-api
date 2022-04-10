import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header';
import CategorySelector from './components/CategorySelector';
import PaginationButton from './components/PaginationButton';
import Home from './pages/Home';
import { useState } from 'react';

function App() {

  const [limit, setLimit] = useState(10);

  return (
    <BrowserRouter>
      <Header/>
      <CategorySelector onclick={() => setLimit(10)}/>
      <Home limit={limit}/>
      <PaginationButton onclick={() => setLimit(limit+5)}/>
    </BrowserRouter>
  );
}


export default App;
