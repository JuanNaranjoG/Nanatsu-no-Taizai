import React, { useEffect, useState } from 'react'
import firebase from "../../../utils/firebase";
import 'firebase/firestore';
import { map } from "lodash"
import Noimage from "../../../img/noimage.png"

export default function Pecados() {
  var db = firebase.firestore();
 /*  var storage = firebase.storage().ref(); */
  const [datos, setdatos] = useState({});

  const load = () => {
    db.collection("pecados").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach(doc => {
        docs.push({ ...doc.data(), id: doc.id })
      });
      setdatos(docs);
    });

  }

  const remove = (id) => {
    db.collection("pecados").doc(`${id}`).delete().then(function () {
      console.log("Document successfully deleted!");
    }).catch(function (error) {
      console.error("Error removing document: ", error);
    });

  }

  useEffect(() => {
    load();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          {
            map(datos, (datos) => (
              <div className=" col-md-6 col-lg-4" key={datos.id}>
                <div className="card mb-4 shadow rounded" >
                  <img src={
                    datos.imagen
                      ? datos.imagen
                      : Noimage
                  } className="card-img-top" alt={datos.nombre} />
                  <div className="card-body">
                    <h5 className="card-title">{datos.pecado}{": "}{datos.nombre}</h5>
                    <p className="card-text">Genero: {datos.genero}</p>
                    <p className="card-text">Raza: {datos.raza}</p>
                    <p className="card-text">Poder: {datos.poder}</p>
                    <p className="card-text">Tesoro Sagrado: {datos.tesoro}</p>
                    <button type="button" className="btn btn-success mr-2 mb-b-2 ">
                      Modificar
                    </button>
                    <button type="button" className="btn btn-danger"
                      onClick={() => { remove(datos.id) }}>
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
