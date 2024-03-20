import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Spinner } from "react-bootstrap";

const MovieDetails = function () {
  const [filmDet, setFilmDet] = useState(null);
  const [comment, setComment] = useState([]);
  const [showAllComments, setShowAllComments] = useState(false);
  const params = useParams();
  console.log(params);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=1561c88a&i=${params.filmId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(" its NOT ok");
        }
        return response.json();
      })
      .then((data) => {
        setFilmDet(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(" movie details:", error);
      });
  }, [params.filmId]);

  useEffect(() => {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${params.filmId}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWZhZjRkZDcxNzQ3YjAwMWExYjAyZmEiLCJpYXQiOjE3MTA5NDU1MDEsImV4cCI6MTcxMjE1NTEwMX0.gNa6O84yCTlZStTa3UncuXHPxCQ3J7wZuUBn8T9ck9Q",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(" its NOT ok");
        }
        return response.json();
      })
      .catch((error) => {
        console.error(" movie details:", error);
      })
      .then((data) => {
        setComment(data);
        console.log(data);
        console.log(comment);
      });
  }, [params.filmId]);

  return (
    <div>
      {!filmDet && (
        <div>
          <Spinner animation="border"></Spinner>
        </div>
      )}
      {filmDet && (
        <Card style={{ width: "18rem" }} className="mx-auto" id="detailsCard">
          <Card.Img variant="top" src={filmDet.Poster} />
          <Card.Body>
            <Card.Title>{filmDet.Title}</Card.Title>
            <Card.Text>{filmDet.Plot}</Card.Text>
            <h5>Recensioni del Film</h5>
            {comment.slice(0, showAllComments ? comment.length : 4).map((commentObj, index) => (
              <div key={index} id="commentArea">
                <h6 className="text-dark">Autore: {commentObj.author}</h6>
                <p>{commentObj.comment}</p>
              </div>
            ))}
            {!showAllComments && (
              <Button variant="secondary" className="mb-2" onClick={() => setShowAllComments(true)}>
                Mostra altre recensioni
              </Button>
            )}
            <Button variant="success" className="ml-2">
              Aggiungi Commento
            </Button>
            <Link to="/">
              {" "}
              <Button variant="danger" className="mt-2">
                Torna alla home
              </Button>
            </Link>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default MovieDetails;
