import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

const CommentList = ({ reviews }) => (
  <ListGroup>
    {reviews.length > 0 ? (
      reviews.map((review) => <SingleComment key={review._id} review={review} />)
    ) : (
      <p className="text-center mt-3">Nessun commento disponibile.</p>
    )}
  </ListGroup>
);

export default CommentList;
