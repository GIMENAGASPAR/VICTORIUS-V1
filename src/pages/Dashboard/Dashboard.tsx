import { Navigate, Route } from "react-router-dom"
import { PrivateRoutes } from "../../models/router"

function Dashboard() {
  return (
    <>
    <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE} /> } />
    <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard/>} />
    <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard/>} />
    </>
  )
    
    
}
export default Dashboard