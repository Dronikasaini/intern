import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'
import Director from'./component/Director.jsx'
import Home from './component/Home.jsx'
import Page3 from './component/Page3.jsx'
import About from './component/About.jsx'
import Img from './component/Img.jsx'
import Experience from './component/Experience.jsx';
import Contact from './component/Contact.jsx'
import Form from './component/Form.jsx'
import Work from './component/Work.jsx'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Footer from './component/Footer.jsx'
import Header from './component/Header.jsx'
import Applayout from './component/Applayout.jsx'
import My from './component/My.jsx'

function App() {
  const router = createBrowserRouter([
  {
    path: '/',
    element: <Applayout />, // Header + Outlet + Footer
    children: [
      {
        index: true,        // Default route
        element: <Home/>
      },
      {
        path: 'home',
        element: <Home/>
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'work',
        element: <Work/>
      },
      {
          path: 'page3',
          element: <Page3/>
        },
      {
        path: 'experience',
        element: <My />
      },
      {
        path: 'contact',
        element: <Form/>
      }
    ]
  }
]);
return <RouterProvider router={router}/> }

export default App
