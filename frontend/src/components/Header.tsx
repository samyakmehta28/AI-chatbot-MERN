import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Logo from './shared/Logo';
import { Outlet } from 'react-router-dom';
import NavLinks from './shared/NavLinks';

const Header = () => {
  return (
    <>
      <AppBar sx={{ position: 'static', boxShadow: 'none' }}>
        <Toolbar sx={{ display: 'flex' }}>
          <Logo />
          <NavLinks />
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};
export default Header;
