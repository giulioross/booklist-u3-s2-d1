import { useState } from "react";
import { Badge, Card, Col } from "react-bootstrap";

const SingleBook = ({ book, onBookSelect }) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected((prevSelected) => !prevSelected); // Toggle stato
    if (onBookSelect) {
      onBookSelect(book.asin);
    }
  };

  return (
    <Col>
      <Card className={selected ? "border-danger" : ""} onClick={handleClick} style={{ cursor: "pointer" }}>
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{book.category}</Card.Text>
          <Card.Text>
            <Badge bg="info">€{book.price}</Badge>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;
