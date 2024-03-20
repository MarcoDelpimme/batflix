import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

function FilmRow3() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    fetch("http://www.omdbapi.com/?apikey=1561c88a&s=SUPERMAN")
      .then((response) => response.json())
      .then((data) => {
        setMovieData(data.Search ? data.Search.slice(0, 5) : []);
      })
      .catch((error) => {
        console.log("Errore", error);
      });
  }, []);

  return (
    <div className="container text-white">
      <h3>New Release</h3>
      <Row>
        {movieData.map((movie) => (
          <div className="col mb-2 text-center px-1" key={movie.imdbID}>
            <Link to={"/MovieDetails/" + movie.imdbID}>
              <img className="img-fluid" src={movie.Poster} alt={movie.Title} />
            </Link>
          </div>
        ))}
      </Row>
    </div>
  );
}

export default FilmRow3;
