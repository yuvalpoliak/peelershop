import React from 'react'
import Cart from './pages/Cart';
import Home from "./pages/Home";
import Login from './pages/Login';
import Products from './pages/Products';
import Register from './pages/Register';
import SingleProduct from './pages/SingleProduct';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';




const App = () => {
  const user = true;
  return(
   <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={user ? <Navigate to='/'/> : <Login/>}/>
      <Route path='/register' element={user ? <Navigate to='/'/> : <Register/>}/>
      <Route path="/products/:category" element={<Products/>}/>
      <Route path="/singleProduct/:id" element={<SingleProduct/>}/>
    </Routes>
  </Router>
  )
};

export default App;