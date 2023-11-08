import React from 'react'
import Redes from '../Redes/Redes'
import "./Contacto.css"

const Contacto = () => {
    return (
        <div className='contenedorContacto'>
            <img src="./img/web/foto3.jpg" alt="herramientas" className='imgContacto' />
            <h6>
                rocioaricagno@gmail.com
            </h6>
            <p>
                Buenos Aires, Argentina
            </p>
            <Redes />
        </div>
    )
}

export default Contacto