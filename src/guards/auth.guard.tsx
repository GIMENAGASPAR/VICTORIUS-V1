import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";
import { AppStore } from "../redux/store"
import { PrivateRoutes, PublicRoutes } from "../models/router";

interface Props {
    privateValidation: boolean;
}
const PrivateValidationFragment = <Outlet />;
const PublicValidationFragment = <Navigate replace to={PrivateRoutes.PRIVATE} />;


export const Authguard = ({ privateValidation }: Props) =>{
    const userState = useSelector((store: AppStore)=> store.user);
    return userState.name ? (
        privateValidation ? (
          PrivateValidationFragment
        ) : (
          PublicValidationFragment
        )
      ) : (
        <Navigate replace to={PublicRoutes.LOGIN} />
      );
}
export default Authguard;