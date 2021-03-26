import React, { useState, useEffect } from 'react';
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@material-ui/core/styles';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import StoreContext from './storeContext';
import App from '../App';
import { rowOneValue } from '../data';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_AD,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

db.enablePersistence().catch((err) => {
  console.log('Persistence Faild', err);
});

const StoreProvider = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);
  const [userError, setUserError] = useState(null);
  const [isSendEmail, setIsSendEmail] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [storeZeroRowTotal, setStoreZeroRowTotal] = useState({
    t1: '০',
    t2: '০',
    t3: '০',
    t4: '০',
  });
  const [storeTwentyRowTotal, setStoreTwentyRowTotal] = useState({
    t1: '০',
    t2: '০',
    t3: '০',
    t4: '০',
  });
  const [storeThirtyRowTotal, setStoreThirtyRowTotal] = useState({
    t1: '০',
    t2: '০',
    t3: '০',
    t4: '০',
  });
  const [storeFortyRowTotal, setStoreFortyRowTotal] = useState({
    t1: '০',
    t2: '০',
    t3: '০',
    t4: '০',
  });

  const [storeTotalRowOne, setStoreTotalRowOne] = useState({ ...rowOneValue });

  const createUser = ({ name, email, password, union }) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((data) => {
        const newUser = {
          name,
          email,
          union,
          uid: data.user.uid,
        };
        return db
          .collection('users')
          .doc(data.user.uid)
          .set(newUser)
          .then(() => setUser(newUser));
      })
      .catch((err) => {
        if (err.code === 'auth/email-already-in-use') {
          setUserError({ create: 'Email Already In Use' });
        } else if (err.code === 'auth/network-request-failed') {
          setUserError({ create: "Registration doesn't work offline" });
        } else {
          setUserError({ create: 'Something went wrong!' });
        }
      });
  };

  const loginUser = ({ email, password }) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) =>
        db
          .collection('users')
          .doc(res.user.uid)
          .get()
          .then((doc) => {
            setUser(doc.data());
          })
      )
      .catch((err) => {
        if (err.code === 'auth/user-not-found') {
          setUserError({ login: 'User not found! Please Create Your Account' });
        } else if (err.code === 'auth/wrong-password') {
          setUserError({ login: 'Password not correct' });
        } else if (err.code === 'auth/network-request-failed') {
          setUserError({ login: "Login doesn't work offline" });
        } else {
          setUserError({ login: 'Something went wrong!' });
        }
      });
  };

  const recoverAccount = (email) => {
    return firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        setIsSendEmail(true);
      })
      .catch((err) => {
        if (err.code === 'auth/user-not-found') {
          setUserError({
            recover: 'User not found!',
          });
        } else if (err.code === 'auth/network-request-failed') {
          setUserError({ recover: "Send Email doesn't work offline" });
        } else {
          setUserError({ recover: 'Something went wrong!' });
        }
      });
  };

  const logoutUser = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => setUser(null))
      .catch((err) => console.log('Log out err', err));
  };

  const lightTheme = createMuiTheme({
    ...commonThemeValue,
    palette: {
      ...commonThemeValue.palette,
    },
  });

  const darkTheme = createMuiTheme({
    ...commonThemeValue,
    palette: {
      ...commonThemeValue.palette,
      type: 'dark',
    },
  });

  const theme = responsiveFontSizes(darkMode ? darkTheme : lightTheme);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    return firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        return db
          .collection('users')
          .doc(firebase.auth().currentUser?.uid)
          .get()
          .then((doc) => {
            setUser(doc.data());
          })
          .then(() => setAuthLoading(false))
          .catch(() => {
            setUser(null);
            setAuthLoading(false);
          });
      } else {
        setUser(null);
        setAuthLoading(false);
      }
    });
  }, [firebase.auth()]);

  return (
    <StoreContext.Provider
      value={{
        darkMode,
        toggleDarkMode,
        user,
        setUser,
        createUser,
        loginUser,
        logoutUser,
        recoverAccount,
        isSendEmail,
        setIsSendEmail,
        userError,
        setUserError,
        authLoading,
        storeZeroRowTotal,
        setStoreZeroRowTotal,
        storeTwentyRowTotal,
        setStoreTwentyRowTotal,
        storeThirtyRowTotal,
        setStoreThirtyRowTotal,
        storeFortyRowTotal,
        setStoreFortyRowTotal,
      }}
    >
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StoreContext.Provider>
  );
};

export default StoreProvider;

const commonThemeValue = {
  palette: {
    primary: {
      main: '#058697',
      light: '#14e8f0',
      dark: '#0f7f83',
    },
  },
  typography: {
    fontFamily: "'Titillium Web', sans-serif",
  },
  overrides: {
    MuiOutlinedInput: {
      input: {
        padding: '10px 16px',
      },
    },
    MuiInputLabel: {
      outlined: {
        transform: 'translate(16px, 12px) scale(1)',
      },
    },
  },
};
