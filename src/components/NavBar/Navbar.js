import { HashLink } from 'react-router-hash-link';
import logo from '../../assets/icons8-logo-48.png';
import TemporaryDrawer from '../Drawer/TemporaryDrawer';
import { List, ListItem } from '@mui/material';
import './Navbar.css';
import { useMediaQuery } from '@mui/material';

function Navbar() {
  const isMobile = useMediaQuery('(max-width:850px)'); // Check if viewport is <= 850px

  const drawerContent = (
    <List>
      <ListItem>
        <HashLink smooth to="/#home" className={'drawer-link'}>
          Home
        </HashLink>
      </ListItem>
      <ListItem>
        <HashLink smooth to="/#about-me" className={'drawer-link'}>
          About
        </HashLink>
      </ListItem>
      <ListItem>
        <HashLink smooth to="/#contact" className={'drawer-link'}>
          Contact
        </HashLink>
      </ListItem>
    </List>
  );

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <HashLink smooth to="/#home">
          <img src={logo} alt="Website Logo" className="logo-image" />
        </HashLink>
      </div>
      {isMobile ? (
        <TemporaryDrawer
          content={drawerContent}
          buttonLabel="Menu"
          buttonClassName="drawer-button"
        />
      ) : (
        <ul className="navbar-links">
          <li>
            <HashLink smooth to="/#home" className={'navbar-link'}>
              Home
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#about-me" className={'navbar-link'}>
              About
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#contact" className={'navbar-link'}>
              Contact
            </HashLink>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
