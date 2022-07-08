import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewReviews } from "../../store/reviews";

function Reviews({ currentProduct }) {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    dispatch(viewReviews());
  }, [dispatch]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/users/");
      const responseData = await response.json();
      setUsers(responseData.users);
    }
    fetchData();
  }, []);

  const reviews = useSelector((state) => {
    return Object.values(state.reviews);
  });

  const currentProductReviewFiltered = reviews.filter(
    (review) => review.product_id === +currentProduct.id
  );
  const currentProductReview = currentProductReviewFiltered[0]
  console.log(currentProductReview);

  console.log(reviews);

  const currentProductReviewAuthorFilted = users.filter((user) => user?.id === +currentProductReview?.user_id)
const currentProductReviewAuthor = currentProductReviewAuthorFilted[0]

  return (
    <div>
      <div id="review-container">
        <div id="review-rating">{currentProductReview?.rating}</div>
        <div id="review-title">{currentProductReview?.title}</div>
        <div id="review-user">{currentProductReviewAuthor?.username}</div>
        <div id="review-content">{currentProductReview?.content}</div>
        <div id="review-recomment">{currentProductReview?.recommend === true ? <p>Recommended <i class="fa-regular fa-thumbs-up"></i></p> : <></>}</div>
        <div id="review-recomment">{currentProductReview?.recommend === false ? <p>Would Not Recommend <i class="fa-regular fa-thumbs-down"></i></p> : <></>}</div>
        <div id="review-created-at">{currentProductReview?.created_at}</div>
      </div>
    </div>
  );
}

export default Reviews;
