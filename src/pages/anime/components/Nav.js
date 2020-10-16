import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkullCrossbones, faUserShield, faGlobeAmericas, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import "firebase/auth"
import { Link, Route, Redirect } from "react-router-dom";



export default function Nav() {
    const [sesion, setsesion] = useState(false)

    return (
        <nav className="d-flex navbar navbar-expand-lg navbar-dark bg-secondary sticky-top pr-3">
            <a className="navbar-brand mr-5" href="/anime/pecados">Nanatsu no Taizai</a>
            <button className="navbar-toggler mr-2" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-haspopup="true" aria-expanded="false">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className=" collapse navbar-collapse" id="sidebarMenu">
                <ul className="navbar-nav mr-auto ">
                    <li className="nav-item">
                        <Link className="nav-link" to={{
                            pathname: '/anime/pecados',
                            state: 1
                        }}
                        >
                            <FontAwesomeIcon icon={faSkullCrossbones} size="1x" className=" mr-md-2 mr-2 " />
                        Pecados
              </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={{
                            pathname: '/anime/caballeros',
                            state: 2
                        }}>
                            <FontAwesomeIcon icon={faUserShield} size="1x" className=" mr-md-2 mr-2 " />
                        Caballeros Sacros
              </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={{
                            pathname: "/anime/lugares",
                            state: 3
                        }}>
                            <FontAwesomeIcon icon={faGlobeAmericas} size="1x" className=" mr-md-2 mr-2 " />
                        Lugares
              </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={{
                            pathname: "/anime/parejas",
                            state: 4
                        }}>
                            <FontAwesomeIcon icon={faUserFriends} size="1x" className=" mr-md-2 mr-2 " />
                        Parejas
            </Link>
                    </li>
                </ul>
                <div className="ml-auto">
                    <button type="button" className="btn btn-outline-light" id="dropdownMenuLink" data-toggle="dropdown"
                        onClick={(event) => { setsesion(true) }}>
                        Home
                </button>
                </div>
            </div>
            <Route>
                {sesion ? <Redirect to="/" /> : <Redirect to="/anime/pecados" />}
            </Route>
        </nav>

    )
}
