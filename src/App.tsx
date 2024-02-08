import { BrowserRouter, Route, Navigate } from 'react-router-dom'
import { InvitedRoutes, PrivateRoutes } from './models/router'
import { Authguard, RolGuard } from './guards'
import { RoutesWithNotFound } from "./utilities"
import { Suspense} from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
// import { Logout } from './components/Logout'
import { Roles } from './models/roles'

/* VISTAS */
import { Home } from './pages';
// import { HomeUser } from './pages/Private/User/Home'
import { Login, Register } from './pages/Sesion'
import { Dashboard, Private } from './pages/Private'

function App() {

  return (
    <Suspense fallback={<>Cargando</>}>
      <Provider store={store}>
        <BrowserRouter>
        
          <RoutesWithNotFound>
            <Route path="/" element={<Navigate to={InvitedRoutes.HOME} />} />
            <Route path={InvitedRoutes.HOME} element={<Home />} />

            <Route path="/Login" element={<Login/>} />
            <Route path={InvitedRoutes.LOGIN} element={<Login />} />

            <Route path="/Register" element={<Register/>} />
            <Route path={InvitedRoutes.REGISTER} element={<Register />} />
            
            <Route element={<Authguard privateValidation={true} />}>
              <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
            </Route>
            <Route element={<RolGuard rol={Roles.ADMIN} />}>
              <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
            </Route>
          </RoutesWithNotFound>
        </BrowserRouter>
      </Provider>
    </Suspense>
  );
}

export default App
