import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Cart from './pages/Cart'
import Photos from './pages/Photos'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path = '/scrimba-project_advanced-react-capstone-project/' element = {<Photos />} />
        <Route path = '/scrimba-project_advanced-react-capstone-project/cart' element = {<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
