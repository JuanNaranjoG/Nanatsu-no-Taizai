import React, { useEffect, useState } from 'react';
import firebase from "../../../utils/firebase";
import 'firebase/firestore';
import { map } from "lodash";
import Noimage from "../../../img/noimage.png";

export default function Parejas() {
  var db = firebase.firestore();
  /*  var storage = firebase.storage().ref(); */
  const [datos, setdatos] = useState({});

  const load = () => {
    db.collection("parejas").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach(doc => {
        docs.push({ ...doc.data(), id: doc.id })
        console.log(docs[0, 0])
      });
      setdatos(docs);

    });

  }

  const remove = (id) => {
    console.log(id);
    db.collection("parejas").doc(`${id}`).delete().then(function () {
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
                  } className="card-img-top" alt={datos.amante1} />
                  <div className="card-body">
                    <h5 className="card-title">Amantes</h5>
                    <p>{datos.amante1} ama a {datos.amante2}</p>
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
