import React, { useState } from "react";
import "./MovieListContainer.css";
import MovieList from "./MovieList";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const MovieListContainer = () => {
  const [searchTitle, setSearchTitle] = useState("");
  const [searchrating, setSearchRating] = useState(0);
  const [show, setShow] = useState(false);
  const [movies, setMovies] = useState([
    {
      id: 1,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUkdOgfDN97wvCTC0BwQzxGFJG6FX-0DF1vA&usqp=CAU",
      title: "New York Film Academy",
      description: " Latest American Movie",
      rating: 10,
    },
    {
      id: 2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSneeWcVqMfMeHC0tLaVFfwcjAgPpRq6jaXYg&usqp=CAU",
      title: "John Rambo",
      description: "Hoolywood movie",
      rating: 9,
    },
    {
      id: 3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSneeWcVqMfMeHC0tLaVFfwcjAgPpRq6jaXYg&usqp=CAU",
      title: "Mark and Vietnam",
      description: "Vietnam War",
      rating: 11,
    },
  ]);
  const [newMovie, setNewMovie] = useState({
    img: "",
    title: "",
    description: "",
    rating: null,
  });
  const handleClose = () => {
    setShow(false);
  };

  const handleModalChange = (e) => {
    setNewMovie((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSave = () => {
    setMovies((prev) => {
      return [...prev, newMovie];
    });
    handleClose();
  };
  return (
    <div className="main-container">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="URl..."
                autoFocus
                name="img"
                onChange={handleModalChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title..."
                autoFocus
                name="title"
                onChange={handleModalChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Description..."
                autoFocus
                name="description"
                onChange={handleModalChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                type="number"
                placeholder="Number..."
                autoFocus
                name="rating"
                onChange={handleModalChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Button onClick={() => setShow(true)} variant="primary">
        Add movie
      </Button>
      <div style={{ margin: "1rem" }}>
        <input
          onChange={(e) => setSearchTitle(e.target.value)}
          type="text"
          placeholder="Search by title..."
        />
        <input
          onChange={(e) => setSearchRating(e.target.value)}
          type="number"
          placeholder="Search by rating..."
          max={10}
          min={1}
        />
      </div>
      <MovieList
        movies={movies.filter((movie) => {
          return (
            movie.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
            movie.rating >= searchrating
          );
        })}
      />
    </div>
  );
};

export default MovieListContainer;
