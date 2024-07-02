import Carousel from 'react-bootstrap/Carousel';


import avion from '../img/avion-3.jpg'
import landscape from '../img/lanscape.jpg'
import calendario from '../img/calendario.png';
import contacto from '../img/contacto.png';
import mascota from '../img/mascotas.png'
import '../Estilos/carrusel.css'
function Carouselhome() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={avion}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>VIAJES REGIONALES</h3>
          <p>Ayudamos a las personas a ahorrar tiempo, mejorar su vida, ejerciendo la comunicación, tanto en los negocios como en la vida privada.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={landscape}
          alt="second slide"
        />
        <Carousel.Caption>

          <h1>Tips - Usuario</h1>
          <div class="grid-container">
            <div class="grid-item"><img src={calendario} alt="" /> <p>Puedes agendar tus vuelos llenando nuestros fomularios.</p></div>
            <div class="grid-item"><img src={contacto} alt="" /> <p>Nuestros asesores siempre estarán pendientes a tus solicitudes. </p></div>
            <div class="grid-item"><img src={mascota} alt="" /> <p>Recuerda siempre contar con la documentación de tus mascotas.</p></div>
          </div>


        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carouselhome;