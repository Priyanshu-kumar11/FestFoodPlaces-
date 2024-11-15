import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Footer from './Components/Footer.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
       <Route index element={<Home/>}/>
       <Route path='about' element={<About/>}/>
       <Route path='contact' element={<Footer/>}/>
    </Route>
  ),
  {
    future: {
      v7_skipActionErrorRevalidation: true,
    },
  }
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router}/>
   
  </StrictMode>,
)
