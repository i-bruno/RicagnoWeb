import React from 'react'
import Obras from '../Obras/Obras'

const Devenirterritorio = () => {
    return (
        <div>
            <section className="galeria">
                < Obras obra='devenirterritorio' />
            </section>
            <section class="texto">
                <h6 className='titulo'>
                    Devenir territorio
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
                    Interpreto al monte como un lienzo y al río como conductor de recuerdos. Ambos guardan una multiplicidad de historias donde convergen sonidos, aromas, palabras, lo cotidiano y lo ritual. El cuerpo no está exento de la memoria, por el contrario, cada espacio recorrido se graba en nosotrxs sin darnos cuenta, y ahí se queda. El cuerpo es una matriz de vivencias,  un collage de espacios y sentidos. En esa mezcla de experiencias, transformaciones y vínculos es cuando el ser deviene en territorio.
                </p>
            </section>
        </div>
    )
}

export default Devenirterritorio