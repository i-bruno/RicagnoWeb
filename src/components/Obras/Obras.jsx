import React from 'react'
import "./Obras.css"
import { PhotoProvider, PhotoView } from 'react-photo-view'

const Obras = (props) => {

  let images = [
    "./img/obras/01_seniorita/Seniorita1.jpg",
    "./img/obras/01_seniorita/senioritaDetalle1.jpg",
    "./img/obras/01_seniorita/senioritaDetalle2.jpg",
    "./img/obras/01_seniorita/senioritaDetalle3.jpg"
  ]

  return (
    <PhotoProvider>
      <div className="contenedor">
        {images.map((image, index) => {
          return (
            <PhotoView key={index} src={image}>
              <img src={image} alt="obras de arte" className='imgObras' />
            </PhotoView>
          )
        })}
      </div>
    </PhotoProvider>
  )
}



export default Obras