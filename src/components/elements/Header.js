import {Link} from 'react-router-dom';
import TMDBLogo from '../images/tmdb_logo.svg';
import {
  StyledHeader,
  StyledRMDBFave,
  StyledRMDBLogo,
} from '../styles/StyledHeader';

const Header = () => (
  <StyledHeader>
    <div className='header-content'>
      <Link to='/'>
        <StyledRMDBLogo src={TMDBLogo} alt='rmdb-logo' />
      </Link>
      <Link to='/favourites'>
        <StyledRMDBFave>My Favourites</StyledRMDBFave>
      </Link>
    </div>
  </StyledHeader>
);

export default Header;
