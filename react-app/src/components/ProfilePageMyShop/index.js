import "./ProfilePageMyShop.css";
import { useSelector } from "react-redux";

function ProfilePageMyShop() {
  const currentUser = useSelector((state) => state.session.user);
  const allProducts = useSelector((state) => Object.values(state.products));
  const myProducts = allProducts.filter(
    (product) => product.user_id === +currentUser.id
  );

  console.log("ALL PRODCUTS", allProducts);
  console.log("MY PRODCUTS", myProducts);
  console.log("CURRENT USER ID", currentUser.id);

  return (
    <div>
      <div className="profile-page-header">
        <h1 className="text">
          <i class="fa-solid fa-shop"></i> {currentUser.first_name}'s Product
          Listings
        </h1>
      </div>
      <div className="profile-page-myshop-body-cntr">
        { myProducts.length > 0 ? myProducts.map((product) => (
          <div id="profile-page-shop-figure-product">
            <a id="a-tag-img-profile-product" href={`/product/${product.id}`}>
              <img
                id="profile-page-shop-img-product"
                src={product.image_url_1}
              />
            </a>
            <div id="profile-page-product-listings-details">
              <div className="text">{product.product_name}</div>
              <div className="text">${product.price} USD</div>
            </div>
          </div>
        )) : <div>You have no product listings.</div>}
      </div>
    </div>
  );
}

export default ProfilePageMyShop;
