import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Products from './pages/Products';
import { CartContextProvider } from './contexts/CartContext';

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <CartContextProvider>
      <div className="app">
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
        </Routes>
      </div>
    </CartContextProvider>
  );
}

export default App;
