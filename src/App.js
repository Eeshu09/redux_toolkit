import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Product from './component/product/product';
import Cart from './component/cart/cart';
import Main from './component/main';
import Navbar from './component/navbar'; 
import {Routes,Route}from 'react-router-dom'
import ProductDetails from './component/productdetails/productdetails';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/' Component={Product}/>
      <Route path='/cart' Component={Cart}/>
      <Route path='/productdetails/:id'Component={ProductDetails}/>

      </Routes>
    </div>
  );
}

export default App;
