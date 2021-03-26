import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Switch,
  IconButton,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import DrawerComp from './DrawerComp';

import StoreContext from '../store/storeContext';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '@media print': {
      display: 'none',
    },
  },
  menuButton: {
    // marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logoLink: {
    color: 'inherit',
    textDecoration: 'none',
  },
}));

const Navbar = (props) => {
  const classes = useStyles();

  const { darkMode, toggleDarkMode } = useContext(StoreContext);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = () => setMobileOpen(!mobileOpen);
  const closeDrawer = () => setMobileOpen(false);

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h4' noWrap className={classes.title}>
            <NavLink to='/' className={classes.logoLink}>
              r
            </NavLink>
          </Typography>
          <Switch
            checked={darkMode}
            color='default'
            onChange={toggleDarkMode}
          />
          <IconButton
            color='inherit'
            onClick={toggleDrawer}
            className={classes.menuButton}
          >
            <MenuIcon fontSize='large' />
          </IconButton>
        </Toolbar>
        <DrawerComp
          mobileOpen={mobileOpen}
          toggleDrawer={toggleDrawer}
          closeDrawer={closeDrawer}
        />
      </AppBar>
    </div>
  );
};
export default Navbar;
