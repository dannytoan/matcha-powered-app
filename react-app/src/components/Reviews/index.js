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
    (review) => review?.product_id === +currentProduct?.id
  );
  const currentProductReview = currentProductReviewFiltered[0];
  console.log("CURRENT PRODUCT REVIEW-------", currentProductReviewFiltered);

  console.log("REVIEWS-----", reviews);

  const currentProductReviewAuthorFilted = users.filter(
    (user) => user?.id === +currentProductReview?.user_id
  );

  const currentProductReviewAuthor = currentProductReviewAuthorFilted[0];
    console.log("currentProductReviewAuthor", currentProductReviewAuthor)

  return (
    <div>
      <div id="review-container">
        {currentProductReviewFiltered.map((review) => (
          <div>
            <div id="review-rating">{review?.rating}</div>
            <div id="review-title">{review?.title}</div>
            <div id="review-user">{currentProductReviewAuthor?.first_name}</div>
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
