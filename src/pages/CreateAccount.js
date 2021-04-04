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
import UserNameField from '../components/UserNameField';
import EmailField from '../components/EmailField';
import PasswordField from '../components/PasswordField';

import StoreContext from '../store/storeContext';
import UnionList from '../components/UnionList';

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
  loginText: {
    marginTop: theme.spacing(1),
  },
}));

const validationSchema = yup.object({
  name: yup
    .string('আপনার নাম দিন')
    .min(3, 'নাম কমপক্ষে ৭ অক্ষরের হতে হবে')
    .required('নাম দিতেই হবে'),
  union: yup.string('আপনার ইউনিয়ন সিলেক্ট করুন').required('ইউনিয়ন দিতেই হবে'),
  email: yup
    .string('আপনার ইমেইল দিন')
    .email('সঠিক ইমেইল দিন')
    .required('ইমেইল দিতেই হবে'),
  password: yup
    .string('আপনার পাসওয়ার্ড দিন')
    .min(7, 'পাসওয়ার্ড কমপক্ষে ৭ অক্ষরের হতে হবে')
    .required('পাসওয়ার্ড দিতেই হবে'),
});

const CreateAccount = () => {
  const classes = useStyles();
  const { authLoading, user, userError, setUserError, createUser } = useContext(
    StoreContext
  );

  const formik = useFormik({
    initialValues: {
      name: '',
      union: '০১-গোবিন্দপাড়াsetUserError',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setUserError({});
      await createUser(values);
      setSubmitting(false);
    },
  });

  useEffect(() => {
    setUserError({});
  }, [setUserError]);

  if (authLoading)
    return (
      <div className={classes.center}>
        <LinearProgress variant='indeterminate' />
      </div>
    );

  if (user?.union) {
    return <Redirect to={`/union/${user.union}`} />;
  } else if (user?.email) {
    return <Redirect to='/' />;
  } else {
    return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardHeader className={classes.header} title='একাউন্ট খুলুন' />
          <CardContent>
            <form onSubmit={formik.handleSubmit}>
              <UserNameField
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                className={classes.input}
              />
              <UnionList
                union={formik.values.union}
                onChange={formik.handleChange}
                error={formik.touched.union && Boolean(formik.errors.union)}
                helperText={formik.touched.union && formik.errors.union}
              />
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
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                className={classes.input}
              />
              {userError?.create && (
                <Typography color='error'>{userError?.create}</Typography>
              )}
              <div className={classes.cardActions}>
                <Button
                  disabled={formik.isSubmitting}
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
  }
};

export default CreateAccount;
