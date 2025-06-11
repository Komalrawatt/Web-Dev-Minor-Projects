import { Route,Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import {useState} from 'react';
import PrivateRoute from './components/PrivateRoute'
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className='w-screen items-center  bg-[#000814] flex flex-col min-h-screen'>
          <Navbar isLoggedin={isLoggedIn} setLoggedin={setIsLoggedIn} />

          <Routes >
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>}></Route>
            <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn}/>}></Route>
            <Route path="/dashboard" element = {
            <PrivateRoute isLoggedIn={isLoggedIn}>
                <Dashboard/>
            </PrivateRoute>
       
        } />
          </Routes>
    </div>

  )
}

export default App
