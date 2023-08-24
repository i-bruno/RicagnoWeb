import React from 'react'
import Obras from '../Obras/Obras'
import "./Pielderio.css"

const Pielderio = () => {
  return (
    <div className="gridObra">
            <section className="galeria">
            < Obras obra='pielderio'/>
            </section>

            <section class="texto">
                <h6 className='titulo'>
                    Piel de río
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
                Piel de Río es parte de una investigación autobiográfica que se sitúa en una porción de la Tercera Sección de Islas del Delta de San Fernando. Una región de gran biodiversidad, importancia histórica, política y económica para las provincias del litoral y Bs. As. A lo largo del tiempo, por decisiones político económicas desfavorables para la región, las familias debieron desplazarse para concentrarse en ciudades cercanas. A la artista le atrae esa idea de abandono y busca visibilizar desde las artes visuales el territorio y su memoria.Cada pieza está construida a partir de infusiones utilizadas y entregadas por distintas personas, por lo tanto están cargadas de encuentros y restos de tiempo. Esto resulta interesante ya que la Rocío R. entiende a la tierra/cuerpo como un escenario poético y político, un entramado afectivo donde convergen experiencias e historias. Su cuerpo se envuelve con esas historias y transmuta.
                </p>
            </section>
        </div>
  )
}

export default Pielderio

