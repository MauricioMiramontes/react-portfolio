import React from "react";
import { Link } from "react-router-dom";

// Componentes de Reactstrap
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

function NavbarComp(props) {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");

  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  const changeColor = () => {
    if (document.documentElement.scrollTop > 99 || document.body.scrollTop > 99) {
      setNavbarColor("bg-info");
    }
    else if (document.documentElement.scrollTop < 100 || document.body.scrollTop < 100) {
      setNavbarColor("navbar-transparent");
    }
  };

  const toggleCollapse = () => {
    setCollapseOpen(!collapseOpen);
    document.documentElement.classList.toggle("nav-open");
  };

  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };

  const onCollapseExited = () => {
    setCollapseOut("");
  };

  return (
    <>
      <Navbar className={"fixed-top " + navbarColor} color-on-scroll="100" expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand to="/" id="navbar-brand" tag={Link}>
              <span>Portfolio </span>
              Curriculum
            </NavbarBrand>
            <UncontrolledTooltip placement="bottom" target="navbar-brand">
              Creado en React
            </UncontrolledTooltip>
            <button
              aria-expanded={collapseOpen}
              className="navbar-toggler navbar-toggler"
              onClick={toggleCollapse}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          {/* Diseño responsivo */}
          <Collapse
            className={"justify-content-end " + collapseOut}
            navbar
            isOpen={collapseOpen}
            onExiting={onCollapseExiting}
            onExited={onCollapseExited}
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <a href="/inicio" onClick={(e) => e.preventDefault()}>
                    Portfolio
                  </a>
                </Col>
                <Col className="collapse-close text-right" xs="6">
                  <button
                    aria-expanded={collapseOpen}
                    className="navbar-toggler"
                    onClick={toggleCollapse}
                  >
                    <i className="tim-icons icon-simple-remove" />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav navbar>
              <NavItem>
                <NavLink
                  tag={Link}
                  to="/inicio"
                >
                  {props.lenguage === "es" ? <p>Resumen</p> : <p>Resume</p>}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={Link}
                  to="/timeline"
                >
                  {props.lenguage === "es" ? <p>Linea de tiempo</p> : <p>My Timeline</p>}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={Link}
                  to="/contacto"
                >
                  {props.lenguage === "es" ? <p>Contacto</p> : <p>Contact</p>}
                </NavLink>
              </NavItem>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="https://github.com/MauricioMiramontes"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Github"
                >
                  <i className="fab fa-github-square" />
                  <p className="d-lg-none d-xl-none">Github</p>
                </NavLink>
              </NavItem>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="https://www.linkedin.com/in/mauricio-miramontes-ram%C3%ADrez-b2b6b91a0/"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Linkedin"
                >
                  <i className="fab fa-linkedin" />
                  <p className="d-lg-none d-xl-none">LinkedIn</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <Button
                  className="nav-link d-none d-lg-block"
                  color="success"
                  target="_blank"
                  href="https://github.com/MauricioMiramontes/react-portfolio"
                >
                  <i className="fab fa-github" />
                  {props.lenguage === "es" ?
                    <>
                      Codigo Fuente
                    </>
                    :
                    <>
                      Source Code
                    </>
                  }
                </Button>
              </NavItem>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fas fa-globe"></i>
                  {props.lenguage}
                </DropdownToggle>
                <DropdownMenu className="dropdown-with-icons">
                  <DropdownItem
                    tag={Link}
                    to=""
                    onClick={(e) => {
                      e.preventDefault();
                      props.changeLenguage("en");
                    }}>
                    English
                  </DropdownItem>
                  <DropdownItem
                    tag={Link}
                    to=""
                    onClick={(e) => {
                      e.preventDefault();
                      props.changeLenguage("es");
                    }}>
                    Español
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarComp;
