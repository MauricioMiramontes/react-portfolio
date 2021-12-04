import React from "react";
import NavbarComp from "components/Navbars/Navbar";
import PageHeader from "components/PageHeader/PageHeader";
import Footer from "components/Footer/Footer";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

function Inicio(props) {

  // Funcion para crear un efecto en el header cuando se entra por primera vez a la pagina
  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);

  return (
    <>
      <NavbarComp lenguage={props.lenguage} changeLenguage={props.changeLenguage} />
      <div className="wrapper index-page">
        <PageHeader lenguage={props.lenguage} />
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
                    {props.lenguage === "es" ? <>¿Quien soy?</> : <>Who am I?</>}
                  </h1>
                  {props.lenguage === "es" ?
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
                  {props.lenguage === "es" ? <>¿Que es lo que conozco?</> : <>What do I know?</>}
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
                        <ListGroupItem><h4><i className="fab fa-node-js" />{" "}NodeJS</h4></ListGroupItem>
                        <ListGroupItem><h4><i className="fab fa-react" />{" "}Rect</h4></ListGroupItem>
                        <ListGroupItem><h4><i className="fab fa-react" />{" "}Redux / Redux Persist</h4></ListGroupItem>
                        <ListGroupItem><h4><i className="fas fa-server" />{" "}Express</h4></ListGroupItem>
                        <ListGroupItem><h4><i className="fas fa-cubes" />{" "}ThreeJS</h4></ListGroupItem>
                        <ListGroupItem>
                          <p className="text-danger">
                            {props.lenguage === "es" ? <>En progreso</> : <>In progress</>}
                          </p>
                          <h4>
                            <i className="fas fa-network-wired" />{" "}
                            Web3
                          </h4>
                        </ListGroupItem>
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
                        <ListGroupItem><h4><i className="fas fa-server" />{" "}Django</h4></ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col md="4" className="mt-5">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      style={{ width: "120px", height: "150px" }}
                      src={require("assets/img/database.png").default}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        {props.lenguage === "es" ?
                          <h3 className="text-uppercase">Bases de datos</h3>
                          :
                          <h3 className="text-uppercase">Databases</h3>
                        }
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem><h4>SQL / MySQL</h4></ListGroupItem>
                        <ListGroupItem><h4>SQL / SQLite</h4></ListGroupItem>
                        <ListGroupItem><h4>SQL / PostgreSQL</h4></ListGroupItem>
                        <ListGroupItem><h4>NoSQL / MongoDB</h4></ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4" className="mt-5">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      style={{ width: "120px", height: "150px" }}
                      src={require("assets/img/database.png").default}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        {props.lenguage === "es" ?
                          <h3 className="text-uppercase">Extras</h3>
                          :
                          <h3 className="text-uppercase">Extras</h3>
                        }
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem><h4><i className="fab fa-aws" />{" "}AWS</h4></ListGroupItem>
                        <ListGroupItem><h4><i className="fab fa-git" />{" "}Git</h4></ListGroupItem>
                        <ListGroupItem><h4><i className="fab fa-slack" />{" "}Slack</h4></ListGroupItem>
                        <ListGroupItem><h4><i className="fas fa-brain" />{" "}Deep Learning / Machine Learning</h4></ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4" className="mt-5">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="c#"
                      className="img-center img-fluid"
                      style={{ width: "150px", height: "150px" }}
                      src={require("assets/img/c.png").default}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-danger">
                          {props.lenguage === "es" ? <>En progreso</> : <>In progress</>}
                        </h4>
                        <h3>
                          C#
                        </h3>
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem><h4><i className="fas fa-server"></i>{" "}ASP.NET</h4></ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
      <Footer lenguage={props.lenguage} />
    </>
  );
}

export default Inicio;