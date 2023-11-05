import React from 'react'
import Obras from '../Obras/Obras'

const Inestable = () => {
    return (
        <div>
            <section className="galeria">
                < Obras obra='inestable' />
            </section>
            <section class="texto">
                <h6 className='titulo'>
                    Inestable
                </h6>
                <p className='textoDetalle'>
                    Lorem ipsum dolor sit amet.
                </p>
                <p className='textoDetalle'>
                    2020
                </p>
                <p className='textoDetalle'>
                    77 x 58 cm
                </p>
                <p>
                    Inestable es la identidad hecha territorio, objeto y espacio. Es una pieza bordada sobre un material frágil y a la vez resistente que evoca recorridos propios y colectivos en el tiempo. A sus pies aparece el resto, el detrito de lo pasado.
                </p>
                <p>
                    Es parte de una investigación que vengo desarrollando sobre el territorio y las comunidades de la 3ra. sección del delta de san fernando. Una región de gran biodiversidad, importancia histórica, política y económica para las provincias del litoral y Bs. As.
                </p>
            </section>
        </div>
    )
}

export default Inestable