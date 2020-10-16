import React from 'react'
import FormPecado from './forms/Form_pecado'
import FormCaballero from './forms/Form_caballero'

export default function Modal(props) {
  function Chageform(props) {
    switch (props.state) {
        case 1: return <><FormPecado /> </>;
        case 2: return <> <FormCaballero/></>;
        case 3: return <> </>;
        case 4: return <> </>;
        default: return <> </>;
    }

}

  return (
    <div className="modal fade" id="Agregar" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content ">
          <div className="float-md-right">
            <button type="button" className="close mr-2 mt-1" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <Chageform state={props.state}/>
          </div>
        </div>
      </div>
    </div>
  )
}
