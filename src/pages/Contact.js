import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Link,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
  divider: {
    margin: '21px 0',
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardHeader className={classes.header} title='যোগাযোগ' />
        <CardContent>
          <Typography>
            মেইল করতে:{' '}
            <Link className={classes.link} href='mailto:rislammb@gmail.com'>
              rislammb@gmail.com
            </Link>
          </Typography>
          <Typography>
            ফেসবুক:{' '}
            <Link
              className={classes.link}
              href='https://www.facebook.com/rislammb'
            >
              facebook/rislammb
            </Link>
          </Typography>
          <Divider className={classes.divider} />
          <Typography variant='h6'>আমাদের ঠিকানা:</Typography>
          <Typography style={{ marginTop: 9 }}>
            উপজেলা পরিবার পরিকল্পনা কার্যালয়
          </Typography>
          <Typography>বাগমারা উপজেলা</Typography>
          <Typography>রাজশাহী</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;
