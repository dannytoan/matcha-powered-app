const VIEW_REVIEWS = "reviews/VIEW_REVIEWS";
const ADD_REVIEW = "reviews/ADD_REVIEW";
const DEL_REVIEW = "reviews/DEL_REVIEW";

const view = (reviews) => ({
  type: VIEW_REVIEWS,
  reviews,
});

const add = (review) => ({
  type: ADD_REVIEW,
  review,
});

const remove = (review) => ({
  type: DEL_REVIEW,
  review,
});

export const viewReviews = () => async (dispatch) => {
  const response = await fetch("/api/reviews");
  //   console.log("INSIDE VIEW PRODUCTS THUNK", response);

  if (response.ok) {
    const reviews = await response.json();

    dispatch(view(reviews.reviews));
    return reviews.reviews;
  } else {
    const errors = await response.json();
    return errors;
  }
};

export const addReview = (payload) => async (dispatch) => {
  const response = await fetch("/api/reviews/new", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const newReview = await response.json();
  // console.log("RESPONSE", response);
  // console.log("NEW PRODUCT", newReview);

  if (newReview.newReview) {
    dispatch(add(newReview.newReview));
    return newReview.newReview;
  }
};

export const deleteReview = (id) => async (dispatch) => {
  const response = await fetch(`/api/reviews/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    dispatch(remove(id));
    return response;
  }
};

export const updateReview = (payload, id) => async (dispatch) => {

  const response = await fetch(`/api/reviews/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  })

  if (response.ok) {
    const editedReview = await response.json();
    console.log("edited review", editedReview)
    dispatch(add(editedReview));
    return editedReview;
  }
}

const reviewsReducer = (state = {}, action) => {
  switch (action.type) {
    case VIEW_REVIEWS:
      const normalizedReviews = {};
      action.reviews.forEach((review) => {
        normalizedReviews[review.id] = review;
      });
      return { ...normalizedReviews };
    case ADD_REVIEW:
      console.log("ACTION NEWREVIEW", action.newReview);
      const addState = { ...state, [action?.newReview?.id]: action?.newReview };
      return addState;
    case DEL_REVIEW:
      const deleteState = { ...state };
      delete deleteState[action.review];
      return deleteState;
    default:
      return state;
  }
};

export default reviewsReducer;
