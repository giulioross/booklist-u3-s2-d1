import { Component } from "react";
import { Badge, Card, Col } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  handleClick = () => {
    this.setState({ selected: !this.state.selected }, () => {
      if (this.props.onBookSelect) {
        this.props.onBookSelect(this.props.book.asin);
      }
    });
  };

  render() {
    return (
      <Col>
        <Card className={this.state.selected ? "border-danger" : ""} onClick={this.handleClick} style={{ cursor: "pointer" }}>
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
            <Card.Text>{this.props.book.category}</Card.Text>
            <Card.Text>
              <Badge bg="info">€{this.props.book.price}</Badge>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
