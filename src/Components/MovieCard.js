import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const MovieCard = ({ img, title, description, rating }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img style={{ maxHeight: "10rem" }} variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>{rating}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
