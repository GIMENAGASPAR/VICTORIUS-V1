import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserKey, resetUser } from "../../redux/states/user";
import { clearLocalStorage } from "../../utilities/localStorage.utilities";
import { InvitedRoutes } from "../../models/router";

function Logout() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logOut=()=>{
        clearLocalStorage(UserKey);
        dispatch(resetUser());
        navigate(InvitedRoutes.HOME, { replace: true });
    }
  return (
    <button onClick={logOut}>Log Out</button>
  )
}
export default Logout;