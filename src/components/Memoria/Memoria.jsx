import React from 'react'
import "./Memoria.css"
import Obras from '../Obras/Obras'

const Memoria = () => {
    return (
        <div className="gridObra">
        <section className="galeria">
            < Obras obra='memoria' />
        </section>

        <section class="texto">
            <h6 className='titulo'>
                Memoria cartográfica
            </h6>
            <p className='textoDetalle'>
                Contrato de maestras de 1923 bordado a mano sobre guardapolvo blanco con escarapela
            </p>
            <p className='textoDetalle'>
                2020
            </p>
            <p className='textoDetalle'>
                77 x 58 cm
            </p>

            <p>
                Memoria cartográfica representa una porción de la 3ra. sección del delta de San Fernando, Bs. As.Tierra silenciosa, cargada de señales de un pasado activo y prolífico. El punto indica la vivienda de mi bisabuela, abuela y madre. Productoras de mimbre, madera y frutales. Para representar ese territorio utilizo restos de infusiones creando un diálogo poético entre el material y la región. Frágil, húmedo y a la vez resistente.
            </p>
        </section>
    </div>
    )
}

export default Memoria