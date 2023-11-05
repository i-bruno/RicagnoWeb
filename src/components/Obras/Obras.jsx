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

  let capasabrigo = [
    "./img/obras/03_capasAbrigo/ejercicio1.jpg",
    "./img/obras/03_capasAbrigo/ejercicio1Detalle.jpg",
    "./img/obras/03_capasAbrigo/ejercicio1Detalle1.jpg",
    "./img/obras/03_capasAbrigo/ejercicio2.jpg",
    "./img/obras/03_capasAbrigo/ejercicio3.jpg",
    "./img/obras/03_capasAbrigo/ejercicio4.jpg"
  ]

  let pielderio = [
    "./img/obras/04_pielDeRio/pielDeRio1.jpg",
    "./img/obras/04_pielDeRio/pielDeRio2.jpg"
  ]

  let sintesis = [
    "./img/obras/05_sintesisMemoria/sinTitulo.jpg"
  ]

  let memoria = [
    "./img/obras/06_memoriaCartografica/memoriaCartografica.jpg"
  ]

  let inestable = [
    "./img/obras/07_inestable/inestable.jpg",
    "./img/obras/07_inestable/inestableDetalle2.jpg",
    "./img/obras/07_inestable/inestableDetalle3.jpg",
    "./img/obras/07_inestable/inestableDetalle4.jpg"
  ]

  let devastacion = [
    "./img/obras/08_devastacion/devastacionCompleta.jpg",
    "./img/obras/08_devastacion/devastacionDetalle1.jpg",
    "./img/obras/08_devastacion/devastacionDetalle2.jpg",
    "./img/obras/08_devastacion/devastacionDetalle3.jpg"
  ]

  let devenirterritorio = [
    "./img/obras/09_devenirTerritorio/devenirTerritorio.jpg",
    "./img/obras/09_devenirTerritorio/devenirTerritorio1.jpg"
  ]

  let seniorita = [
    "./img/obras/10_seniorita/Seniorita1.jpg",
    "./img/obras/10_seniorita/senioritaDetalle1.jpg",
    "./img/obras/10_seniorita/senioritaDetalle2.jpg"
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

        case 'sintesis':
          return (
            <>
              <PhotoProvider>
                <div className="contenedor">
                  {sintesis.map((image, index) => {
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

          case 'memoria':
            return (
              <>
                <PhotoProvider>
                  <div className="contenedor">
                    {memoria.map((image, index) => {
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