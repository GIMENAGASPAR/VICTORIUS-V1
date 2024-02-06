import { Navigate, Route } from "react-router-dom"
import { PrivateRoutes } from "../../models/router"
import { RoutesWithNotFound } from "../../utilities";
import { lazy } from "react";

const Dashboard= lazy(()=>import('./Dashboard/Dashboard'));
const Home= lazy(()=>import('./Home/Home'));

function Private() {
  return (
    <RoutesWithNotFound>
    <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE} /> } />
    <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard/>} />
    <Route path={PrivateRoutes.HOME} element={<Home/>} />
    </RoutesWithNotFound>
  )
    
    
}
export default Private;