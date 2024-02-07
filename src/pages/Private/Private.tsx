import { Navigate, Route } from "react-router-dom"
import { PrivateRoutes } from "../../models/router"
import { RoutesWithNotFound } from "../../utilities";
import { lazy } from "react";

const Dashboard= lazy(()=>import('./Dashboard/Dashboard'));

function Private() {
  return (
    <RoutesWithNotFound>
    <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE} /> } />
    <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard/>} />
    </RoutesWithNotFound>
  )
}
export default Private;