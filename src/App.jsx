import { Component } from "react";
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

class App extends Component {
  state = {
    books: fantasy,
    selectedBookAsin: null,
  };

  handleBookSelect = (asin) => {
    this.setState({ selectedBookAsin: asin });
  };

  render() {
    return (
      <>
        <MyNav />
        <Welcome />
        <Container>
          <div className="d-flex justify-content-center gap-1 my-3">
            <Button variant="primary" onClick={() => this.setState({ books: fantasy })}>
              Fantasy
            </Button>
            <Button variant="warning" onClick={() => this.setState({ books: history })}>
              History
            </Button>
            <Button variant="danger" onClick={() => this.setState({ books: horror })}>
              Horror
            </Button>
            <Button variant="success" onClick={() => this.setState({ books: romance })}>
              Romance
            </Button>
            <Button variant="info" onClick={() => this.setState({ books: scifi })}>
              Scifi
            </Button>
          </div>

          <Row>
            <Col md={8}>
              <BookList books={this.state.books} onBookSelect={this.handleBookSelect} />
            </Col>
            <Col md={4}>
              <CommentArea asin={this.state.selectedBookAsin} />
            </Col>
          </Row>
        </Container>
        <Footer />
      </>
    );
  }
}

export default App;
