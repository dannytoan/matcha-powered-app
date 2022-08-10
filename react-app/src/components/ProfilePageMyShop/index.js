import "./ProfilePageMyShop.css";
import { useSelector } from "react-redux";
import ProfileSideBar from "../ProfileSidebar";

function ProfilePageMyShop() {
  const currentUser = useSelector((state) => state.session.user);
  const allProducts = useSelector((state) => Object.values(state.products));
  const myProducts = allProducts.filter(
    (product) => product.user_id === +currentUser.id
  );

  return (
    <div id="profile-page-ctnr">
      <ProfileSideBar />
      <div id="profile-shop-page-inner-cntr">
        <div className="profile-page-header">
          <h1 className="text">
            <i class="fa-solid fa-shop"></i> {currentUser.first_name}'s Product
            Listings
          </h1>
        </div>
        <div id="profile-page-myshop-outer-container">
          <div className="profile-page-myshop-body-cntr">
            {myProducts.length > 0 ? (
              myProducts.map((product) => (
                <div id="profile-page-shop-figure-product">
                  <a
                    id="a-tag-img-profile-product"
                    href={`/product/${product.id}`}
                  >
                    <img
                      id="profile-page-shop-img-product"
                      src={product.image_url_1}
                    />
                  </a>
                  <a
                    id="profile-page-product-listings-details"
                    href={`/product/${product.id}`}
                  >
                    {/* <div id="profile-product-details-ctnr"> */}
                      {/* <div className="text profile-product-name-title">
                        Inventory: {product.inventory}
                      </div> */}
                      <div className="text profile-product-name-title">
                        {product.product_name}
                      </div>
                    {/* </div> */}
                    <div className="text item-price-mini">
                      ${product.price} USD
                    </div>
                  </a>
                </div>
              ))
            ) : (
              <div>You have no product listings.</div>
            )}
          </div>

        </div>
      </div>
</div>
)};


export default ProfilePageMyShop;
