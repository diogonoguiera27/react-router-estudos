
import './App.css';

// config react router 

import { BrowserRouter,Navigate,Route,Routes } from 'react-router-dom';

//pages
import Home from './pages/Home';
import About from './pages/About';

// components
import Navbar from './components/Navbar';
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import SearchForm from './components/SearchForm';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar />

        <SearchForm/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          
           {/* Neste Routes */}
          <Route path='/products/:id/info' element={<Info/>}/>
          {/* rota dinâmica */}
          <Route path='/products/:id' element={<Product/>}/>
          {/* Search */}
          <Route path='/search' element={<Search/>}/>
          {/* Redirect  */}
          <Route path='/company' element={<Navigate to="/about"/>}/>
          {/* No match route  */}
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
