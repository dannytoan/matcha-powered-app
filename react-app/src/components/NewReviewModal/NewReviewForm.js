import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { addReview } from "../../store/reviews";

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

    setErrors(errors);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      user_id: sessionUser.id,
      product_id: id,
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
    <div>
      <div id="new-review-form-body-container">
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
            placeholder={"Insert review here..."}
            required
          />
          <button className="submit-btn" onClick={() => window.location.reload(false)}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default NewReviewForm;
