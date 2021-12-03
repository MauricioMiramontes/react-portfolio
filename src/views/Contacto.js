import Footer from 'components/Footer/Footer';
import NavbarComp from 'components/Navbars/Navbar';
import React from 'react';

function Contacto(props) {
  return (
    <>
      <NavbarComp lenguage={props.lenguage} changeLenguage={props.changeLenguage} />
      <div className="wrapper index-page">
        <section className="section">
          
        </section>
      </div>
      <Footer lenguage={props.lenguage} />
    </>
  );
}

export default Contacto;