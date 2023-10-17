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
    "./img/obras/03_pielDeRio/devastacion-min.jpg",
    "./img/obras/03_pielDeRio/devastacionDetalle1.jpg",
    "./img/obras/03_pielDeRio/devastacionDetalle2.jpg",
    "./img/obras/03_pielDeRio/devastacionDetalle3.jpg",
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

  ]

  let inestable = [

  ]

  let devastacion = [

  ]

  let devenirterritorio = [

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