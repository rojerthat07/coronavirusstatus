import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark">
             <Link to="/" style={{textDecoration:"none"}}>
        <span className="navbar-brand">Corona Virus Updates</span>
        </Link>
        <button title="button" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
            <Link to="/" style={{textDecoration:"none"}}>
            <li className="nav-item">
                <span className="nav-link" >Home</span>
            </li>  
            </Link> 
                <Link to="/coronavirusstatus/developer" style={{textDecoration:"none"}}>
            <li className="nav-item">
                <span className="nav-link" >Developer</span>
            </li>  
            </Link> 
            <Link to="/coronavirusstatus/prevention" style={{textDecoration:"none"}}>
            <li className="nav-item">
                <span className="nav-link" >Prevention and Tips</span>
            </li>
            </Link> 
            <Link to="/coronavirusstatus/aboutcorona" style={{textDecoration:"none"}}>
            <li className="nav-item">
                <span className="nav-link" >Novel Coronavirus Information</span>
            </li>
            </Link> 
          </ul>
        </div>  
      </nav>
    )
}

export default Header
