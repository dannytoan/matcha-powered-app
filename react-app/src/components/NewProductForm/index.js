import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addProduct } from "../../store/products";
import { previewSetter } from "../../utils/imagePreview";
import "./NewProductForm.css";

function NewProductForm() {
  const dispatch = useDispatch();
  const history = useHistory();

  const sessionUser = useSelector((state) => state.session.user);

  const [product_name, setProductName] = useState("");
  const [price, setPrice] = useState(0);
  const [inventory, setInventory] = useState(0);
  const [category_id, setCategoryId] = useState(1);
  const [description, setDescription] = useState("");
  const [imageLoading, setImageLoading] = useState(false);

  const [errors, setErrors] = useState([]);

  const [imgs, setImgs] = useState(new Object());
  const imgArr = Object.values(imgs);


  // image preview -START-


  // image preview -END-

  useEffect(() => {
    const errors = [];
    // const imgUrlValidator = /(https?:\/\/.*\.(?:png|jpg|jpeg))/i;

    if (product_name.length > 50) {
      errors.push("Product name must be less than 50 characters");
    } else if (product_name.length <= 0) {
      errors.push("Please provide a Product Name");
    } else if (!product_name.replace(/\s/g, "").length) {
      errors.push("Product name must not be empty");
    }

    if (price <= 0) {
      errors.push("Price must be greater than 0");
    } else if (price > 10000) {
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


    let createdProduct = await dispatch(addProduct(formData));
    setImageLoading(true);

    if (createdProduct) {
      setImageLoading(false);
      setErrors([]);
      return history.push("/products/all");
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
          <label className="create-product-labels">
            Product Name* (Required)
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
              <label className="create-product-labels">Price* (Required)</label>
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
              <label className="create-product-labels ">
                Inventory* (Required)
              </label>
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
            Category* (Required)
          </label>
          <select
            name="category_id"
            className="create-product-input"
            type="integer"
            value={category_id}
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
            Description* (Required)
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

          <div>
            {imgs && Object.values(previewSetter(imgArr)).map((img, i) => (
              <img src={img} key={i}/>
            ))}
          </div>


          <div className="aws-add-img-box">

          <label className="create-product-labels">Image* (Required)

          </label>
          <input
            className="aws-img-1"
            type="file"
            accept="image/*"
            required
            onChange={(e) => updateImage(e, "image_url_1")}
            />

          <div
            id="add-extra-image-btn"
            onClick={(e) => hideAddImgBtn()}
            className={hideImg ? "unhide-aws" : "hide-aws"}
            >
            <i class="fa-solid fa-file-circle-plus"></i> Add Image
          </div>
            </div>

          <div id="aws-add-img-box" className={hideImg ? "hide-aws" : "unhide-aws"}>
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
            id="add-extra-image-btn"
            onClick={(e) => hideAddImgBtn2()}
            className={hideImg2 ? "unhide-aws" : "hide-aws"}
          >
            <i class="fa-solid fa-file-circle-plus"></i> Add Image
          </div>
          </div>

          <div id="aws-add-img-box" className={hideImg2 ? "hide-aws" : "unhide-aws"}>
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
            id="add-extra-image-btn"
            onClick={(e) => hideAddImgBtn3()}
            className={hideImg3 ? "unhide-aws" : "hide-aws"}
          >
            <i class="fa-solid fa-file-circle-plus"></i> Add Image
          </div>
          </div>


          <div id="aws-add-img-box" className={hideImg3 ? "hide-aws" : "unhide-aws"}>

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
            id="add-extra-image-btn"
            onClick={(e) => hideAddImgBtn4()}
            className={hideImg4 ? "unhide-aws" : "hide-aws"}
          >
            <i class="fa-solid fa-file-circle-plus"></i> Add Image
          </div>
            </div>


          <div id="aws-add-img-box"className={hideImg4 ? "hide-aws" : "unhide-aws"}>

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
            className={hideImg5 ? "unhide-aws" : "hide-aws"}
          >
            <i class="fa-solid fa-file-circle-plus"></i> Add Image
          </div>
            </div>

          <div id="aws-add-img-box" className={hideImg5 ? "hide-aws" : "unhide-aws"}>

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
          <button disabled={errors.length > 0} className="submit-btn">
            Submit
          </button>
          {imageLoading && <p>Loading...</p>}
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

export default NewProductForm;
