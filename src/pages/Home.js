import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  LinearProgress,
} from '@material-ui/core';

import StoreContext from '../store/storeContext';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    padding: '25px 0px',
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
  textCenter: {
    textAlign: 'center',
  },
  progress: {
    width: '65px',
    display: 'inline-block',
    marginLeft: '9px',
  },
  link: {
    textDecoration: 'none',
    color:
      theme.palette.type === 'light'
        ? theme.palette.primary.dark
        : theme.palette.primary.light,
  },
}));

const Home = () => {
  const classes = useStyles();
  const { user, authLoading } = useContext(StoreContext);

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardHeader title='আস সালামু আলাইকুম' className={classes.header} />
        <CardContent className={classes.textCenter}>
          <Typography>বাৎসরিক দম্পতি প্রতিবেদন ফরমে স্বাগতম</Typography>
          <Typography>বাগমারা উপজেলা, রাজশাহী</Typography>
          <br />
          <Typography component='div'>
            তথ্য সংযোজনে{'  '}
            {authLoading ? (
              <LinearProgress className={classes.progress} />
            ) : (
              <Link className={classes.link} to={user ? `/union/${user.union}` : '/login'}>
                {user ? 'ফরমে যান' : 'লগইন করুন'}
              </Link>
            )}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
