import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Product from '../../screens/product'
import SignUp from '../../screens/SignUp'
import Login from '../../screens/Login'
import SingleProduct from '../../screens/SingleProduct'
import Navbar from '../../components/Navbar'

const Routing = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
              <Route path='/' element={<Product/>}/>
              <Route path='signup' element={<SignUp/>}/>
              <Route path='login' element={<Login/>}/>
              <Route path='single-product' element={<SingleProduct/>}/>
        </Routes>      
      </BrowserRouter>    
    </>
  )
}

export default Routing