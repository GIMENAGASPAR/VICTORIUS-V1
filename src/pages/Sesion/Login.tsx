import './Sesion.css'
import { useNavigate } from "react-router-dom";
import { UserKey, createUser, resetUser } from "../../redux/states/user";
import { getMorty } from "../../services"
import { useDispatch} from "react-redux";
import { InvitedRoutes, PrivateRoutes, Roles } from "../../models";
import { useEffect } from "react";
import { clearLocalStorage } from "../../utilities/localStorage.utilities";

import { Head, Header } from '../partials';
import { Register } from '.';

function Login() {
  const dispatch = useDispatch();
  const navigate=useNavigate();

  useEffect(() => {
    clearLocalStorage(UserKey);
    dispatch(resetUser());
    navigate(`/${InvitedRoutes.LOGIN}`, { replace: true });
  }, []);

  const login = async()=>{
    try{
      const result = await getMorty();
      dispatch(createUser({ ...result, rol: Roles.USER}));
      navigate(`/${PrivateRoutes.USER}`, { replace: true });
    }catch(error){}
  };

  return (
    <>
    <Head></Head>
    <Header></Header>
    <div className="body-session">
    <section className="sesion-bloque">
      INICIAR SESION
      <div className="form-father">

        <section className="form-input">
          <span className="type-form">{" "}<i  className="fa-regular fa-envelope"  style={{ color: "#5c5c5c" }}/>{" "}Email</span>
          <input className="input-form" type="text" name="email" placeholder="Email"/>
        </section>

        <section className="form-input">
          <span className="type-form"><i className="fa-solid fa-lock" style={{ color: "#545659" }} />{" "}Contrseña</span>
          <input className="input-form" type="text" name="constraseña" placeholder="Contrseña"/>
        </section>
    
        <div className="buttons-form">
          <section className="password-form">¿OLVIDASTE TU CONTRASEÑA?</section>
          <a className="button-login" href="/home" onClick={login}>INGRESAR</a>
      
          <section className="acount-form">¿NO TIENE UNA CUENTA?</section>
          <a className="button-registate" href="/Register" onClick={Register}>REGISTRATE!</a>
        </div>
      </div>
    </section>
    </div>
    </>
  )
}

export default Login;