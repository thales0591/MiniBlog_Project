import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'

//context
import { AuthProvider } from './context/authContext'

//hooks
import { useAuthentication } from './hooks/useAuthentication'
import { useState, useEffect } from 'react'

//pages
import './App.css'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Dashboard from './pages/Dashboard/Dashboard'
import CreatePost from './pages/CreatePost/CreatePost'

function App() {

  const [user, setUser] = useState(undefined)
  const {auth} = useAuthentication()

  const loadingUser = user === undefined
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  useEffect(() => {

  }, [auth])

  if (loadingUser) {
    return <p>Carregando...</p>
  }

  return (
    <>
      <div className='App'>
        <AuthProvider value={{user}}>
          <BrowserRouter>
            <Navbar/>
            <div className="container">
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='/posts/create' element={<CreatePost/>}/>
              </Routes>
            </div>
            <Footer />
          </BrowserRouter>
        </AuthProvider>
      </div>
    </>
  )
}

export default App
