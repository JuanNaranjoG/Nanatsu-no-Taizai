import React, { useEffect, useState } from 'react';
import firebase from "../../../utils/firebase";
import 'firebase/firestore';
import { map } from "lodash";
import Noimage from "../../../img/noimage.png";


export default function Lugares() {
  var db = firebase.firestore();
  /*  var storage = firebase.storage().ref(); */
  const [datos, setdatos] = useState({});

  const load = () => {
    db.collection("lugares").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach(doc => {
        docs.push({ ...doc.data(), id: doc.id })
      });
      setdatos(docs);
    });

  }

  const remove = (id) => {
    console.log(id);
    db.collection("lugares").doc(`${id}`).delete().then(function () {
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
              <div className="col-md-4" key={datos.id}>
                <div className="card mb-4 shadow rounded" >
                  <img src={
                    datos.imagen
                      ? datos.imagen
                      : Noimage
                  } className="card-img-top" alt={datos.nombre} />
                  <div className="card-body">
                    <h5 className="card-title">{datos.nombre}</h5>
                    <h5 className="text-center">Peleas</h5>
                    <div className="col"> {map(datos.peleas, (peleas) => (
                      <div className="container" key={""}>
                        <div className="row row-cols-2">
                          {map(peleas, (peleador) => (
                            <div class="col text-center" key={""}>{peleador}</div>
                          ))}
                           </div>
                      </div>
                        ))}
                        </div>
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
    </div >
  )
}
