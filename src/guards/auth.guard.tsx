import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";
import { AppStore } from "../redux/store"
import { PublicRoutes } from "../models/router";

export const Authguard = () =>{
    const userState = useSelector((store: AppStore)=> store.user);
    return userState.id ? <Outlet/> : <Navigate replace to = {PublicRoutes.LOGIN}/>;
}
export default Authguard;