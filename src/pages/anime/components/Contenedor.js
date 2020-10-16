import React from 'react'

import BannerTable from './BannerTable'
import Pecados from './Pecados'
import Caballeros from './Caballeros'
import Lugares from './Lugares'
import Parejas from './Parejas'

import Modal from './Modal'


export default function Contenedor(props) {

    function Chagecontent(props) {
        switch (props.id) {

            case 1: return <> <BannerTable title={"Los 7 Pecados Capitales"} 
            description={"Era la más fuerte y cruel orden de caballeros en toda Britannia, formada por 7 caballeros que llevan en sí la marca de una bestia en su cuerpo. Anteriormente fueron conocidos como traidores debido a que se les inculpó de haber matado al Gran Caballero Sagrado, Zaratras."}
            /> <Pecados /><Modal state={1} /></>;
            case 2: return <> <BannerTable title={"Caballeros Sacros"}
              description={"son caballeros entre los caballeros de distintos reinos que protegen Britannia. Cada uno ellos son personas terribles capaces de igualar el ejército de todo un país."}/>
              <Caballeros /><Modal state={2} /></>;
            case 3: return <> <BannerTable title={"Lugares"} /><Lugares/><Modal state={3} /></>;
            case 4: return <> <BannerTable title={"Parejas"} /><Parejas /><Modal state={4} /></>;
            default: return <> <BannerTable title={"Los 7 Pecados Capitales"} 
            description={"Era la más fuerte y cruel orden de caballeros en toda Britannia, formada por 7 caballeros que llevan en sí la marca de una bestia en su cuerpo. Anteriormente fueron conocidos como traidores debido a que se les inculpó de haber matado al Gran Caballero Sagrado, Zaratras."}
            /><Pecados /><Modal state={1} /></>;
        }

    }

    return (
        <div>
            <div>
                <Chagecontent id={props.id} />
            </div>
        </div>
    )
}
