import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addProduct } from "../../store/products";
import "./NewProductForm.css";

function NewProductForm() {
  const dispatch = useDispatch();
  const history = useHistory();

  const sessionUser = useSelector((state) => state.session.user);

  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(0);
  const [inventory, setInventory] = useState(0);
  const [categoryId, setCategoryId] = useState(1);
  const [description, setDescription] = useState("");
  const [imageUrl1, setImageUrl1] = useState("");
  const [imageUrl2, setImageUrl2] = useState("");
  const [imageUrl3, setImageUrl3] = useState("");
  const [imageUrl4, setImageUrl4] = useState("");
  const [imageUrl5, setImageUrl5] = useState("");
  const [imageUrl6, setImageUrl6] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      user_id: sessionUser.id,
      productName,
      price,
      inventory,
      categoryId,
      description,
      imageUrl1,
      imageUrl2,
      imageUrl3,
      imageUrl4,
      imageUrl5,
      imageUrl6,
    };

    let createdProduct = await dispatch(addProduct(payload));

    if (createdProduct) {
      return history.push("/bills");
    }
  };

  return (
    <div>
      <div id="new-product-form-body-container">
        <div id="styles-header-container">
          <div id="new-arrivals-text-all-products" className="text">
            Share the power
          </div>
          <h2 id="all-products-title" className="text">
          Create a New Product Listing
          </h2>
        </div>
        <form id="new-product-form" onSubmit={handleSubmit}>
          <label className="create-product-labels">Product Name</label>
          <input
            name="product_name"
            className="create-product-input"
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder={"Insert product name here..."}
            required
          />
          <div id="price-and-inv-ctnr">
            <div className="price-and-inv">
              <label className="create-product-labels">Price</label>
              <input
                name="price"
                className="create-product-input price-and-inv-input"
                id="price-input"
                type="float"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder={"Insert price here..."}
                required
              />
            </div>
            <div className="price-and-inv inv-input">
              <label className="create-product-labels ">Inventory</label>
              <input
                name="inventory"
                className="create-product-input price-and-inv-input"
                type="integer"
                value={inventory}
                onChange={(e) => setInventory(e.target.value)}
                placeholder={"Insert inventory here..."}
                required
              />
            </div>
          </div>
          <label className="create-product-labels category-label">
            Category
          </label>
          <select
            name="category_id"
            className="create-product-input"
            type="integer"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            required
          >
            <option>Womens</option>
          </select>
          <label className="create-product-labels desc-label">
            Description
          </label>
          <textarea
            name="description"
            className="create-product-input text"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder={"Insert description here..."}
            required
          />
          <label className="create-product-labels">Image URL 1</label>
          <input
            name="image_url_1"
            className="create-product-input"
            type="text"
            value={imageUrl1}
            onChange={(e) => setImageUrl1(e.target.value)}
            placeholder={"Insert image URL here..."}
            required
          />
          <label className="create-product-labels">Image URL 2</label>
          <input
            name="image_url_2"
            className="create-product-input"
            type="text"
            value={imageUrl2}
            onChange={(e) => setImageUrl2(e.target.value)}
            placeholder={"Insert image URL here..."}
            required
          />
          <label className="create-product-labels">Image URL 3</label>
          <input
            name="image_url_3"
            className="create-product-input"
            type="text"
            value={imageUrl3}
            onChange={(e) => setImageUrl3(e.target.value)}
            placeholder={"Insert image URL here..."}
            required
          />
          <label className="create-product-labels">Image URL 4</label>
          <input
            name="image_url_4"
            className="create-product-input"
            type="text"
            value={imageUrl4}
            onChange={(e) => setImageUrl4(e.target.value)}
            placeholder={"Insert image URL here..."}
            required
          />
          <label className="create-product-labels">Image URL 5</label>
          <input
            name="image_url_5"
            className="create-product-input"
            type="text"
            value={imageUrl5}
            onChange={(e) => setImageUrl5(e.target.value)}
            placeholder={"Insert image URL here..."}
            required
          />
          <label className="create-product-labels">Image URL 6</label>
          <input
            name="image_url_6"
            className="create-product-input"
            type="text"
            value={imageUrl6}
            onChange={(e) => setImageUrl6(e.target.value)}
            placeholder={"Insert image URL here..."}
            required
          />
          <button className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default NewProductForm;
