import ButtonIcon from '../ButtonIcon/ButtonIcon.styled';
import { ReactComponent as SearchIcon } from 'icons/search.svg';

function HeaderSearch() {
  return (
    <div className="inputWrapper">
      <input type="text" name="search" placeholder="Search" id="searchInput" />
      <ButtonIcon className="searchButton">
        <SearchIcon width="20px" height="20px" />
      </ButtonIcon>
    </div>
  );
}

export default HeaderSearch;
