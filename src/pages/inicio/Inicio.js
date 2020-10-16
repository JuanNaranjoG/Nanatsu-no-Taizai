import React from 'react';
import '../../css/Inicio.css';
import 'bootstrap/dist/css/bootstrap.min.css';
/* import $ from 'jquery';
import Popper from 'popper.js'; */
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Video from './components/Video';
import Overlay from './components/Overlay';
import Banner from './components/Banner';



function Inicio() {
  return (
    <div className="div-body">
    <div className="header content">
      <Video />
      <Overlay />
      <Banner />
    </div>
    </div>
  );
}

export default Inicio;
