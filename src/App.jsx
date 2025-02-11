import { useState } from "react";
import "./App.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import BookList from "./components/BookList";
import Footer from "./components/Footer";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import CommentArea from "./components/CommentArea";

import fantasy from "./data/books/fantasy.json";
import history from "./data/books/history.json";
import horror from "./data/books/horror.json";
import romance from "./data/books/romance.json";
import scifi from "./data/books/scifi.json";

const App = () => {
  const [books, setBooks] = useState(fantasy);
  const [selectedBookAsin, setSelectedBookAsin] = useState(null);

  const handleBookSelect = (asin) => {
    setSelectedBookAsin(asin);
  };

  return (
    <>
      <MyNav />
      <Welcome />
      <Container>
        <div className="d-flex justify-content-center gap-1 my-3">
          <Button variant="primary" onClick={() => setBooks(fantasy)}>
            Fantasy
          </Button>
          <Button variant="warning" onClick={() => setBooks(history)}>
            History
          </Button>
          <Button variant="danger" onClick={() => setBooks(horror)}>
            Horror
          </Button>
          <Button variant="success" onClick={() => setBooks(romance)}>
            Romance
          </Button>
          <Button variant="info" onClick={() => setBooks(scifi)}>
            Scifi
          </Button>
        </div>

        <Row>
          <Col md={8}>
            <BookList books={books} onBookSelect={handleBookSelect} />
          </Col>
          <Col md={4}>
            <CommentArea asin={selectedBookAsin} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default App;
