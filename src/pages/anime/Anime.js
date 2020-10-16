import React from 'react'
import '../../css/Inicio.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Nav from "./components/Nav";
import Contenedor from './components/Contenedor';
import '../../css/Anime.css';



export default function Anime(props) {

    return (
        <div id="div-anime">
            <Nav />
            <Contenedor id={props.location.state} />
        </div>
    )
}
