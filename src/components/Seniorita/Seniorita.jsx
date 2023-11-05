import React from 'react'
import Obras from '../Obras/Obras'
import "./Seniorita.css"


const Seniorita = () => {


    return (

        <div className="gridObra">
            <section className="galeria">
                < Obras obra='seniorita' />
            </section>

            <section class="texto">
                <h6 className='titulo'>
                    Señorita
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
                    La obra denuncia el uso y apropiación del cuerpo de la mujer maestra en un tiempo histórico determinado pero que aún hoy pesa en las espaldas de las trabajadoras de la educación. La naturalización del término señorita y las consecuencias de ese estereotipo. El texto del bordado es una aproximación a partir de información que ronda en el imaginario cultural de la sociedad y el ámbito educativo.
                </p>
                <p>
                    Durante el proceso de construcción nacional se comenzó a poner a las mujeres delante del pizarrón. Se indicó que eran más idóneas para ocupar ese rol ya que la maternidad y el cuidado de los niños era en ellas algo innato, por amor, por vocación, de aquí el sueldo bajo y la poca valoración de su trabajo. Se esperaba que extendieran los cuidados y la enseñanza de valores de manera formal. Todavía resuena el dicho “como una segunda madre".
                </p>
            </section>
        </div>
    )
}

export default Seniorita