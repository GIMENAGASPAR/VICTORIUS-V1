import { createUser } from "../../redux/states/user";
import { getMorty } from "../../services"
import { useDispatch} from "react-redux";
function Login() {
  const dispatch = useDispatch();
  const login = async()=>{
    try{
      const result = await getMorty();
      dispatch(createUser(result));
    }catch(error){}
  };

  return (
    <div>
      <h2>LOGINNN</h2>
      <button onClick={login}> LOGIN</button>
    </div>
  )
}

export default Login