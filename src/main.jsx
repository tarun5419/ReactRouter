import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoFollowers } from './components/Github/Github.jsx'



// const router =  createBrowserRouter([
//   {path : '/',
//     element : <Layout/>,
//     children : [
//       {path : "", element : <Home/>},
//       {path : "about", element : <About/>},
//       {path : "contact", element : <Contact/>}
//     ]

//   }
// ])



const router =  createBrowserRouter(
createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
        <Route path='about' element={<About/>}></Route>
        <Route path='contact' element={<Contact/>}/>
        <Route path='' element={<Home/>}/>
        <Route path='user/:userId' element={<User/>}/>
        <Route
        loader={githubInfoFollowers}
         path='github'
         element={<Github/>}/>
  </Route>
),
  {
    basename: '/ReactRouter', // ✅ set it here!
  }
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
