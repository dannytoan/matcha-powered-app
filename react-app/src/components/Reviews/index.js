import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewReviews, deleteReview } from "../../store/reviews";
import { useParams } from "react-router-dom";
import EditReviewFormModal from "../EditReviewModal";
import "./Reviews.css";

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

  const currentProductReviewAuthorFilted = users?.filter(
    (user) => user?.id === +currentProductReview?.user_id
  );

  // const currentProductReviewAuthor = currentProductReviewAuthorFilted[0];
  // console.log("currentProductReviewAuthor", currentProductReviewAuthor)

  return (
    <div>
      <div id="review-body-container">
        {currentProductReviewFiltered.map((review) => (
          <div id={review.id} className="review-container">
            {/* <div id="review-rating">{review?.rating}</div> */}
            {review?.rating === 1 ? <div className="stars">★☆☆☆☆</div> : <></>}
            {review?.rating === 2 ? <div className="stars">★★☆☆☆</div> : <></>}
            {review?.rating === 3 ? <div className="stars">★★★☆☆</div> : <></>}
            {review?.rating === 4 ? <div className="stars">★★★★☆</div> : <></>}
            {review?.rating === 5 ? <div className="stars">★★★★★</div> : <></>}
            <div id="review-title" className="text">
              {review?.title}
            </div>
            <div id="review-user" className="text">
              {review?.reviewer_name}
            </div>
            <div id="review-content" className="text">
              {review?.content}
            </div>
            <div id="review-recommend" className="text">
              {review?.recommend === true ? (
                <p className="recommended-text">
                  Recommended <i class="fa-regular fa-thumbs-up"></i>
                </p>
              ) : (
                <></>
              )}
            </div>
            <div id="review-recomment">
              {review?.recommend === false ? (
                <p className="recommended-text">
                  Would Not Recommend <i class="fa-regular fa-thumbs-down"></i>
                </p>
              ) : (
                <></>
              )}
            </div>
            <div id="review-created-at" className="text">
              {review?.created_at}
            </div>
            {sessionUser?.id === review.user_id ? (
              <div id="edit-and-delete-btns-container">
                <div id="edit-and-delete-btns">
                  <EditReviewFormModal review={review} />
                  <button className="edit-delete-review-btn" onClick={() => dispatch(deleteReview(review.id))}>
                    Delete Review
                  </button>
                </div>
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
