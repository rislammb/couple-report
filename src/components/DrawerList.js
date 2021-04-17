import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { Home, Assignment, Mail, AccountCircle } from '@material-ui/icons';

import StoreContext from '../store/storeContext';

const useStyles = makeStyles((theme) => ({
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  link: {
    textDecoration: 'none',
    color: theme.palette.type === 'dark' ? '#eee' : theme.palette.primary.main,
  },
}));

const DrawerList = ({ closeDrawer }) => {
  const classes = useStyles();
  const theme = useTheme();
  const { user, logoutUser } = useContext(StoreContext);

  const navlinkTo = () => {
    if (user.accountType === 'ইউনিয়ন একাউন্ট') {
      return `/${user.district}/${user.upazila}/${user.union}`;
    } else if (user.accountType === 'উপজেলা একাউন্ট') {
      return `/${user.district}/${user.upazila}`;
    } else if (user.accountType === 'জেলা একাউন্ট') {
      return `/${user.district}`;
    }
  };

  const logoutHandler = () => {
    if (user) {
      closeDrawer();
      return logoutUser();
    } else {
      closeDrawer();
    }
  };

  return (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <NavLink
          exact
          to='/'
          onClick={closeDrawer}
          activeStyle={{
            color: theme.palette.type === 'dark' ? 'lightgreen' : 'green',
          }}
          className={classes.link}
        >
          <ListItem button>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary='হোম' />
          </ListItem>
        </NavLink>
        {user?.accountType === 'ইউনিয়ন একাউন্ট' && (
          <NavLink
            exact
            to={
              user
                ? `/${user.district}/${user.upazila}/${user.union}/edit`
                : '/login'
            }
            onClick={closeDrawer}
            activeStyle={{
              color: theme.palette.type === 'dark' ? 'lightgreen' : 'green',
            }}
            className={classes.link}
          >
            <ListItem button>
              <ListItemIcon>
                <Assignment />
              </ListItemIcon>
              <ListItemText primary='দম্পতি ফরম' />
            </ListItem>
          </NavLink>
        )}
        {user && (
          <NavLink
            exact
            to={user ? navlinkTo() : '/login'}
            onClick={closeDrawer}
            activeStyle={{
              color: theme.palette.type === 'dark' ? 'lightgreen' : 'green',
            }}
            className={classes.link}
          >
            <ListItem button>
              <ListItemIcon>
                <Assignment />
              </ListItemIcon>
              <ListItemText primary='সম্পূর্ণ প্রতিবেদন' />
            </ListItem>
          </NavLink>
        )}
        <NavLink
          to='/contact'
          onClick={closeDrawer}
          activeStyle={{
            color: theme.palette.type === 'dark' ? 'lightgreen' : 'green',
          }}
          className={classes.link}
        >
          <ListItem button>
            <ListItemIcon>
              <Mail />
            </ListItemIcon>
            <ListItemText primary='যোগাযোগ' />
          </ListItem>
        </NavLink>
      </List>
      <Divider />
      <List>
        <NavLink
          exact
          to={user ? '/' : '/login'}
          onClick={logoutHandler}
          activeStyle={
            user
              ? {}
              : {
                  color: theme.palette.type === 'dark' ? 'lightgreen' : 'green',
                }
          }
          className={classes.link}
        >
          <ListItem button>
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText primary={user ? 'লগআউট' : 'লগইন'} />
          </ListItem>
        </NavLink>
      </List>
    </div>
  );
};

export default DrawerList;
