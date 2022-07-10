import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewReviews, deleteReview } from "../../store/reviews";
import { useParams } from "react-router-dom";
import EditReviewFormModal from "../EditReviewModal";

function Reviews({ currentProduct }) {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);

  const sessionUser = useSelector((state) => state.session.user);

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
    (review) => review?.product_id === +currentProduct?.id
  );
  const currentProductReview = currentProductReviewFiltered[0];
  console.log("CURRENT PRODUCT REVIEW-------", currentProductReview);

  // console.log("REVIEWS-----", reviews);

  const currentProductReviewAuthorFilted = users.filter(
    (user) => user?.id === +currentProductReview?.user_id
  );

  const currentProductReviewAuthor = currentProductReviewAuthorFilted[0];
  // console.log("currentProductReviewAuthor", currentProductReviewAuthor)

  // const currentSessionReviewer =

  return (
    <div>
      <div id="review-container">
        {currentProductReviewFiltered.map((review) => (
          <div id={review.id}>
            <div id="review-rating">{review?.rating}</div>
            <div id="review-title">{review?.title}</div>
            <div id="review-user">{review?.reviewer_name}</div>
            <div id="review-content">{review?.content}</div>
            <div id="review-recomment">
              {review?.recommend === true ? (
                <p>
                  Recommended <i class="fa-regular fa-thumbs-up"></i>
                </p>
              ) : (
                <></>
              )}
            </div>
            <div id="review-recomment">
              {review?.recommend === false ? (
                <p>
                  Would Not Recommend <i class="fa-regular fa-thumbs-down"></i>
                </p>
              ) : (
                <></>
              )}
            </div>
            <div id="review-created-at">{review?.created_at}</div>
            {sessionUser?.id === review.user_id ? (
              <div>
                <EditReviewFormModal review={review} />
                <button onClick={() => dispatch(deleteReview(review.id))}>
                  Delete Review
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
