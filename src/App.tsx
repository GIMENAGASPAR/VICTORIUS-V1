import './App.css'
import { Dashboard } from './pages/Private'
import { BrowserRouter, Route, Navigate } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes } from './models/router'
import { AuthGuard, RolGuard } from './guards'
import { RoutesWithNotFound } from "./utilities"
import { Suspense, lazy} from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import { Logout } from './components/Logout'
import { Roles } from './models/roles'

const Login = lazy(()=> import('./pages/Login/Login'));
const Private = lazy(()=> import('./pages/Private/Private'));

function App() {

  return (
    <div className="App">
    <Suspense fallback={<>Cargando</>}>
      <Provider store={store}>
        <BrowserRouter>
        <Logout />
          <RoutesWithNotFound>
            <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE} />} />
            <Route path={PublicRoutes.LOGIN} element={<Login />} />
            <Route element={<AuthGuard privateValidation={true} />}>
              <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
            </Route>
            <Route element={<RolGuard rol={Roles.ADMIN} />}>
              <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
            </Route>
          </RoutesWithNotFound>
        </BrowserRouter>
      </Provider>
    </Suspense>
  </div>
  );
}

export default App
