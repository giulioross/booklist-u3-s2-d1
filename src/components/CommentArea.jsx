import { useState, useEffect } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

const CommentArea = ({ asin }) => {
  const [reviews, setReviews] = useState([]);

  const fetchComments = async () => {
    if (!asin) return; // Se non c'è asin, esci

    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + asin, {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2E0ZGUxYmNhMDcwNDAwMTU4YmY5NzkiLCJpYXQiOjE3Mzg4NTgwMTEsImV4cCI6MTc0MDA2NzYxMX0.KY1i3aAaFytdpVHLectYt_unBT7ZsLQJtlf6z-iXCXg",
        },
      });

      if (resp.ok) {
        const reviewsData = await resp.json();
        setReviews(reviewsData);
      }
    } catch (error) {
      console.error("Errore nel recupero dei commenti:", error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [asin]); // Esegue il fetch quando cambia `asin`

  return (
    <div className="commentArea">
      <h6>CommentArea</h6>
      <CommentList reviews={reviews} />
      {asin && <AddComment asin={asin} />}
    </div>
  );
};

export default CommentArea;
