import './Header.css'

import { Home } from ".."
import { Login, Register } from "../Sesion"


function Header() {
  return (
    <>
    <header>
        <nav className="navbar navbar-expand-sm header-block">
            <div className="container-fluid">
                <a className="navbar-brand" href="/" onClick={Home}>
                    <img src="/images/LOGO.PNG" alt="LOGO" style={{ width: 80 }} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown" href="#" role="button" data-bs-toggle="dropdown">
                                <i className="fa-regular fa-circle-user" style={{ color: "#000000", fontSize: 29 }}/>
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href='/Login' onClick={Login}>iniciar sesion</a></li>
                                <li><a className="dropdown-item" href="/Register" onClick={Register}>registrarse</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"> 
                                <i className="fa-solid fa-cart-shopping" style={{ color: "#000000" }}  />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    </>
  )
}
export default Header