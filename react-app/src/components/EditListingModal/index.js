import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditProductForm from './EditListingForm';

function EditProductModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Edit Listing</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditProductForm setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default EditProductModal;
