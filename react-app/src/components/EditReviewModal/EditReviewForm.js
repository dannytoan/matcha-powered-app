import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { viewReviews, updateReview } from "../../store/reviews";

function EditReviewForm({ review, setShowModal }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [errors, setErrors] = useState([]);
  const [title, setTitle] = useState(review.title);
  const [rating, setRating] = useState(review.rating);
  const [content, setContent] = useState(review.content);
  const [recommend, setRecommend] = useState(review.recommend);
  // const [showModal, setShowModal] = useState(false)

  const { id } = useParams();
  const sessionUser = useSelector((state) => state.session.user);

  console.log("CONTENT", review.content);

  useEffect(() => {
    const errors = [];

    setErrors(errors);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      id: review.id,
      product_id: id,
      user_id: sessionUser.id,
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
    <div>
      <div id="styles-header-container">
        <div id="new-arrivals-text-all-products" className="text">
          Share the knowledge
        </div>
        <h2 id="all-products-title" className="text">
          Review
        </h2>
      </div>
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

      <form onSubmit={handleSubmit}>
        <label className="create-product-labels">Title* (Required)</label>
        <input
          name="title"
          className="create-review-input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={"Insert title name here..."}
          required
        />
        <label className="create-product-labels">Rating* (Required)</label>
        <input
          name="rating"
          className="create-review-input"
          type="integer"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          placeholder={"Insert title name here..."}
          required
        />
        <label className="create-product-labels">
          Recommend to a Friend?* (Required)
        </label>
        <select
          name="recommend"
          className="create-review-input"
          type="boolean"
          value={recommend}
          onChange={(e) => setRecommend(e.target.value)}
          required
        >
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <label className="create-product-labels">Content* (Required)</label>
        <textArea
          name="content"
          className="create-review-input"
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder={review.content}
          required
        />
        <button className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default EditReviewForm;
