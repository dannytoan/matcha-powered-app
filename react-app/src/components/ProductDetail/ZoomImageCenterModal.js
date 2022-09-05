import React, { useState } from 'react';
import { ZoomCenterImageModal } from '../../context/Modal';
import "./ZoomImageModal.css"

function ZoomCenterProductImgModal({imgUrl}) {
  const [showModal, setShowModal] = useState(false);
  const replaceInvalidImg = (e) => {
    e.currentTarget.src =
      "https://res.cloudinary.com/matchaprince/image/upload/v1657785064/centered_invalid_jy2yxm.png";
  };

  return (
    <>
<img onClick={() => setShowModal(true)} className="center-product-detail-pic" src={imgUrl} onError={replaceInvalidImg}/>
      {showModal && (
        <ZoomCenterImageModal onClose={() => setShowModal(false)}>
           <img onClick={()=> setShowModal(false)} className="image-modal-show" src={imgUrl} alt={"image"} onError={replaceInvalidImg}></img>
        </ZoomCenterImageModal>
      )}
    </>
  );
}

export default ZoomCenterProductImgModal;
