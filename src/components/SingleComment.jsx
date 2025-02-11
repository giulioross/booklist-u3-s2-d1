import { Button, ListGroupItem } from "react-bootstrap";
import { useState } from "react";

const SingleComment = ({ review }) => {
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = async (id) => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + id, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2E0ZGUxYmNhMDcwNDAwMTU4YmY5NzkiLCJpYXQiOjE3Mzg4NTgwMTEsImV4cCI6MTc0MDA2NzYxMX0.KY1i3aAaFytdpVHLectYt_unBT7ZsLQJtlf6z-iXCXg",
        },
      });

      if (resp.ok) {
        setIsDeleted(true); // Imposta come "eliminato" dopo il successo
      }
    } catch (error) {
      console.error("Errore durante l'eliminazione del commento:", error);
    }
  };

  if (isDeleted) return null; // Non renderizzare nulla se è stato eliminato

  return (
    <ListGroupItem className="d-flex justify-content-between">
      <span>{review.comment}</span> <span>{review.rate}</span>
      <Button variant="danger" onClick={() => handleDelete(review._id)}>
        🗑️
      </Button>
    </ListGroupItem>
  );
};

export default SingleComment;
