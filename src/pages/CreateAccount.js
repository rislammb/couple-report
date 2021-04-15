import React, { useState, useContext, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Button,
  LinearProgress,
} from '@material-ui/core';
import UserNameField from '../components/UserNameField';
import EmailField from '../components/EmailField';
import PasswordField from '../components/PasswordField';

import StoreContext from '../store/storeContext';

import DistrictList from '../components/createAccount/DistrictList';
import UpazilaList from '../components/createAccount/UpazilaList';
import UnionList from '../components/createAccount/UnionList';
import AccountType from '../components/createAccount/AccountType';

import { redirectTo } from '../functions';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    margin: '0px auto',
    padding: '50px 12px',
    width: '180px',
  },
  card: {
    width: 330,
    maxWidth: '90%',
    backgroundColor:
      theme.palette.type === 'light' ? 'rgba(255,255,255,0.3)' : '',
  },
  header: {
    textAlign: 'center',
    paddingBottom: 0,
    color:
      theme.palette.type === 'light'
        ? theme.palette.primary.dark
        : theme.palette.primary.light,
  },
  link: {
    textDecoration: 'none',
    color:
      theme.palette.type === 'light'
        ? theme.palette.primary.dark
        : theme.palette.primary.light,
  },
  input: {
    marginBottom: theme.spacing(1),
  },
  cardActions: {
    marginTop: theme.spacing(2),
    textAlign: 'center',
  },
  loginText: {
    marginTop: theme.spacing(1),
  },
}));

const CreateAccount = () => {
  const classes = useStyles();
  const { authLoading, user, userError, setUserError, createUser } = useContext(
    StoreContext
  );

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [accountType, setAccountType] = useState('ইউনিয়ন একাউন্ট');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [district, setDistrict] = useState('');
  const [upazila, setUpazila] = useState('');
  const [union, setUnion] = useState('');

  const handleDistrictChange = (e) => {
    setUpazila('');
    setUnion('');
    setDistrict(e.target.value);
  };

  const handleUpazilaChange = (e) => {
    setUnion('');
    setUpazila(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setUserError({ create: '' });
    if (name.trim().length < 3)
      setUserError({ create: 'নাম কমপক্ষে ৩ অক্ষরের হতে হবে' });
    else if (!email) setUserError({ create: 'ইমেইল দিতেই হবে' });
    else if (password.length < 7)
      setUserError({ create: 'পাসওয়ার্ড কমপক্ষে ৭ অক্ষরের হতে হবে' });
    else if (!district) setUserError({ create: 'জেলা দিতেই হবে' });
    else if (
      (accountType === 'উপজেলা একাউন্ট' || accountType === 'ইউনিয়ন একাউন্ট') &&
      !upazila
    )
      setUserError({ create: 'উপজেলা দিতেই হবে' });
    else if (accountType === 'ইউনিয়ন একাউন্ট' && !union)
      setUserError({ create: 'ইউনিয়ন দিতেই হবে' });
    else
      await createUser(
        accountType,
        name.trim(),
        email,
        password,
        district,
        upazila,
        union
      );
    setIsSubmitting(false);
  };

  useEffect(() => {
    setUserError({});
  }, []);

  if (authLoading)
    return (
      <div className={classes.center}>
        <LinearProgress variant='indeterminate' />
      </div>
    );

  if (user) return <Redirect to={redirectTo(user)} />;

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardHeader className={classes.header} title='একাউন্ট খুলুন' />
        <CardContent>
          <form onSubmit={handleSubmit}>
            <AccountType
              accountType={accountType}
              onChange={(e) => setAccountType(e.target.value)}
            />
            <UserNameField
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={classes.input}
            />
            <EmailField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={classes.input}
            />
            <PasswordField
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={classes.input}
            />
            <DistrictList district={district} onChange={handleDistrictChange} />
            {accountType === 'উপজেলা একাউন্ট' ||
            accountType === 'ইউনিয়ন একাউন্ট' ? (
              <UpazilaList
                district={district}
                upazila={upazila}
                onChange={handleUpazilaChange}
              />
            ) : (
              ''
            )}
            {accountType === 'ইউনিয়ন একাউন্ট' && (
              <UnionList
                district={district}
                upazila={upazila}
                union={union}
                onChange={(e) => setUnion(e.target.value)}
              />
            )}
            {userError?.create && (
              <Typography color='error'>{userError?.create}</Typography>
            )}
            <div className={classes.cardActions}>
              <Button
                disabled={isSubmitting}
                color='primary'
                variant='contained'
                type='submit'
              >
                একাউন্ট খুলুন
              </Button>
              <Typography variant='body2' className={classes.loginText}>
                আপনার একাউন্ট আছে?{' '}
                <Link className={classes.link} to='/login'>
                  লগইন করুন
                </Link>
              </Typography>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateAccount;
