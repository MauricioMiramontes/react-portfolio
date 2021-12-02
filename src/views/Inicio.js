import React from "react";
import NavbarComp from "components/Navbars/Navbar";
import PageHeader from "components/PageHeader/PageHeader";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

function Inicio() {

  // Variable para determinar el lenguaje de la pagina
  const [lenguage, setLenguage] = React.useState("es");

  // Funcion para crear un efecto en el heder cuando se entra por primera vez a la pagina
  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);

  return (
    <>
      <NavbarComp lenguage={lenguage} changeLenguage={(e) => setLenguage(e)} />
      <div className="wrapper index-page">
        <PageHeader lenguage={lenguage} />
        <section className="section section-lg">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path2.png").default}
          />
          <Container>
            <Row className="row-grid justify-content-between">
              <Col md="12">
                <div className="pl-md-5">
                  <h1>
                    {lenguage === "es" ? <>¿Quien soy?</> : <>Who am I?</>}
                  </h1>
                  {lenguage === "es" ?
                    <h4>
                      Ingeniero en computación con un año de experiencia
                      como desarrollador Full Stack. <br />
                      Amante de la tecnología, la programación, el desarrollo y los videojuegos. <br />
                      Comprometido a seguir aprendiendo para mejorar mis habilidades y poder brindar las mejores soluciones.<br />
                    </h4>
                    :
                    <h4>
                      Computer engineer with one year of experience
                      as a Full Stack developer  <br />
                      with a love for technology, programming, development and video games.  <br />
                      Committed to continue learning to improve my skills and be able to provide the best solutions.<br />
                    </h4>
                  }
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section section-coins">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path3.png").default}
          />
          <Container>
            <Row className="row-grid justify-content-between">
              <Col md="12">
                <h1>
                  {lenguage === "es" ? <>¿Que es lo que conozco?</> : <>What do I know?</>}
                </h1>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      style={{ width: "120px", height: "150px" }}
                      src={require("assets/img/javascript.png").default}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h3 className="text-uppercase">JavaScript</h3>
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem><h4><i className="fab fa-node-js"/>{" "}NodeJS</h4></ListGroupItem>
                        <ListGroupItem><h4><i className="fab fa-react"/>{" "}Rect</h4></ListGroupItem>
                        <ListGroupItem><h4><i className="fab fa-react"/>{" "}Redux / Redux Persist</h4></ListGroupItem>
                        <ListGroupItem><h4><i className="fas fa-server"/>{" "}Express</h4></ListGroupItem>
                        <ListGroupItem><h4><i className="fas fa-cubes"/>{" "}ThreeJS</h4></ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      style={{ width: "150px", height: "150px" }}
                      src={require("assets/img/html.png").default}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h3 className="text-uppercase">HTML</h3>
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem><h4><i className="fab fa-html5"></i>{" "}HTML5</h4></ListGroupItem>
                        <ListGroupItem><h4><i className="fab fa-bootstrap"></i>{" "}Bootstrap</h4></ListGroupItem>
                        <ListGroupItem><h4><i className="fab fa-css3-alt"></i>{" "}CSS3</h4></ListGroupItem>
                        <ListGroupItem><h4><i className="fab fa-sass"></i>{" "}SASS</h4></ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      style={{ width: "150px", height: "150px" }}
                      src={require("assets/img/python.png").default}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h3 className="text-uppercase">Python</h3>
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem><h4><i className="fas fa-server"/>{" "}Django</h4></ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
}

export default Inicio;