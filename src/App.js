import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import axios from "axios";
import Cancion from "./components/Cancion";
import Info from "./components/Info";

function App() {
  const [busquedaletra, guardarBusquedaletra] = useState({});
  const [letra, guardarLetra] = useState("");
  const [banda, guardarBanda] = useState("");

  useEffect(() => {
    if (Object.keys(busquedaletra).length === 0) return;

    const consultarApiLetra = async () => {
      const { artista, cancion } = busquedaletra;
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      const [letra, informacion] = await Promise.all([axios(url), axios(url2)]);
      guardarLetra(letra.data.lyrics);
      guardarBanda(informacion.data.artists[0]);
    };
    consultarApiLetra();
  }, [busquedaletra, banda]);

  return (
    <Fragment>
      <Formulario guardarBusquedaletra={guardarBusquedaletra} />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Info banda={banda} />
          </div>

          <div className="col-md-6">
            <Cancion letra={letra} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
