import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header';
import CategorySelector from './components/CategorySelector';
import PaginationButton from './components/PaginationButton';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <CategorySelector/>
      <Home/>
      <PaginationButton/>
    </BrowserRouter>
  );
}


export default App;
