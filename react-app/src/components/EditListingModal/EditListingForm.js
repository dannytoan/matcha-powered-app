import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { updateProduct, viewProducts } from "../../store/products";
import { ValidationError } from "../../utils/validationError";
import "./EditListing.css";

function EditProductForm({ setShowModal }) {
  const dispatch = useDispatch();
  const { id } = useParams();

  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(viewProducts());
  }, [dispatch]);

  const products = useSelector((state) => {
    return Object.values(state.products);
  });

  const currentProductFiltered = products.filter(
    (current) => current.id === +id
  );
  const currentProduct = currentProductFiltered[0];
  const currentProductId = currentProduct?.id;

  const [product_name, setProductName] = useState(currentProduct.product_name);
  const [price, setPrice] = useState(currentProduct.price);
  const [inventory, setInventory] = useState(currentProduct.inventory);
  const [category_id, setCategoryId] = useState(1);
  const [description, setDescription] = useState(currentProduct.description);
  // const [image_url_1, setImageUrl1] = useState(currentProduct.image_url_1);
  // const [image_url_2, setImageUrl2] = useState(currentProduct.image_url_2);
  // const [image_url_3, setImageUrl3] = useState(currentProduct.image_url_3);
  // const [image_url_4, setImageUrl4] = useState(currentProduct.image_url_4);
  // const [image_url_5, setImageUrl5] = useState(currentProduct.image_url_5);
  // const [image_url_6, setImageUrl6] = useState(currentProduct.image_url_6);

  const [imgs, setImgs] = useState(new Object());
  const imgArr = Object.values(imgs);

  const [errors, setErrors] = useState([]);
  console.log("CURRENT PRODUCT", currentProduct.category_id);

  useEffect(() => {
    const errors = [];
    if (product_name.length > 50) {
      errors.push("Label must be less than 50 characters");
    } else if (product_name.length <= 0) {
      errors.push("Please provide a Product Name");
    } else if (!product_name.replace(/\s/g, "").length) {
      errors.push("Product name must not be empty");
    }

    if (price <= 0) {
      errors.push("Price must be greater than 0");
    } else if (price >= 10000) {
      errors.push("Price may not exceed over $10,0000");
    }

    if (inventory <= 0) {
      errors.push("Inventory must be 1 or more");
    } else if (inventory >= 10000) {
      errors.push("Inventory may not exceed 10,000 units");
    }

    if (description.length === 0) {
      errors.push("Please provide a description");
    } else if (description.length > 2000) {
      errors.push("Description length must not exceed 2000 characters");
    }
    if (!description.replace(/\s/g, "").length) {
      errors.push("Description must not be empty");
    }

    // if (image_url_1.length === 0) {
    //   errors.push("Please provide at least one image");
    // }

    setErrors(errors);
  }, [product_name, price, inventory, description]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image_url_1", imgArr[0]);
    formData.append("image_url_2", imgArr[1]);
    formData.append("image_url_3", imgArr[2]);
    formData.append("image_url_4", imgArr[3]);
    formData.append("image_url_5", imgArr[4]);
    formData.append("image_url_6", imgArr[5]);
    formData.append("user_id", sessionUser.id);
    formData.append("inventory", inventory);
    formData.append("product_name", product_name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("category_id", category_id);

    let updatedProduct;

    try {
      updatedProduct = await dispatch(
        updateProduct(formData, currentProductId)
      );
    } catch (error) {
      if (error instanceof ValidationError) setErrors(errors.error);
      else setErrors(error.toString().slice(7));
    }

    if (updatedProduct) {
      setErrors([]);
      setShowModal(false);
    }
  };

  const updateImage = (e, i) => {
    const file = e.target.files[0];
    imgs[i.toString()] = file;
    setImgs({ ...imgs });
  };

  const [hideImg, setHideImg] = useState(true);
  const [hideImg2, setHideImg2] = useState(true);
  const [hideImg3, setHideImg3] = useState(true);
  const [hideImg4, setHideImg4] = useState(true);
  const [hideImg5, setHideImg5] = useState(true);

  const hideAddImgBtn = () => {
    if (hideImg) {
      setHideImg(false);
    } else {
      setHideImg(true);
    }
  };

  const hideAddImgBtn2 = () => {
    if (hideImg2) {
      setHideImg2(false);
    } else {
      setHideImg2(true);
    }
  };

  const hideAddImgBtn3 = () => {
    if (hideImg3) {
      setHideImg3(false);
    } else {
      setHideImg3(true);
    }
  };

  const hideAddImgBtn4 = () => {
    if (hideImg4) {
      setHideImg4(false);
    } else {
      setHideImg4(true);
    }
  };

  const hideAddImgBtn5 = () => {
    if (hideImg5) {
      setHideImg5(false);
    } else {
      setHideImg5(true);
    }
  };

  return (
    <div>
      <div id="edit-product-form-body-container">
        <div id="styles-header-container">
          <div id="edit-product-text-top" className="text">
            Edit Product Listing for
          </div>
          <h2 id="edit-listing-title" className="text">
            {currentProduct.product_name}
          </h2>
        </div>
        {errors?.length > 0 ? (
          <div id="edit-product-errors-container">
            <div className="edit-product-errors-div">
              <ul className="create-product-errors-ul">
                {errors?.map((error, idx) => (
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
        <div id="edit-product-form-cntr">
          <form id="edit-product-form" onSubmit={handleSubmit}>
            <label className="create-product-labels">
              Product Name (Required*)
            </label>
            <input
              name="product_name"
              className="create-product-input"
              type="text"
              value={product_name}
              onChange={(e) => setProductName(e.target.value)}
              placeholder={"Insert product name here..."}
              required
            />
            <div id="price-and-inv-ctnr">
              <div className="price-and-inv">
                <label className="create-product-labels">Price*</label>
                <input
                  name="price"
                  className="create-product-input price-and-inv-input"
                  id="price-input"
                  type="number"
                  min="0.01"
                  max="999999.99"
                  step="0.01"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder={"Insert price here..."}
                  required
                />
              </div>
              <div className="price-and-inv inv-input">
                <label className="create-product-labels ">Inventory*</label>
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
              Category*
            </label>
            <select
              name="category_id"
              className="create-product-input"
              type="integer"
              value={currentProduct.category_id}
              onChange={(e) => setCategoryId(e.target.value)}
              required
            >
              <option value={1}>Womens</option>
              <option value={2}>Mens</option>
              <option value={3}>Accessories</option>
              <option value={4}>Supplements</option>
              <option value={5}>Equipment</option>
            </select>
            <label className="create-product-labels desc-label">
              Description*
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

            <div id="display-current-images-edit-listing">
              <span className="text current-images-header-edit">Current Images:</span>
              <div id="edit-listing-preview-imgs">

              <img src={currentProduct.image_url_1} className="edit-listing-image-preview"/>
              {currentProduct.image_url_2 && (
                <img src={currentProduct.image_url_2} className="edit-listing-image-preview"/>
                )}
              {currentProduct.image_url_3 && (
                <img src={currentProduct.image_url_3} className="edit-listing-image-preview"/>
                )}
              <br/>
              {currentProduct.image_url_4 && (
                <img src={currentProduct.image_url_4} className="edit-listing-image-preview"/>
                )}
              {currentProduct.image_url_5 && (
                <img src={currentProduct.image_url_5} className="edit-listing-image-preview"/>
                )}
              {currentProduct.image_url_6 && (
                <img src={currentProduct.image_url_6} className="edit-listing-image-preview"/>
                )}
                </div>
            </div>

            <div className="aws-add-img-box">
              <label className="create-product-labels">Image* (Required)</label>
              <input
                className="aws-img-1"
                type="file"
                accept="image/*"
                placeholder={currentProduct.image_url_1}
                onChange={(e) => updateImage(e, "image_url_1")}
              />

              <div
                className={
                  currentProduct.image_url_2 ? "hide-aws" : "unhide-aws"
                }
              >
                <div
                  id="add-extra-image-btn"
                  onClick={(e) => hideAddImgBtn()}
                  className={hideImg ? "unhide-aws" : "hide-aws"}
                >
                  <i class="fa-solid fa-file-circle-plus"></i> Add Image
                </div>
              </div>
            </div>

            <div
              id="aws-add-img-box"
              className={currentProduct.image_url_2 ? "unhide-aws" : "hide-aws"}
            >
              <label className="create-product-labels">
                Image 2 (Optional)
              </label>
              <input
                className="aws-img-1"
                type="file"
                accept="image/*"
                onChange={(e) => updateImage(e, "image_url_2")}
              />

              <div
                className={
                  currentProduct.image_url_3 ? "hide-aws" : "unhide-aws"
                }
              >
                <div
                  id="add-extra-image-btn"
                  onClick={(e) => hideAddImgBtn2()}
                  className={hideImg2 ? "unhide-aws" : "hide-aws"}
                >
                  <i class="fa-solid fa-file-circle-plus"></i> Add Image
                </div>
              </div>
            </div>

            <div
              id="aws-add-img-box"
              className={currentProduct.image_url_3 ? "unhide-aws" : "hide-aws"}
            >
              <label className="create-product-labels">
                Image 3 (Optional)
              </label>
              <input
                className="aws-img-1"
                type="file"
                accept="image/*"
                onChange={(e) => updateImage(e, "image_url_3")}
              />
              <div
                className={
                  currentProduct.image_url_4 ? "hide-aws" : "unhide-aws"
                }
              >
                <div
                  id="add-extra-image-btn"
                  onClick={(e) => hideAddImgBtn3()}
                  className={hideImg3 ? "unhide-aws" : "hide-aws"}
                >
                  <i class="fa-solid fa-file-circle-plus"></i> Add Image
                </div>
              </div>
            </div>

            <div
              id="aws-add-img-box"
              className={currentProduct.image_url_4 ? "unhide-aws" : "hide-aws"}
            >
              <label className="create-product-labels">
                Image 4 (Optional)
              </label>
              <input
                className="aws-img-1"
                type="file"
                accept="image/*"
                onChange={(e) => updateImage(e, "image_url_4")}
              />

              <div
                className={
                  currentProduct.image_url_5 ? "hide-aws" : "unhide-aws"
                }
              >
                <div
                  id="add-extra-image-btn"
                  onClick={(e) => hideAddImgBtn4()}
                  className={hideImg4 ? "unhide-aws" : "hide-aws"}
                >
                  <i class="fa-solid fa-file-circle-plus"></i> Add Image
                </div>
              </div>
            </div>

            <div
              id="aws-add-img-box"
              className={currentProduct.image_url_5 ? "unhide-aws" : "hide-aws"}
            >
              <label className="create-product-labels">
                Image 5 (Optional)
              </label>
              <input
                className="aws-img-1"
                type="file"
                accept="image/*"
                onChange={(e) => updateImage(e, "image_url_5")}
              />
              <div
                id="add-extra-image-btn"
                onClick={(e) => hideAddImgBtn5()}
                className={
                  currentProduct.image_url_6 ? "hide-aws" : "unhide-aws"
                }
              >
                <i class="fa-solid fa-file-circle-plus"></i> Add Image
              </div>
            </div>

            <div
              id="aws-add-img-box"
              className={currentProduct.image_url_6 ? "unhide-aws" : "hide-aws"}
            >
              <label className="create-product-labels">
                Image 6 (Optional)
              </label>
              <input
                className="aws-img-1"
                type="file"
                accept="image/*"
                onChange={(e) => updateImage(e, "image_url_6")}
              />
            </div>
            <button className="edit-submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProductForm;
