import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { addReview } from "../../store/reviews";
import "./NewReviewModal.css"


function NewReviewForm({setShowModal}) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [errors, setErrors] = useState([]);
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(1);
  const [content, setContent] = useState("");
  const [recommend, setRecommend] = useState(true);

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
      user_id: sessionUser.id,
      product_id: id,
      reviewer_name: sessionUser.first_name,
      rating,
      title,
      content,
      recommend,
    };

    let newReview = await dispatch(addReview(payload));

    if (newReview) {
      setErrors([]);
      window.location.reload(false);
      setShowModal(false)
    }
  };

  return (
    <div id="new-review-modal-body">
      <div id="new-product-form-body-container">
        <div id="styles-header-container">
          <div id="new-arrivals-text-all-products" className="text">
            Write a Review
          </div>
          <h2 id="all-products-title" className="text">
            Share the experience
          </h2>
        </div>

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
            className="create-product-input text option-text"
            type="boolean"
            value={recommend}
            onChange={(e) => setRecommend(e.target.value)}
            required
          >
            <option className="text option-text" value={true}>Yes</option>
            <option className="text option-text" value={false}>No</option>
          </select>
          <label className="create-product-labels desc-label">Content* (Required)</label>
          <textArea
            name="content"
            className="create-product-input text"
            id="edit-review-textarea"
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder={"Insert review here..."}
            required
          />
          <button className="submit-btn" disabled={errors.length > 0} onClick={() => window.location.reload(false)}>Submit</button>

        </form>
          {errors.length > 0 ? (
          <div id="create-product-errors-container">
            <div className="create-product-errors-div">
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
      </div>
    </div>
  );
}

export default NewReviewForm;
