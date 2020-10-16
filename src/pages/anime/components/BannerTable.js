import React from 'react'

export default function BannerTable(props) {
  return (
    <section className="jumbotron text-center">
    <div className="container">
      <h1><font><font>{props.title}</font></font></h1>
      <p className="lead text-muted"><font >{props.description}</font></p>
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#Agregar">Agregar</button>
    </div>
  </section>
  )
}
