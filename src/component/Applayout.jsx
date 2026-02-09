import React from 'react'
import Header from './Header.jsx';
import Footer from'../component/Footer.jsx';
import { Outlet } from 'react-router-dom'
function Applayout() {
  return (
    <>
    <div className='flex flex-col'>
        <Header/>
        <Outlet/>
        <Footer/>
       
    </div>
    <div>
      
    </div>
    </>
  )
}

export default Applayout