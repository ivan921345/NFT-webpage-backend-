import { useState } from 'react';
import './Header.scss';
import HeaderNav from './HeaderNav';
import HeaderSearch from './HeaderSearch';
import Modal from '../Modal/Modal';

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  const handleModalKeyDown = e => {
    if (e.key === 'Escape') {
      toggleModal();
    }
  };

  const onModalFormSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <header className="headerContainer">
      <HeaderNav />
      <div className="headerContainer__search-upload-wallet">
        <HeaderSearch />
        <button type="button" className="uploadButton">
          Upload
        </button>
        <button type="button" className="connctButton" onClick={toggleModal}>
          Connect Wallet
        </button>
      </div>
      {isModalOpen && (
        <Modal
          onClose={toggleModal}
          onSubmit={onModalFormSubmit}
          onKeyDown={handleModalKeyDown}
        />
      )}
    </header>
  );
}

export default Header;
