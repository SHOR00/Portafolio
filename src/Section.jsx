import  './App.css';
import level from '../level.webp';

export default function Section() {
   
  return(
    <section>
      <h2>mi viaje</h2>
      <p>Soy un tecnólogo, creador y emprendedor cívico radicado en los EE. UU. dedicado a construir y evangelizar tecnologías, sistemas y movimientos que generan resiliencia hiperlocal, autosostenibilidad y dinamismo.</p>
      <img src={level}/>
      <h3>Un nuevo capítulo: Centrarse en todo lo relacionado con la "tecnología fundamental"</h3>
      <span>Julio 2022 - Presente</span>
      <p>Construir Civics Unplugged fue un sueño.</p>
      <p>Más allá de la alegría de apoyar a tantos jóvenes innovadores cívicos a explorar sus pasiones y habilidades, estoy agradecido por la cantidad de tiempo que me dio para explorar las raíces del declive y la fragilidad de la civilización.</p>
      <p>Dado el creciente número de riesgos existenciales que enfrentan los estadounidenses y toda la humanidad, mi investigación me ha demostrado que puede que no haya nada más importante para el florecimiento a largo plazo de la humanidad que invertir y construir lo que yo llamo "tecnologías fundamentales" que permiten la resiliencia hiperlocal, la autonomía . -sostenibilidad, dinamismo y regeneración ecológica.</p>
    </section>
  )
}