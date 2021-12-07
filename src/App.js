import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.2.0";
import "assets/demo/demo.css";

import Inicio from "views/Inicio.js";
import Contacto from "views/Contacto";
import LineaTiempo from "views/LineaTiempo";

function App() {

  // Variable para determinar el lenguaje de la pagina
  const [lenguage, setLenguage] = React.useState("es");

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/inicio" render={(props) => <Inicio {...props} lenguage={lenguage} changeLenguage={(e) => setLenguage(e)} />} />
        <Route path="/contacto" render={(props) => <Contacto {...props} lenguage={lenguage} changeLenguage={(e) => setLenguage(e)} />} />
        <Route path="/linea-tiempo" render={(props) => <LineaTiempo {...props} lenguage={lenguage} changeLenguage={(e) => setLenguage(e)} />} />
        <Redirect from="/" to="/inicio" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
