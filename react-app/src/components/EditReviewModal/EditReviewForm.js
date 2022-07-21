import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { updateReview } from "../../store/reviews";
import "./EditReviewForm.css"

function EditReviewForm({ review, setShowModal }) {
  const dispatch = useDispatch();

  const [errors, setErrors] = useState([]);
  const [title, setTitle] = useState(review.title);
  const [rating, setRating] = useState(review.rating);
  console.log("CONTENT", review.content);
  const [content, setContent] = useState(review.content);
  const [recommend, setRecommend] = useState(review.recommend);
  // const [showModal, setShowModal] = useState(false)

  const { id } = useParams();
  const sessionUser = useSelector((state) => state.session.user);


  useEffect(() => {
    const errors = [];

    if (title.length === 0) {
        errors.push("Please provide a title")
    } else if (title.length > 50) {
      errors.push("Title must not exceed 50 characters")
    }

    if (content.length === 0) {
        errors.push("Please provide a review")
    } else if (content.length > 500) {
        errors.push("Review must not exceed over 500 characters")
    }

    setErrors(errors);
  }, [title, rating, content]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      id: review.id,
      product_id: id,
      user_id: sessionUser.id,
      reviewer_name: sessionUser.first_name,
      title,
      rating,
      content,
      recommend,
    };

    let editedReview = await dispatch(updateReview(payload, review?.id));

    if (editedReview) {
      setErrors([]);
      setShowModal(false);
      window.location.reload(false);
    }
  };

  return (
    <div id="new-review-modal-body">
      <div id="styles-header-container">
        <div id="new-arrivals-text-all-products" className="text">
          Changed your mind?
        </div>
        <h2 id="all-products-title" className="text">
          Edit Your Review
        </h2>
      </div>
      {errors.length > 0 ? (
        <div id="edit-review-errors-container">
          <div className="edit-review-errors-div">
            <ul className="create-product-errors-ul">
              {errors.map((error, idx) => (
                <li className="create-product-errors-li" key={idx}>
                  {error}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <></>
      )}

      <form id="new-review-form" onSubmit={handleSubmit}>
        <label className="create-product-labels">Title* (Required)</label>
        <input
          name="title"
          className="create-product-input text"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={"Insert title name here..."}
          required
        />
        <label className="create-product-labels">Rating* (Required)</label>
        <select
            name="rating"
            className="create-product-input text"
            type="integer"
            value={rating}
            step="1"
            min="1"
            max="5"
            onChange={(e) => setRating(e.target.value)}
            placeholder={"Insert title name here..."}
            required
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            </select>
        <label className="create-product-labels" id="recommend-label-review">
          Recommend to a Friend?* (Required)
        </label>
        <select
          name="recommend"
          className="create-product-input text"
          type="boolean"
          value={recommend}
          onChange={(e) => setRecommend(e.target.value)}
          required
        >
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <label className="create-product-labels desc-label">Content* (Required)</label>
        <textarea
          name="content"
          className="create-product-input text"
          id="edit-review-textarea"
          type="textarea"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default EditReviewForm;
