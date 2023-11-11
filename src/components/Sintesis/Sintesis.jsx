import React from 'react'
import "./Sintesis.css"
import Obras from '../Obras/Obras'


const Sintesis = () => {
    return (
        <div className="gridObra">
            <section className="galeria">
                < Obras obra='sintesis' />
            </section>

            <section class="texto">
                <h6 className='titulo'>
                    Síntesis de la memoria
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
                    Síntesis de la memoria es una obra que hace hincapié en el espacio, el color y lo sensorial. Representa la fachada de la casa donde vivieron mi bisabuela, mi abuela y mi madre, ubicada en la tercera sección de islas del delta del Paraná, en la provincia de Buenos Aires. El color y la textura son un elemento activo en la obra, utilizándolo como lenguaje y código. Mediante variaciones de tonalidades sobre el soporte y gracias a la transparencia del material, se consigue un efecto óptico centrando la luz en el dibujo arquitectónico, mientras que el color imitativo del río domina la obra. Durante el proceso de trabajo las bolsas de infusiones transmutan para formar parte de un patrón geométrico siendo ubicadas cuidadosamente en yuxtaposición procurando sostener la forma, sus colores y transparencias. La geometría pensada desde la afectividad funciona como instrumento para ejercitar mis recuerdos y construir estéticamente mi memoria. 
                </p>
            </section>
        </div>
    )
}

export default Sintesis