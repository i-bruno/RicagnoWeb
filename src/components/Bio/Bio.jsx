import React from 'react'
import "./Bio.css"

const Bio = () => {
    return (
        <>
            <div class="gridBio">
                <section class="bio">
                    <p>
                        Nace en el año 1990 en San Fernando, provincia de Buenos Aires. Crece en Tigre y se reconoce tanto parte de su ciudad como de sus islas. Es artista visual y docente de la Ciudad de Buenos Aires. Sus prácticas artísticas se vinculan con el delta del río Paraná, donde utiliza diversos lenguajes y acciones para generar nuevas miradas en torno al territorio. Recibe en 2015 el título de Profesora de Artes Visuales otorgado por la Escuela de Artes Visuales Antonio Berni.
                    </p>
                    <p>
                        En 2016 se traslada a la Capital Federal y cursa la especialización en Educación Sexual Integral en el Inst. del Profesorado Dr. Joaquín V. González. Desde su rol docente colabora en la muestra itinerante “No Fue un Juego” en el Museo del Holocausto, Bs. As. 2018/2019. Lleva a cabo junto con el equipo educativo del Ex CCD,TyE “Club Atlético” la muestra “Gol a la memoria” A cuarenta años del mundial ‘78 - 2018.
                    </p>
                    <p>
                        Estudia Fotografía Documental en FILO - UBA y Cine Documental Comunitario en la ENERC - 2020. Realiza Clínica de obra con Andrés Labaké, María Lightowler y Federico de La Puente. Actualmente asiste a los talleres de Diego Perrotta y “Explorar la trama” de Emilia Demichelis. En 2021 y 2022 accede a becas de residencia, tales como “La Rural”, en Tucumán, “Interzona”, en la ciudad de La Plata y “SirveVerse” de La Paternal Espacio Proyecto en Entre Ríos. 
                    </p>
                    <p>
                        Es seleccionada para cursar el programa anual de estudios de creación y circulación de obra en Proyecto Imaginario LATAM y le fue otorgada la Beca Creación del Fondo Nacional de las Artes en el año 2021 y 2022. Expone en diversos espacios de la Ciudad y la Provincia de Buenos Aires. Recibe 1ra Mención en el 4to salón de la mujer: Género y Derechos del Centro Argentino de Arte Textil y Mención en el 5to Premio MacSur 2022. Actualmente el Palacio Belgrano Otamendi de la Ciudad de San Fernando adquirió una de sus obras para que forme parte de su muestra permanente en el museo. 
                    </p>
                    <p>
                        Actualmente se encuentra explorando las características de los materiales y sus poéticas. A su vez, ampliando las fronteras de expresión incorporando publicaciones gráficas, sitios web, fotografía, video, performance, el registro sonoro y lo instalativo.
                    </p>
                </section>
                <section class="expos">
                    <h4>
                        Distinciones y becas
                    </h4>
                        <ul>
                            <li>
                                2022 Premio al reconocimiento por el aporte a la cultura sanfernandina
                            </li>
                            <li>
                                2022 Mención 5to Premio MACSur - Museo de Arte Contemporáneo del Sur
                            </li>
                            <li>
                                2022 Primera Mención 4to Salón de la Mujer: Género y Derechos - Centro Argentino de Arte Textil
                            </li>
                            <li>
                                2022 Beca de Residencia Sirve Verse - ARTLAB
                            </li>
                            <li>
                                2022 Beca Residencia La Rural Raco, Tucumán
                            </li>
                            <li>
                                2022 Beca Clínica de obra - La Tribu y el Territorio
                            </li>
                            <li>
                                2022 Beca Creación para finalización de proyecto - Fondo Nacional de las Artes
                            </li>
                            <li>
                                2021 Beca Creación - Fondo Nacional de las Artes
                            </li>
                            <li>
                                2021 Beca Residencia Interzona
                            </li>
                        </ul>
                    <h4>
                        Muestras
                    </h4>
                        <ul>
                            <li>
                                2023 Noche de los Museos, Colegio N°6 Manuel Belgrano
                            </li>
                            <li>
                                2023 Museo Otamendi, San Fernando - Adquisición de obra en muestra permanente
                            </li>
                            <li>
                                2023 Amuleto Galería Muestra “Seres”, Vicente Lopez
                            </li>
                            <li>
                                2022 5to Premio MACSur - Museo de Arte Contemporáneo del Sur
                            </li>
                            <li>
                                2022 4to Salón de la Mujer: Género y Derechos - Centro Argentino de Arte Textil
                            </li>
                            <li>
                                2022 Quinta el Ombú - San Fernando
                            </li>
                            <li>
                                2021 Salón Primavera - San Fernando
                            </li>
                            <li>
                                2020/2021 VI y VII Encuentro de Arte Textil - Umbral Espacio de Arte
                            </li>
                            <li>
                                2020 Distrito Once - Circuito de arte
                            </li>
                            <li>
                                2016 Museo de la ciudad de San Fernando
                            </li>
                            <li>
                                2009 Centro cultural la tertulia - Don Torcuato, Tigre
                            </li>
                        </ul>
                </section>
            </div>


            {/* <div className='d-flex d-row'>
                <section>
                    <p>
                        Soy artista visual y docente de la Ciudad de Buenos Aires. Mis prácticas artísticas se vinculan con el delta del río Paraná, donde utilizo diversos lenguajes y acciones para generar nuevas miradas en torno al territorio. Recibí en 2015 el título de Profesora de Artes Visuales otorgado por la Escuela de Artes Visuales Antonio Berni.
                    </p>
                    <p>
                        En 2016 me trasladé a la Capital Federal donde realicé la especialización en Educación Sexual Integral en el Inst. del Profesorado Dr. Joaquín V. González. Desde mi rol docente colaboré en la muestra itinerante “No Fue un Juego” en el Museo del Holocausto, Bs. As. 2018/2019 y Llevé a cabo junto con el equipo educativo del Ex CCD,TyE “Club Atlético” la muestra “Gol a la memoria” A cuarenta años del mundial ‘78 - 2018.
                    </p>
                    <p>
                        Estudié Fotografía Documental en FILO - UBA y Cine Documental Comunitario en la ENERC - 2020. Realicé Clínica de obra con Andrés Labaké, María Lightowler y Federico de La Puente. Actualmente asisto a los talleres de Diego Perrotta y de Emilia Demichelis. En 2021 y 2022 accedí a becas de residencia, tales como “La Rural”, en Tucumán, “Interzona”, en la ciudad de La Plata y “SirveVerse” de La Paternal Espacio Proyecto en Entre Ríos. 
                    </p>
                    <p>
                        Fuí seleccionada para cursar el programa anual de estudios de creación y circulación de obra en Proyecto Imaginario Latinoamérica y me fue otorgada la Beca Creación del Fondo Nacional de las Artes en el año 2021 y 2022. Expuse en diversos espacios de la Ciudad y la Provincia de Buenos Aires. Recibí 1ra Mención en el 4to salón de la mujer: Género y Derechos del Centro Argentino de Arte Textil y Mención en el 5to Premio MacSur 2022. Actualmente el Palacio Belgrano Otamendi de la Ciudad de San Fernando adquirió una de mis obras para que forme parte de su muestra permanente en el museo. 
                    </p>
                </section>

                <section>

                </section>
            </div> */}
        </>
    )
}

export default Bio