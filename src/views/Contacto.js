import Footer from 'components/Footer/Footer';
import NavbarComp from 'components/Navbars/Navbar';
import React from 'react';

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";


function Contacto(props) {
  return (
    <>
      <NavbarComp lenguage={props.lenguage} changeLenguage={props.changeLenguage} />
      <div className="wrapper index-page">
        <section className="section">
          <Container>
            <Row>
            
              <Col md="4">
                <div className="info ">
                  <div className="icon icon-primary">
                    <i className="tim-icons icon-square-pin" />
                  </div>
                  <div className="description">
                    <h3 className="info-title">
                      {props.lenguage === "es" ? <>Localidad</> : <>Location</>}
                    </h3>
                    <h4>
                      Xochimilco<br />
                      Ciudad de México<br />
                      México
                    </h4>
                  </div>
                </div>
              </Col>
              <Col md="4" className = "">
                <div className="info ">
                  <div className="icon icon-primary">
                    <i className="tim-icons icon-mobile" />
                  </div>
                  <div className="description">
                    <h3 className="info-title">
                    {props.lenguage === "es" ? <>Telefono <br/> Whatsapp</> : <>Phone number <br/> Whatsapp</>}
                    </h3>
                    <h4>
                      +52 5521878873 <br />
                      {props.lenguage === "es" ? <>Lun - Vier, 9:00 - 20:00</> : <>Mon - Fri, 9:00 - 20:00</>}  
                    </h4>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="info">
                  <div className="icon icon-primary">
                    <i className="tim-icons icon-email-85" />
                  </div>
                  <div className="description">
                    <h3 className="info-title"> {props.lenguage === "es" ? <>Correos Electrónico</> : <>Emails</>}</h3>
                    <h4>
                      mmiramontesr@gmail.com<br />
                      mauriciomiramontres58@aragon.unam.mx
                    </h4>
                  </div>
                </div>
              </Col>
              
            </ Row>
          </Container>
        </section>
      </div>
      <Footer lenguage={props.lenguage} />
    </>
  );
}

export default Contacto;