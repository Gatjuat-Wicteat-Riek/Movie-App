import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ img, title, description, rating }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/", {
      state: {},
    });
  };
  return (
    <Card onClick={handleClick} style={{ width: "18rem" }}>
      <Card.Img style={{ maxHeight: "10rem" }} variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>{rating}</Card.Text>
        <Button variant="primary">Click To Watch</Button>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
