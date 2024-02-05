import {Routes} from "react-router-dom"
import './App.css'
import { Login } from './pages/Login'
import { Dashboard } from './pages/Dashboard'
import { BrowserRouter, Route, Navigate } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes } from './models/router'
import { AuthGuard } from './guards'

function App() {

  return <div className='App'>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Navigate to={PrivateRoutes.PRIVATE}/>} />
      <Route path="*" element={<>NOT FOUND</>}/>
      <Route path={PublicRoutes.LOGIN} element={<Login/>} />
      <Route element= {<AuthGuard/>}>
        <Route path= {'${PrivateRoutes.PRIVATE}/*'} element={<Dashboard/>} />
      </Route>
      
    </Routes>
      <Login/>
      <Dashboard/>
    </BrowserRouter>
    
    </div>
}

export default App
