import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import PaymentForm from './PaymentForm';

function PaymentFormModal({handleOrderItems}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="general-btn" onClick={() => setShowModal(true)}>Checkout</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <PaymentForm setShowModal={setShowModal} handleOrderItems={handleOrderItems}/>
        </Modal>
      )}
    </>
  );
}

export default PaymentFormModal;
