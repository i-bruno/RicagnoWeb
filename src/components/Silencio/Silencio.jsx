import React from 'react'
import Obras from '../Obras/Obras'
import "./Silencio.css"

const Silencio = () => {
  return (
    <div className="gridObra">
      <section className="galeria">
        < Obras obra='silencio' />
      </section>

      <section class="texto">
        <h6 className='titulo'>
          Hacer hablar al silencio
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
          SILENCIO: Estado en el que no hay ningún ruido o no se oye ninguna voz. El Arroyo Tuyú Paré está ubicado en la tercera sección de islas del delta de San Fernando, a tres horas de la estación fluvial de Tigre. Allí está “El Silencio” un predio con dos viviendas separadas una de la otra, usadas por militares de la ESMA para ocultar a sus detenidos mientras la CIDH realizaba inspecciones en el año 1979. En El Silencio había dos clases de detenidos: Los primeros fueron ubicados en una de las casas, destinados a realizar trabajo esclavo, limpiar el monte y realizar refacciones. Otros fueron llevados en peores condiciones a una vivienda cercana. De noche y encapuchados los sumergieron en el anonimato de un sótano improvisado, soportando el frío, olores nauseabundos y en posiciones corporales dolorosas. Arriba vivían los militares; abajo, los secuestrados. Desde 1975, el predio de alrededor de 50 hectáreas era propiedad del pro vicario castrense Emilio Teodoro Grasselli (ex capellán de la Iglesia durante la dictadura cívico-militar) y otras tres personas. Luego, en enero de 1979 fue vendido fraudulentamente al grupo de tareas 3.3.2 de la ESMA: para la firma de la escritura se utilizó el documento de identidad de un detenido desaparecido. Actualmente, es una propiedad privada. Osvaldo Barros, sobreviviente de aquella historia cuenta en una entrevista: "Era un espacio muy pequeño y sobre todo muy bajo, de unos 70, 80 centímetros de altura. No nos podíamos parar, como mucho sentarnos si el guardia nos dejaba. Teníamos que estar tirados en el piso , unos al lado de otros sobre colchonetas" (www.espaciomemoria.ar) El sitio fueseñalizado en 2019, sin embargo, al ser una propiedad privada, está prohibido su acceso, solo se puede verla
          parte frontal de la construcción. El objeto de este proyecto es poder afrontar los costos de la recopilación de testimonios mediante entrevistas, visitas al espacio y la construcción de una maqueta. Estas prácticas tienen
          la intención de "hacer hablar al silencio". Reafirmar todo el accionar planificado de las fuerzas armadas en complicidad con la iglesia católica. Que sea visto, oído, tocado y sentido. Visibilizarlo y lograr su pronta declaración como sitio de memoria.
        </p>
      </section>
    </div>
  )
}

export default Silencio