import React, { useState } from 'react';
import { ZoomImageModal } from '../../context/Modal';
import "./ZoomImageModal.css"

function ZoomProductImgModal({imgUrl}) {
  const [showModal, setShowModal] = useState(false);
  const replaceInvalidImg = (e) => {
    e.currentTarget.src =
      "https://res.cloudinary.com/matchaprince/image/upload/v1657785064/centered_invalid_jy2yxm.png";
  };

  return (
    <>
<img onClick={() => setShowModal(true)} className={imgUrl === "currentProduct?.image_url_1" ? "center-product-detail-pic" : "image-modal-thumb"} src={imgUrl} onError={replaceInvalidImg}/>
      {showModal && (
        <ZoomImageModal onClose={() => setShowModal(false)}>
           <img onClick={()=> setShowModal(false)} className="image-modal-show" src={imgUrl} alt={"image"} onError={replaceInvalidImg}></img>
        </ZoomImageModal>
      )}
    </>
  );
}

export default ZoomProductImgModal;
