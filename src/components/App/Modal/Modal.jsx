import React, { useEffect } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { Formik, Form, Field } from 'formik';
import './Modal.scss';
const Modal = ({ onClose, onKeyDown, onSubmit }) => {
  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose]);
  return (
    <div className="Modal">
      <Formik
        initialValues={{ cardUserName: '', cvv: '', cardNumber: '' }}
        onSubmit={onSubmit}
      >
        <Form>
          <Field
            type="text"
            name="cardUserName"
            placeholder="Enter card user name"
          />
          <Field type="text" name="cardNumber" placeholder="Card number" />
          <Field type="text" name="cvv" placeholder="CVV" />
          <button type="submit" className="submitButton">
            Submit
          </button>
          <button type="button" className="closeCross" onClick={onClose}>
            <IoCloseSharp />
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Modal;
