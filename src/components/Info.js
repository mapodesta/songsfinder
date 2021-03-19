import React from "react";

const Info = ({ banda }) => {
  if (Object.keys(banda).length === 0) return null;

  const { strArtistThumb, strGenre, strBiographyES } = banda;
  return (
    <div className="card border-light">
      <div className="card-header bg-primary text-light font-weight-bold">
        Informacion Artista
      </div>
      <div className="card-body">
        <img src={strArtistThumb} alt="Logo Artista"></img>
        <p className="card-text">Genero:{strGenre}</p>
        <h2 className="card-text">Biografia:</h2>
        <p className="card-text">{strBiographyES}</p>
        <p className="card-text">
          <a
            href={`https://${banda.strFacebook}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href={`https://${banda.strTwitter}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href={`${banda.strLastFMChart}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-lastfm"></i>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Info;
