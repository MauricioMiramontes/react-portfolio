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
  },[]);

  return (
    <>
      <NavbarComp lenguage={lenguage} changeLenguage={(e) => setLenguage(e)} />
      <div className="wrapper index-page">
        <PageHeader lenguage={lenguage}/>
      </div>

    </>
  );
}

export default Inicio;