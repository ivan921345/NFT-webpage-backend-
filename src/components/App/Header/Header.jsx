import './Header.scss';
import HeaderNav from './HeaderNav';
import HeaderSearch from './HeaderSearch';

function Header() {
  return (
    <header className="headerContainer">
      <HeaderNav />
      <div className="headerContainer__search-upload-wallet">
        <HeaderSearch />
        <button type="button" className="uploadButton">
          Upload
        </button>
        <button type="button" className="connctButton">
          Connect Wallet
        </button>
      </div>
    </header>
  );
}

export default Header;
