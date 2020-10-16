import React, { useState } from 'react'
import firebase from "../../../../utils/firebase";

export default function Form() {
    var db = firebase.firestore();
    const [datos, setdatos] = useState({
        pecado: '',
        nombre: '',
        genero: '',
        raza: '',
        poder: '',
        tesoro: '',
    });

    const handleInputChange = (event) => {
        setdatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    /* const uploadImage = async (uri) => {
        const response = await fetch(uri);
        const blob = await response.blob();
        const ref = firebase.storage().ref().child(`Avatar/${uid}`);
        return ref.put(blob);
      };
    
      const updatePhotoUrl = () => {
        firebase
          .storage()
          .ref(`Avatar/${uid}`)
          .getDownloadURL()
          .then(async (response) => {
            const update = {
              photoURL: response,
            };
            await firebase.auth().currentUser.updateProfile(update);
          })
          .catch(() => {
          
          });
      }; */

    const submit = (event) => {
        event.preventDefault();
        /* uploadImage(datos.imagen)
        .then(() => {
          updatePhotoUrl();
          console.log(datos.imagen);
        })
        .catch(() => {
        }); */

        db.collection("pecados").add({
            pecado: datos.pecado,
            nombre: datos.nombre,
            genero: datos.genero,
            raza: datos.raza,
            poder: datos.poder,
            tesoro: datos.tesoro
        })
            .then(function (docRef) {
                return (
                    <div className="alert alert-primary" role="alert">
                        El Pecado fue creado
                    </div>
                )
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
    }

    return (
        <form className="form-signin needs-validation" noValidate onSubmit={submit}>
            <h1 className="h3 mb-3 font-weight-normal text-center"><font className="formv"><font className="formv">Agregar Pecado</font></font></h1>
            <div className="mb-2">
                <label htmlFor="inputNombre" className=""><font className="formv"><font className="formv">Pecado</font></font></label>
                <input
                    type="text"
                    id="inputEmail"
                    className="form-control"
                    placeholder="Pecado"
                    required
                    name="pecado"
                    onChange={handleInputChange}
                />
            </div>
            <div className="mb-2">
                <label htmlFor="inputApellido" className=""><font className="formv"><font className="formv">Nombre</font></font></label>
                <input
                    type="text"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Nombre"
                    required
                    name="nombre"
                    onChange={handleInputChange}
                />
            </div>
            <div className="mb-2">
                <label htmlFor="inputTelefono" className=""><font className="formv"><font className="formv">Genero</font></font></label>
                <input
                    type="text"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Genero"
                    required
                    name="genero"
                    onChange={handleInputChange}
                />
            </div>
            <div className="mb-2">
                <label htmlFor="inputDireccion" className=""><font className="formv"><font className="formv">Raza</font></font></label>
                <input
                    type="text"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Raza"
                    required
                    name="raza"
                    onChange={handleInputChange}
                />
            </div>
            <div className="mb-2">
                <label htmlFor="inputDireccion" className=""><font className="formv"><font className="formv">Poder</font></font></label>
                <input
                    type="text"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Poder"
                    required
                    name="poder"
                    onChange={handleInputChange}
                />
            </div>
            <div className="mb-2">
                <label htmlFor="inputDireccion" className=""><font className="formv"><font className="formv">
                    Tesoro Sagrado
                    </font></font></label>
                <input
                    type="text"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Tesoro Sagrado"
                    required
                    name="tesoro"
                    onChange={handleInputChange}
                />
            </div>
            <div className="mb-2">
                <label htmlFor="inputDireccion" className=""><font className="formv"><font className="formv">
                    Imagen
                    </font></font></label>
                <input
                    type="file"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Imagen"
                    required
                    name="imagen"
                    onChange={handleInputChange}
                />
            </div>
            <button
                className="btn btn-sm btn-primary btn-block"
                type="submit"
            >
                <font className="formv"><font className="formv">Aceptar</font></font></button>
        </form>

    )
}
