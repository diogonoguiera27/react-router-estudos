
import './App.css';

// config react router 

import { BrowserRouter,Route,Routes } from 'react-router-dom';

//pages
import Home from './pages/Home';
import About from './pages/About';

// components
import Navbar from './components/Navbar';
import Product from './pages/Product';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          {/* rota dinâmica */}
          <Route path='/products/:id' element={<Product/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
