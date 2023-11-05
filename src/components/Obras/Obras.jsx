import React from 'react'
import "./Obras.css"
import { PhotoProvider, PhotoView } from 'react-photo-view'

const Obras = (props) => {

  let proyectoarana = [
    "./img/obras/01_proyectoArana/proyectoArana.jpg"
  ]

  let silencio = [
    "./img/obras/02_hacerHablarAlSilencio/lancha2.jpg",
    "./img/obras/02_hacerHablarAlSilencio/viaje.jpg",
    "./img/obras/02_hacerHablarAlSilencio/viaje1.jpg",
    "./img/obras/02_hacerHablarAlSilencio/montajeSotanoIsometrica.jpg",
    "./img/obras/02_hacerHablarAlSilencio/montajeSotanoIzquierda.jpg",
    "./img/obras/02_hacerHablarAlSilencio/montajeSotanoTransparenciaVentana.jpg"
  ]

  let pielderio = [
    "./img/obras/03_pielDeRio/inestable.jpg",
    "./img/obras/03_pielDeRio/inestableDetalle2.jpg",
    "./img/obras/03_pielDeRio/inestableDetalle3.jpg",
    "./img/obras/03_pielDeRio/inestableDetalle4.jpg",
    "./img/obras/03_pielDeRio/memoriaCartografica.jpg",
    "./img/obras/03_pielDeRio/pielDeRio1.jpg",
    "./img/obras/03_pielDeRio/pielDeRio2.jpg",
    "./img/obras/03_pielDeRio/sinTitulo.jpg"
  ]

  let capasabrigo = [
    "./img/obras/04_capasAbrigo/ejercicio1.jpg",
    "./img/obras/04_capasAbrigo/ejercicio1Detalle.jpg",
    "./img/obras/04_capasAbrigo/ejercicio1Detalle1.jpg",
    "./img/obras/04_capasAbrigo/ejercicio2.jpg",
    "./img/obras/04_capasAbrigo/ejercicio3.jpg",
    "./img/obras/04_capasAbrigo/ejercicio4.jpg"
  ]

  let inestable = [
    "./img/obras/05_inestable/inestable.jpg",
    "./img/obras/05_inestable/inestableDetalle2.jpg",
    "./img/obras/05_inestable/inestableDetalle3.jpg",
    "./img/obras/05_inestable/inestableDetalle4.jpg"
  ]

  let devastacion = [
    "./img/obras/06_devastacion/devastacionCompleta.jpg",
    "./img/obras/06_devastacion/devastacionDetalle1.jpg",
    "./img/obras/06_devastacion/devastacionDetalle2.jpg",
    "./img/obras/06_devastacion/devastacionDetalle3.jpg"
  ]

  let devenirterritorio = [
    "./img/obras/07_devenirTerritorio/devenirTerritorio.jpg",
    "./img/obras/07_devenirTerritorio/devenirTerritorio1.jpg"
  ]

  let seniorita = [
    "./img/obras/08_seniorita/Seniorita1.jpg",
    "./img/obras/08_seniorita/senioritaDetalle1.jpg",
    "./img/obras/08_seniorita/senioritaDetalle2.jpg"
  ]

  switch (props.obra) {

    case 'proyectoarana':
      return (
        <>
          <PhotoProvider>
            <div className="contenedorArana">
              {proyectoarana.map((image, index) => {
                return (
                  <PhotoView key={index} src={image}>
                    <img src={image} alt="obras de arte" className='imgArana' />
                  </PhotoView>
                )
              })}
            </div>
          </PhotoProvider>
        </>
      )

    case 'silencio':
      return (
        <>
          <PhotoProvider>
            <div className="contenedor">
              {silencio.map((image, index) => {
                return (
                  <PhotoView key={index} src={image}>
                    <img src={image} alt="obras de arte" className='imgObras' />
                  </PhotoView>
                )
              })}
            </div>
          </PhotoProvider>
        </>
      )

    case 'pielderio':
      return (
        <>
          <PhotoProvider>
            <div className="contenedor">
              {pielderio.map((image, index) => {
                return (
                  <PhotoView key={index} src={image}>
                    <img src={image} alt="obras de arte" className='imgObras' />
                  </PhotoView>
                )
              })}
            </div>
          </PhotoProvider>
        </>
      )

    case 'capasabrigo':
      return (
        <>
          <PhotoProvider>
            <div className="contenedor">
              {capasabrigo.map((image, index) => {
                return (
                  <PhotoView key={index} src={image}>
                    <img src={image} alt="obras de arte" className='imgObras' />
                  </PhotoView>
                )
              })}
            </div>
          </PhotoProvider>
        </>
      )

    case 'inestable':
      return (
        <>
          <PhotoProvider>
            <div className="contenedor">
              {inestable.map((image, index) => {
                return (
                  <PhotoView key={index} src={image}>
                    <img src={image} alt="obras de arte" className='imgObras' />
                  </PhotoView>
                )
              })}
            </div>
          </PhotoProvider>
        </>
      )

    case 'devastacion':
      return (
        <>
          <PhotoProvider>
            <div className="contenedor">
              {devastacion.map((image, index) => {
                return (
                  <PhotoView key={index} src={image}>
                    <img src={image} alt="obras de arte" className='imgObras' />
                  </PhotoView>
                )
              })}
            </div>
          </PhotoProvider>
        </>
      )

    case 'devenirterritorio':
      return (
        <>
          <PhotoProvider>
            <div className="contenedor">
              {devenirterritorio.map((image, index) => {
                return (
                  <PhotoView key={index} src={image}>
                    <img src={image} alt="obras de arte" className='imgObras' />
                  </PhotoView>
                )
              })}
            </div>
          </PhotoProvider>
        </>
      )

    case 'seniorita':
      return (
        <>
          <PhotoProvider>
            <div className="contenedor">
              {seniorita.map((image, index) => {
                return (
                  <PhotoView key={index} src={image}>
                    <img src={image} alt="obras de arte" className='imgObras' />
                  </PhotoView>
                )
              })}
            </div>
          </PhotoProvider>
        </>
      )

    default:
  }
}



export default Obras