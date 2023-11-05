import React from 'react'
import Obras from '../Obras/Obras'

const Capasabrigo = () => {
    return (
        <div>
            <section className="galeria">
                < Obras obra='capasabrigo' />
            </section>
            <section class="texto">
                <h6 className='titulo'>
                    Capas de abrigo
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
                    Se trata de observar y recolectar restos de tiempo y momentos que guardan las viviendas de la isla en las pinturas de sus paredes.
                </p>
                <p>
                    Re instalando estas piezas en espacios ajenos a su existencia, el fragmento funciona como símbolo del todo. Condensa la historia de un tiempo fructífero, en el que este territorio fue una prolífica fuente de frutas, madera y mimbre.
                </p>
                <p>
                    Navegando las aguas, intento reconstruir las historias que habitaron esas construcciones, trayendo a la luz nuevamente los relatos que constituyeron a las familias que habitaron esos espacios y proponiendo a partir del lenguaje de la pintura, re ensamblar momentos pasados y actuales.
                </p>
            </section>
        </div>
    )
}

export default Capasabrigo