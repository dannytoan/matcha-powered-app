import "./SplashMiniShop.css";

function SplashMiniShop({ shopOneItems }) {
  return (
    <div id="shop-container">
      <div id="bottom-first-shop-text">
        <div id="btm-header-text-holder">
          <span className="text first-text-shop">Womens</span>
          <h2 className="text secondary-text-shop">New Releases</h2>
        </div>
        <a className="text view-all-text-shop" href="/products/all">
          View All
        </a>
      </div>

      <div id="outer-shop-items-ctnr">
        {shopOneItems.map((item) => (
            <a id="a-tag-link-shop-ctnr" href={`/product/${item.id}`}>

          <div id="item-shop-ctnr">
            <div id="figure">
              <img id="figure-img" src={item.image_url_1} />
              <div id="item-text-details-mini">

              <div className="text item-product-name">{item.product_name}</div>
              <div className="text item-price-mini">$ {item.price} USD</div>
              </div>
            </div>
          </div>
            </a>
        ))}
      </div>
    </div>
  );
}

export default SplashMiniShop;
