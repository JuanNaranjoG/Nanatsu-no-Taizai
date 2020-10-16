import React from 'react'
import {
    Link
} from "react-router-dom";

export default function Banner() {
    return (
        <div className="header-content">
            <h1>Nanatsu no Taizai</h1>
            <p>Nanatsu no Taizai es un serie de manga y anime escrita e ilustrada por Nakaba Suzuki,
            serializada en la revista Weekly Shōnen Magazine de Kodansha desde el 10 de octubre del 2012.</p>
            <Link to={{
                 pathname: '/anime/pecados',
                 id: 1
            }}>
                <button type="button" class="btn btn-lg btn-secondary btn-light">Iniciar</button>
            </Link>
        </div>
    )
}
