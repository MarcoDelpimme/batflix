import { Component } from "react";
import Row from "react-bootstrap/Row";

class FilmRow2 extends Component {
  state = {
    movieData: [],
  };

  componentDidMount() {
    fetch("http://www.omdbapi.com/?apikey=1561c88a&s=avengers")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ movieData: data });
        this.setState({ movieData: data.Search.slice(0, 5) });
        console.log(this.state);
      })
      .catch((errore) => {
        console.log("errore", errore);
      });
  }

  render() {
    const { movieData } = this.state;
    return (
      <div className="container text-white mb-4">
        <h3>Watch it Again</h3>
        <Row>
          {movieData.map((movie) => (
            <div className="col mb-2 text-center px-1" key={movie.imdbID}>
              <img className="img-fluid" src={movie.Poster} alt={movie.Title} />
            </div>
          ))}
        </Row>
      </div>
    );
  }
}

export default FilmRow2;
