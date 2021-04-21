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

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

const StoreProvider = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);
  const [userError, setUserError] = useState(null);
  const [isSendEmail, setIsSendEmail] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);

  const createUser = async (
    accountType,
    name,
    email,
    password,
    district,
    upazila,
    union
  ) => {
    const unionName = union === 'বেসরকারী সংস্থা' ? `এনজিও.${name}` : union;
    let existMessage = '';
    await db
      .collection('users')
      .get()
      .then((doc) => {
        doc.docs.forEach((doc) => {
          if (
            accountType === 'ইউনিয়ন একাউন্ট' &&
            doc.data().accountType === 'ইউনিয়ন একাউন্ট' &&
            doc.data().district === district &&
            doc.data().upazila === upazila &&
            doc.data().union === unionName
          ) {
            if (unionName.includes('এনজিও')) {
              existMessage = `${unionName} এর একাউন্ট ইতোমধ্যে খোলা হয়েছে`;
            } else
              existMessage = `${unionName} ইউনিয়ন এর একাউন্ট ইতোমধ্যে খোলা হয়েছে`;
          } else if (
            accountType === 'উপজেলা একাউন্ট' &&
            doc.data().accountType === 'উপজেলা একাউন্ট' &&
            doc.data().district === district &&
            doc.data().upazila === upazila
          ) {
            existMessage = `${upazila} উপজেলা এর একাউন্ট ইতোমধ্যে খোলা হয়েছে`;
          } else if (
            accountType === 'জেলা একাউন্ট' &&
            doc.data().accountType === 'জেলা একাউন্ট' &&
            doc.data().district === district
          ) {
            existMessage = `${district} জেলা এর একাউন্ট ইতোমধ্যে খোলা হয়েছে`;
          }
        });
      })
      .then(() => {
        if (existMessage) {
          setUserError({
            create: existMessage,
          });
        } else {
          firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(async (data) => {
              let newUser = {
                uid: data.user.uid,
                accountType,
                name,
                email,
              };

              if (accountType === 'ইউনিয়ন একাউন্ট') {
                newUser.district = district;
                newUser.upazila = upazila;
                newUser.union = unionName;
              } else if (accountType === 'উপজেলা একাউন্ট') {
                newUser.district = district;
                newUser.upazila = upazila;
              } else if (accountType === 'জেলা একাউন্ট') {
                newUser.district = district;
              }

              await db
                .collection('users')
                .doc(data.user.uid)
                .set(newUser)
                .then(async () => await setUser(newUser));
            })
            .catch((err) => {
              if (err.code === 'auth/email-already-in-use') {
                setUserError({ create: 'এই ইমেইল আগেই ব্যবহৃত হয়েছে!' });
              } else if (err.code === 'auth/network-request-failed') {
                setUserError({
                  create: 'একাউন্ট খুলতে ইন্টারনেট সংযোগ দিন!',
                });
              } else if (err.code === 'auth/invalid-email') {
                setUserError({
                  create: 'সঠিক ইমেইল দিন!',
                });
              } else {
                setUserError({
                  create: 'কিছু সমস্যা হয়েছে! আবার চেষ্টা করুন',
                });
              }
            });
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
          .then((doc) => setUser(doc.data()))
      )
      .catch((err) => {
        if (err.code === 'auth/user-not-found') {
          setUserError({
            login: 'ইউজার খুঁজে পাওয়া যায় নি! আপনার একাউন্ট খুলুন',
          });
        } else if (err.code === 'auth/wrong-password') {
          setUserError({ login: 'পাসওয়ার্ড সঠিক নয়!' });
        } else if (err.code === 'auth/network-request-failed') {
          setUserError({ login: 'লগইন করতে ইন্টারনেট সংযোগ দিন!' });
        } else {
          setUserError({ login: 'কিছু সমস্যা হয়েছে! আবার চেষ্টা করুন' });
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
            recover: 'ইউজার খুঁজে পাওয়া যায় নি! আপনার একাউন্ট খুলুন',
          });
        } else if (err.code === 'auth/network-request-failed') {
          setUserError({ recover: 'লিঙ্ক পেতে ইন্টারনেট সংযোগ দিন!' });
        } else {
          setUserError({ recover: 'কিছু সমস্যা হয়েছে! আবার চেষ্টা করুন' });
        }
      });
  };

  const logoutUser = () => {
    console.log('log out');
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

  const loadUser = () => {
    const loggedUser = firebase.auth().currentUser;
    db.collection('users')
      .doc(loggedUser?.uid)
      .get()
      .then(async (doc) => await setUser(doc.data()))
      .catch(() => {
        setUser(null);
      })
      .finally(() => setAuthLoading(false));
  };

  useEffect(() => {
    loadUser();
  }, [firebase.auth().currentUser]);

  return (
    <StoreContext.Provider
      value={{
        darkMode,
        authLoading,
        user,
        userError,
        isSendEmail,
        toggleDarkMode,
        setUser,
        createUser,
        loginUser,
        logoutUser,
        recoverAccount,
        setIsSendEmail,
        setUserError,
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
