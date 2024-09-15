import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import Movieslist from './Movieslist'
function Header() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Geeksynergy</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">SignUp</Link>
                </li>
                {/* <li className="nav-item">
                    <Link className="nav-link" to="/signup">Signup</Link>
                </li> */}
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/main">Main</Link>
                </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Header