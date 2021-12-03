import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.2.0";
import "assets/demo/demo.css";

import Index from "views/Index.js";
import Inicio from "views/Inicio.js";
import Contacto from "views/Contacto";
import LandingPage from "views/examples/LandingPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import ProfilePage from "views/examples/ProfilePage.js";

function App() {

  // Variable para determinar el lenguaje de la pagina
  const [lenguage, setLenguage] = React.useState("es");

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/components" render={(props) => <Index {...props} />} />
        <Route
          path="/landing-page"
          render={(props) => <LandingPage {...props} />}
        />
        <Route
          path="/register-page"
          render={(props) => <RegisterPage {...props} />}
        />
        <Route
          path="/profile-page"
          render={(props) => <ProfilePage {...props} />}
        />
        <Route path="/inicio" render={(props) => <Inicio {...props} lenguage={lenguage} changeLenguage={(e) => setLenguage(e)} />} />
        <Route path="/contacto" render={(props) => <Contacto {...props} lenguage={lenguage} changeLenguage={(e) => setLenguage(e)} />} />
        <Redirect from="/" to="/inicio" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
