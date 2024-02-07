import { useNavigate } from "react-router-dom";
import { UserKey, createUser, resetUser } from "../../redux/states/user";
import { getMorty } from "../../services"
import { useDispatch} from "react-redux";
import { InvitedRoutes, PrivateRoutes, Roles } from "../../models";
import { useEffect } from "react";
import { clearLocalStorage } from "../../utilities/localStorage.utilities";

function Login() {
  const dispatch = useDispatch();
  const navigate=useNavigate();

  useEffect(() => {
    clearLocalStorage(UserKey);
    dispatch(resetUser());
    navigate(`/${InvitedRoutes.HOME}`, { replace: true });
  }, []);

  const login = async()=>{
    try{
      const result = await getMorty();
      dispatch(createUser({ ...result, rol: Roles.USER}));
      navigate(`/${PrivateRoutes.USER}`, { replace: true });
    }catch(error){}
  };

  return (
    <div>
      <h2>LOGINNN</h2>
      <button onClick={login}> LOGIN</button>
    </div>
  )
}

export default Login;