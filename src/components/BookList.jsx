import { useState } from "react";
import { Alert, Container, Form, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = ({ books, onBookSelect }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Container>
      <Form.Control className="mt-4" type="text" placeholder="Cerca un titolo" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      <Row xs={1} sm={2} md={4} xl={5} xxl={6} className="mt-4">
        {books
          .filter((book) => book.title.toLowerCase().includes(searchQuery.toLowerCase()))
          .map((book) => (
            <SingleBook key={book.asin} book={book} onBookSelect={onBookSelect} />
          ))}
      </Row>

      {books.length === 0 && (
        <Alert variant="warning" className="mt-4">
          Premi un bottone per visualizzare dei libri👆
        </Alert>
      )}
    </Container>
  );
};

export default BookList;
