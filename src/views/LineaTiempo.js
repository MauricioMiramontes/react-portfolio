import React from 'react';
import NavbarComp from '../components/Navbars/Navbar';
import Footer from 'components/Footer/Footer';
import { Container, Row, Col } from 'reactstrap';

function LineaTiempo(props) {
  return (
    <>
      <NavbarComp lenguage={props.lenguage} changeLenguage={props.changeLenguage} />
      <div className="wrapper index-page">
        <section className="section">
          <Container className="mt-5">
            <Row>
              <Col className="text-center mt-5" md="12">
                {props.lenguage === "es" ?
                  <h1 className="text-danger">En construcción</h1>
                  :
                  <h1 className="text-danger">Construction Zone</h1>
                }
              </Col>
              <Col lg="12" md="12" className="text-center mt-5">
                <img
                  alt="perfil"
                  className="img-fluid rounded-circle shadow-lg"
                  src={require("assets/img/foto_perfil.jpg").default}
                  style={{ width: "250px", height: "250px" }}
                />
              </Col>
            </Row>
          </Container>
        </section>
      </div>
      <Footer lenguage={props.lenguage} />
    </>
  );
}

export default LineaTiempo;