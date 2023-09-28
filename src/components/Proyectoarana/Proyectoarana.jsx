import React from 'react'
import Obras from '../Obras/Obras'
import "./Proyectoarana.css"

const Proyectoarana = () => {
    return (

        <div class="gridArana">
            <section className="Foto d-flex flex-column align-items-center">
                < Obras obra='proyectoarana' />
            </section>
            <section className="Texto1">
                <h6 className='titulo'>
                    Proyecto Arana
                </h6>

                <p>
                    Canal: Conducto artificial por donde se conduce el agua para distribuirla, para el riego u otros usos.
                </p>

                <p>
                    El canal “Gobernador Arana” es una obra de ingeniería civil construida para conectar los ríos Paraná Miní y Barca Grande, ubicados en la tercera sección de Islas del Delta de San Fernando, en la Provincia de Buenos Aires. Cuenta con una longitud de 8 kilómetros de largo, 7 metros de ancho y 1m de profundidad.
                </p>

                <p>
                    Hace ya algunos años, deposité mis prácticas artísticas en este territorio del que soy oriunda y en la que se forjó mi historia familiar. Luego de un arduo proceso de investigación, realizado a través de diferentes medios, obtuve la información de que se mantienen en pie unas 50 viviendas, pero que a su vez sólo son habitadas no más de 15. La mayoría se encuentra en estado de abandono o utilizadas para periodos esporádicos o vacacionales.
                </p>

                <p>
                    El canal se comunica con la ciudad más cercana mediante un único transporte público que cuenta con un solo horario de recorrido diario con unas tres horas de viaje.
                </p>
            </section>
            <section className="Texto2 d-flex flex-column align-items-center">
                <p>
                    El proyecto retoma el concepto principal de canal para crear un conducto poético-visual que una tiempo/territorio/comunidad, mediante el uso de la fotografía y entrevistas, para obtener registros y respuestas acerca del contexto actual social, político y económico de la comunidad y cómo se entrelaza el pasado observado desde el presente. ¿Qué los une a ese territorio? ¿Cómo viven y resisten el cambio climático, la bajante del río Paraná y los incendios clandestinos? ¿Qué relación tienen con las primeras secciones del delta? ¿Cómo es su vínculo con el turismo y el aumento de la población en los barrios privados y en consecuencia el aumento en el tránsito fluvial?
                </p>

                <p>
                    Me interesa traer a la luz los relatos que constituyen a las familias que habitaron o habitan esos espacios. Resaltando la mirada de los protagonistas se utilizará la cámara de contacto como método, entregando un dispositivo fotográfico temporalmente a cada grupo, para que más allá de las entrevistas y charlas, sean ellxs mismxs quienes compartan su modo de ver, seleccionando que mostrar y qué contar.
                </p>

                <p>
                    La especificidad del método consiste en entregar una cámara desechable por vivienda. Cada cámara cuenta con un rollo de alrededor de 35 fotos en calidad analógica. Se contratará en simultáneo a una persona capacitada en desarrollo de webs para la creación de una pagina con dominio propio, donde se subirá lo recolectado, compartiendo de ese modo, todo el material con una comunidad mas amplia, y permitiendo la interacción entre los protagonistas y visitantes. Con archivos de audio, filmaciones y fotografías, este repositorio servirá no sólo como fuente para mi investigación y producción artística sino también para socializar los modos de habitar un territorio de islas comúnmente pensado para el turismo, los negocios inmobiliarios y agrícolas ganaderos.
                </p>

                <p>
                    Las obras buscan representar la identidad hecha territorio, objeto y espacio. Una construcción poética entre las características de las bolsas de infusiones, el delta del Paraná y su piel. Una conjunción de color, humedad, fragilidad y a la vez resistencia. La piel que es frontera de su cuerpo, se extiende y se vuelve río/obra.
                </p>
                <a href="http://www.proyectoarana.com.ar" target='_blank' rel="noopener noreferrer"><button className="botonArana">Proyecto Arana</button></a>
            </section>
        </div>

        // <div className="gridObra">
        //     <section className="galeria">
        //         < Obras obra='proyectoarana' />
        //     </section>

        //     <section class="texto">

        //         <p className='textoDetalle'>
        //             Canal: Conducto artificial por donde se conduce el agua para distribuirla, para el riego u otros usos.
        //         </p>

        //         <p>
        //             El canal “Gobernador Arana” es una obra de ingeniería civil construida para conectar los ríos Paraná Miní y Barca Grande, ubicados en la tercera sección de Islas del Delta de San Fernando, en la Provincia de Buenos Aires. Cuenta con una longitud de 8 kilómetros de largo, 7 metros de ancho y 1m de profundidad.
        //         </p>
        //         <p>
        //             Hace ya algunos años, deposité mis prácticas artísticas en este territorio del que soy oriunda y en la que se forjó mi historia familiar. Luego de un arduo proceso de investigación, realizado a través de diferentes medios, obtuve la información de que se mantienen en pie unas 50 viviendas, pero que a su vez sólo son habitadas no más de 15. La mayoría se encuentra en estado de abandono o utilizadas para periodos esporádicos o vacacionales.
        //         </p>
        //         <p>
        //             El canal se comunica con la ciudad más cercana mediante un único transporte público que cuenta con un solo horario de recorrido diario con unas tres horas de viaje.
        //         </p>
        //         <p>
        //             El proyecto retoma el concepto principal de canal para crear un conducto poético-visual que una tiempo/territorio/comunidad, mediante el uso de la fotografía y entrevistas, para obtener registros y respuestas acerca del contexto actual social, político y económico de la comunidad y cómo se entrelaza el pasado observado desde el presente. ¿Qué los une a ese territorio? ¿Cómo viven y resisten el cambio climático, la bajante del río Paraná y los incendios clandestinos? ¿Qué relación tienen con las primeras secciones del delta? ¿Cómo es su vínculo con el turismo y el aumento de la población en los barrios privados y en consecuencia el aumento en el tránsito fluvial?
        //         </p>
        //         <p>
        //             Me interesa traer a la luz los relatos que constituyen a las familias que habitaron o habitan esos espacios. Resaltando la mirada de los protagonistas se utilizará la cámara de contacto como método, entregando un dispositivo fotográfico temporalmente a cada grupo, para que más allá de las entrevistas y charlas, sean ellxs mismxs quienes compartan su modo de ver, seleccionando que mostrar y qué contar.
        //         </p>
        //         <p>
        //             La especificidad del método consiste en entregar una cámara desechable por vivienda. Cada cámara cuenta con un rollo de alrededor de 35 fotos en calidad analógica. Se contratará en simultáneo a una persona capacitada en desarrollo de webs para la creación de una pagina con dominio propio, donde se subirá lo recolectado, compartiendo de ese modo, todo el material con una comunidad mas amplia, y permitiendo la interacción entre los protagonistas y visitantes. Con archivos de audio, filmaciones y fotografías, este repositorio servirá no sólo como fuente para mi investigación y producción artística sino también para socializar los modos de habitar un territorio de islas comúnmente pensado para el turismo, los negocios inmobiliarios y agrícolas ganaderos.
        //         </p>
        //         <p>
        //             Las obras buscan representar la identidad hecha territorio, objeto y espacio. Una construcción poética entre las características de las bolsas de infusiones, el delta del Paraná y su piel. Una conjunción de color, humedad, fragilidad y a la vez resistencia. La piel que es frontera de su cuerpo, se extiende y se vuelve río/obra.
        //         </p>
        //     </section>

        //     <a href="http://www.proyectoarana.com.ar" target='_blank' rel="noopener noreferrer"><button className="botonArana">Proyecto Arana</button></a>
        // </div>
    )
}

export default Proyectoarana