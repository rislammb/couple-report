import React, { useContext, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Button,
  LinearProgress,
} from '@material-ui/core';
import EmailField from '../components/EmailField';
import PasswordField from '../components/PasswordField';

import StoreContext from '../store/storeContext';

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
  recoverText: {
    marginTop: theme.spacing(2),
  },
}));

const validationSchema = yup.object({
  email: yup
    .string('আপনার ইমেইল দিন')
    .email('সঠিক ইমেইল দিন')
    .required('ইমেইল দিতেই হবে'),
  password: yup
    .string('আপনার পাসওয়ার্ড দিন')
    .min(7, 'পাসওয়ার্ড কমপক্ষে ৭ অক্ষরের হতে হবে')
    .required('পাসওয়ার্ড দিতেই হবে'),
});

const Login = () => {
  const classes = useStyles();
  const { authLoading, user, userError, setUserError, loginUser } = useContext(
    StoreContext
  );

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setUserError({});
      await loginUser(values);
      setSubmitting(false);
    },
  });

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
        <CardHeader className={classes.header} title='লগইন' />
        <CardContent>
          <form onSubmit={formik.handleSubmit}>
            <EmailField
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              className={classes.input}
            />
            <PasswordField
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              className={classes.input}
            />
            {userError?.login && (
              <Typography color='error'>{userError?.login}</Typography>
            )}
            <div className={classes.cardActions}>
              <Button
                disabled={formik.isSubmitting}
                color='primary'
                variant='contained'
                type='submit'
              >
                লগইন
              </Button>
              <Typography variant='body2' className={classes.recoverText}>
                <Link className={classes.link} to='/recover'>
                  পাসওয়ার্ড ভুলে গেছেন?
                </Link>
              </Typography>
              <Typography variant='body2'>
                আপনার একাউন্ট নেই?{' '}
                <Link className={classes.link} to='/create'>
                  একাউন্ট খুলুন
                </Link>
              </Typography>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
