import './Sesion.css'
import { Header, Head} from "../partials"

function Register() {
  return (
    <>
    <Head></Head>
    <Header></Header>
    <div className="body-session">
      <section className="sesion-bloque">
        REGISTRO
        <div className="form-father">

            <section className="form-input">
                <span className="type-form"><i className="fa-regular fa-user" style={{ color: "#5c5c5c" }} /> Nombre</span>
                <input className="input-form" type="text" name="nombre" placeholder="Ingrese su Nombre/s"/>
            </section>

            <section className="form-input">
              <span className="type-form"><i className="fa-regular fa-user" style={{ color: "#5c5c5c" }} />{" "}Apellido</span>
              <input className="input-form" type="text" name="apellido" placeholder="Ingrese su Apellido/s"/>
            </section>
    
            <section className="form-input">
              <span className="type-form"> <i className="fa-solid fa-phone" style={{ color: "#5c5c5c" }} />{" "} Telefono</span>
              <input className="input-form" type="number" name="telefono" placeholder="Ingrese su Telefono"/>
            </section>
    
            <section className="form-input">
              <span className="type-form">{" "}<i  className="fa-regular fa-envelope"  style={{ color: "#5c5c5c" }}/>{" "}Email</span>
              <input className="input-form" type="text" name="email" placeholder="Ingrese su Email"/>
            </section>
    
            <section className="form-input">
              <span className="type-form"><i className="fa-solid fa-lock" style={{ color: "#5c5c5c" }} />{" "}Contrseña</span>
              <input className="input-form" type="text" name="contraseña" placeholder="Ingrese una Contraseña"/>
            </section>
    
            <div className="buttons-form">
              <a className="button-login" href="/home">
                REGISTRARME
              </a>
            </div>
        </div>
      </section>
    </div>
    </>
  )
}
export default Register