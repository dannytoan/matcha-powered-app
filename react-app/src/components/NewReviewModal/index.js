import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import NewReviewForm from './NewReviewForm';

function NewReviewFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Create a Review</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <NewReviewForm setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default NewReviewFormModal;
