import '../public/css/styles.css'
import { BrowserRouter, Route, Navigate } from 'react-router-dom'
import { InvitedRoutes, PrivateRoutes } from './models/router'
import { Authguard, RolGuard } from './guards'
import { RoutesWithNotFound } from "./utilities"
import { Suspense, lazy} from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import { Logout } from './components/Logout'
import { Roles } from './models/roles'

/* VISTAS */
import { HomeInvited } from './pages/Invited/HomeInvited';
// import { HomeUser } from './pages/Private/User/Home'
import { HomeAdmin } from './pages/Private/Admin/Home'
import { Login } from './pages/Login'
const HomeUser = lazy(()=> import('./pages/Private/User/Home/HomeUser'))

function App() {

  return (
    <Suspense fallback={<>Cargando</>}>
      <Provider store={store}>
        <BrowserRouter>
        
          <RoutesWithNotFound>
            <Route path="/" element={<Navigate to={InvitedRoutes.HOME} />} />
            <Route path={InvitedRoutes.HOME} element={<HomeInvited />} />

            <Route element={<Authguard privateValidation={true} />}>
              <Route path={`${PrivateRoutes.USER}/*`} element={<HomeUser />} />
            </Route>
            <Route element={<RolGuard rol={Roles.ADMIN} />}>
              <Route path={PrivateRoutes.ADMIN} element={<HomeAdmin />} />
            </Route>
          </RoutesWithNotFound>
        </BrowserRouter>
      </Provider>
    </Suspense>
  );
}

export default App
