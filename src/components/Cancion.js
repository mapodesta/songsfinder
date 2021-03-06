import React, { Fragment } from "react";
const Cancion = ({ letra }) => {
  if (letra === "") return null;

  return (
    <Fragment>
      <h2>Letra de cancion</h2>
      <p className="letra">{letra}</p>
    </Fragment>
  );
};

export default Cancion;
