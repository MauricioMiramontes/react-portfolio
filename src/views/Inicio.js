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
        <section className="section">
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
                    {lenguage === "es" ? <p>¿Quien soy?</p> : <p>Who am I?</p>}
                  </h1>
                  {lenguage === "es" ?
                    <p>
                      Ingeniero en computación con un año de experiencia
                      como desarrollador Full Stack. <br />
                      Amante de la tecnología, la programación, el desarrollo y los videojuegos. <br />
                      Comprometido a seguir aprendiendo para mejorar mis habilidades y poder brindar las mejores soluciones.<br />
                    </p>
                    :
                    <p>
                      Computer engineer with one year of experience
                      as a Full Stack developer  <br />
                      with a love for technology, programming, development and video games.  <br />
                      Committed to continue learning to improve my skills and be able to provide the best solutions.<br />
                    </p>
                  }
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
}

export default Inicio;