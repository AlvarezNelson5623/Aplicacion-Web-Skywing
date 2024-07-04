import React from 'react';
import '../Estilos/Vuelos.css';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import ListGroup from 'react-bootstrap/ListGroup';


function Vuelos({
  setShowModal,
  loggedIn,
  handleNavLinkClick,
  showPassword,
  togglePasswordVisibility,
  username,
  setUsername,
  password,
  setPassword,
  error,
  setError,
  handleLogin
}) {
  const handleReserveClick = () => {
    if (loggedIn) {
      handleNavLinkClick('Reserva');
    } else {
      setShowModal(true);
    }
  };

  const alertClicked1 = () => {
    alert('Numero para reservas: #########');
  };

  return (
    <div className="App">
      <div className="image">
        <div className="grid-container">
          <div className="grid-item">
            <Accordion flush alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <img src="https://blog.properati.com.co/wp-content/uploads/2021/02/23-co-cartagena.jpg" alt="Cartagena" className="accordion-image" />
                  <h1>Cartagena</h1>
                </Accordion.Header>
                <Accordion.Body>
                  Cartagena es una ciudad portuaria en la costa caribeña de Colombia. Junto al mar, se encuentra la Ciudad Vieja amurallada, que se fundó en el siglo XVI, con plazas, calles de adoquines y edificios coloniales coloridos. Con un clima tropical, la ciudad también es un destino popular por sus playas. Se puede llegar en bote a la Isla de Barú, con playas de arena blanca y palmeras, y a las Islas del Rosario, famosas por sus arrecifes de coral.
                  <br />
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">lugar de partida : precio aproximado</Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Bogota : 1803000 COP</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">B/manga : 1703000 COP</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Button variant="dark" onClick={handleReserveClick}>Reserve ya!</Button>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <img src="https://www.upb.edu.co/es/imagenes/img-sobrelaciudadbucaramanga-cam-1464102319822.jpg" alt="Bucaramanga" className="accordion-image" />
                  <h1>Bucaramanga</h1>
                </Accordion.Header>
                <Accordion.Body>
                  Bucaramanga es la capital del departamento de Santander en la zona norte de Colombia. Está rodeada por la Cordillera Oriental de los Andes y es conocida por sus numerosos parques, incluido el Parque del Agua, con cascadas y fuentes, y el Parque García Rovira bordeado de palmeras. En el centro de la ciudad está la altísima Catedral de la Sagrada Familia y la Capilla de los Dolores, una importante capilla encalada de siglos de antigüedad.
                  <br />
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">lugar de partida : precio aproximado</Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Bogota : 150000 COP</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">San Gil : 123000 COP</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Button variant="dark" onClick={handleReserveClick}>Reserve ya!</Button>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="grid-item">
            <Accordion flush alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <img src="https://www.ul.edu.co/uleduco/cache/mod_roksprocket/488cd8edefde50940f7cbae84cefa34f_350_500.jpg" alt="Barranquilla" className="accordion-image" />
                  <h1>Barranquilla</h1>
                </Accordion.Header>
                <Accordion.Body>
                  Barranquilla, es la capital del departamento Atlántico de Colombia y es un desbordante puerto marino, bordeado por el río Magdalena. La ciudad es conocida por su enorme Carnaval, que reúne a artistas con extravagantes disfraces, carros elaborados y música cumbia. En el elegante vecindario El Prado, el Museo Romántico exhibe artefactos de festivales y exhibiciones anteriores de famosos colombianos, como el escritor Gabriel García Márquez.
                  <br />
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">lugar de partida : precio aproximado</Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Bogota : 1280000 COP</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">B/manga : 1003000 COP</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Button variant="dark" onClick={handleReserveClick}>Reserve ya!</Button>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/56/Noche_en_Medellin.jpg" alt="Medellin" className="accordion-image" />
                  <h1>Medellin</h1>
                </Accordion.Header>
                <Accordion.Body>
                  Medellín es la capital de la provincia montañosa de Antioquia en Colombia. Es apodada la "Ciudad de la eterna primavera" por su clima templado y alberga la famosa Feria de las Flores anual. El moderno Metrocable conecta la ciudad con los barrios circundantes y tiene vistas del Valle de Aburrá que se encuentra debajo. Las esculturas de Fernando Botero decoran la Plaza Botero en el centro de la ciudad, mientras que el Museo de Antioquia exhibe más obras del artista colombiano.
                  <br />
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">lugar de partida : precio aproximado</Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Bogota : 1505000 COP</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">B/manga : 1703000 COP</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Button variant="dark" onClick={handleReserveClick}>Reserve ya!</Button>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <div className="grid-container2">
          <div className="item1grid2">
            <ListGroup>
              <ListGroup.Item action href="#link1" disabled>
                <h2>Cucuta</h2> 1120500 COP
              </ListGroup.Item>
              <ListGroup.Item action href="#link2" disabled>
                <h2>Valledupar</h2> 1450800 COP
              </ListGroup.Item>
              <ListGroup.Item onClick={alertClicked1}>
                Reserva atravez de llamada
              </ListGroup.Item>
            </ListGroup>
          </div>
          <ListGroup>
            <ListGroup.Item action href="#link1" disabled>
              <h2>San andres Islas</h2> 2150500 COP
            </ListGroup.Item>
            <ListGroup.Item action href="#link2" disabled>
              <h2>Cali</h2> 1950500 COP
            </ListGroup.Item>
            <ListGroup.Item action onClick={handleReserveClick}>
              Reserva ya en linea
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    </div>
  );
}

export default Vuelos;