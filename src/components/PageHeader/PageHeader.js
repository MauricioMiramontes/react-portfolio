import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";

function PageHeader(props) {

  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container>
        <div className="content-center">
          <Row className="row-grid justify-content-between align-items-center text-left">
            <Col lg="6" md="6">
              <h1 className="text-white">
                Muricio Andrés Miramontes Ramírez <br />
              </h1>
              {props.lenguage === "es" ?
                <h3 className="text-white mb-3">
                  Ingeniero en Computación <br />
                  Desarrollador Full Stack
                </h3>
                :
                <h3 className="text-white mb-3">
                  Computer Engineer <br />
                  Full Stack Developer
                </h3>
              }
            </Col>
            <Col lg="4" md="5">
              <img
                alt="perfil"
                className="img-fluid rounded-circle shadow-lg"
                src={require("assets/img/foto_perfil.jpg").default}
                style={{ width: "250px", height: "250px" }}
              />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default PageHeader;