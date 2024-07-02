import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import brandon from '../img/brandon.jpg'
import nelson from '../img/nelson.jpg'
import jhonatan from '../img/jhonatan.jpg'
import leider from '../img/leider.jpg'

function Contacto() {
    return (
        <Row xs={1} md={2} className="g-4" style={{ backgroundColor: "#123624" }}>
            {Array.from({ length: 1 }).map((_, idx) => (
                <Col key={idx}>
                    <Card style={{ borderColor: "#000000", borderRadius: '3%', borderWidth: '1px', backgroundColor: "#4f5d57" }}>
                        <Card.Img
                            variant="top"
                            src={brandon}
                            style={{
                                height: "50%",
                                width: "50%",
                                alignContent: "center",
                                margin: "5% 25%",
                                transition: "filter 0.1s ease", /* Transición suave */
                                filter: "grayscale(0%)" /* Inicialmente sin escala de grises */
                            }}
                            onMouseOver={(e) => e.currentTarget.style.filter = "grayscale(100%)"} /* Aplicar escala de grises al pasar el cursor */
                            onMouseOut={(e) => e.currentTarget.style.filter = "grayscale(0%)"} /* Eliminar escala de grises al quitar el cursor */
                        />
                        <Card.Body>
                            <Card.Title style={{ textAlign: "center", color: "white", fontSize: "25px" }}><b>Brandon David Jaimes Castro - 2211859</b></Card.Title>
                            <Card.Text style={{ textAlign: "center", color: "white" }}>
                                <i>
                                    Realizó la parte de registros de vuelo, dónde implementó diversos tipos de elementos, funciones, estilos y etiquetas ademas tambien implemento el login.</i>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}

            {Array.from({ length: 1 }).map((_, idx) => (
                <Col key={idx}>
                    <Card style={{ borderColor: "#000000", borderRadius: '3%', borderWidth: '1px', backgroundColor: "white" }}>
                        <Card.Img
                            variant="top"
                            src={jhonatan}
                            style={{
                                height: "50%",
                                width: "50%",
                                alignContent: "center",
                                margin: "5% 25%",
                                transition: "filter 0.1s ease", /* Transición suave */
                                filter: "grayscale(0%)" /* Inicialmente sin escala de grises */
                            }}
                            onMouseOver={(e) => e.currentTarget.style.filter = "grayscale(100%)"} /* Aplicar escala de grises al pasar el cursor */
                            onMouseOut={(e) => e.currentTarget.style.filter = "grayscale(0%)"} /* Eliminar escala de grises al quitar el cursor */
                        />

                        <Card.Body>
                            <Card.Title style={{ textAlign: "center", color: "black", fontSize: "25px" }}><b>Jonathan Philippe Parra Duran - 2224509</b></Card.Title>
                            <Card.Text style={{ textAlign: "center" }}>
                                <i>Realizó la parte de vuelos y destinos, dónde implementó diferentes elementos, funciones y componentes (acordeones y listas).</i>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}

            {Array.from({ length: 1 }).map((_, idx) => (
                <Col key={idx}>
                    <Card style={{ borderColor: "#000000", borderRadius: '3%', borderWidth: '1px', backgroundColor: "white" }}>
                        <Card.Img
                            variant="top"
                            src={leider}
                            style={{
                                height: "50%",
                                width: "50%",
                                alignContent: "center",
                                margin: "5% 25%",
                                transition: "filter 0.1s ease", /* Transición suave */
                                filter: "grayscale(0%)" /* Inicialmente sin escala de grises */
                            }}
                            onMouseOver={(e) => e.currentTarget.style.filter = "grayscale(100%)"} /* Aplicar escala de grises al pasar el cursor */
                            onMouseOut={(e) => e.currentTarget.style.filter = "grayscale(0%)"} /* Eliminar escala de grises al quitar el cursor */
                        />

                        <Card.Body>
                            <Card.Title style={{ textAlign: "center", color: "black", fontSize: "25px" }}><b>Leider Joanny Esteban Lozano - 2215003</b></Card.Title>
                            <Card.Text style={{ textAlign: "center" }}>
                                <i>Realizó la parte de contactos, dónde implementó distintas funciones, herramientas, estilos y componentes (tarjetas).</i>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}


            {Array.from({ length: 1 }).map((_, idx) => (
                <Col key={idx}>
                    <Card style={{ borderColor: "#000000", borderRadius: '3%', borderWidth: '1px', backgroundColor: "#4f5d57" }}>
                        <Card.Img
                            variant="top"
                            src={nelson}
                            style={{
                                height: "50%",
                                width: "50%",
                                alignContent: "center",
                                margin: "5% 25%",
                                transition: "filter 0.1s ease", /* Transición suave */
                                filter: "grayscale(0%)" /* Inicialmente sin escala de grises */
                            }}
                            onMouseOver={(e) => e.currentTarget.style.filter = "grayscale(100%)"} /* Aplicar escala de grises al pasar el cursor */
                            onMouseOut={(e) => e.currentTarget.style.filter = "grayscale(0%)"} /* Eliminar escala de grises al quitar el cursor */
                        />
                        
                        <Card.Body>
                            <Card.Title style={{ textAlign: "center", color: "white", fontSize: "25px" }}><b>Nelson Ivan Alvarez Suarez - 2215002</b></Card.Title>
                            <Card.Text style={{ textAlign: "center", color: "white" }}>
                                <i>Realizó toda la parte del menú principal, dónde implementó varias funciones, elementos, etiquetas y componentes (entre ellos el más destacado es el iframe).</i>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}

        </Row>

    );
}

export default Contacto;