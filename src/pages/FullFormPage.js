import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, CircularProgress, Button } from '@material-ui/core';

import LoadRiportForm from '../components/LoadRiportForm';
import PrintTable from '../components/PrintTable';

import StoreContext from '../store/storeContext';

import { getYear } from '../functions';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: 20,
  },
  progressContainer: {
    width: '90%',
    maxWidth: 350,
    textAlign: 'center',
    margin: '65px auto',
  },
  printContainer: {
    overflowX: 'auto',
  },
  printArea: {
    width: 'calc(100% - 142px)',
    minWidth: '1000px',
    margin: '0px auto',
    textAlign: 'center',
    padding: '10px',
  },
  topContainer: {
    margin: '0px 0px 15px 0px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-between',
  },
  borderText: { fontSize: 14, border: '1px solid #333', padding: 5 },
  info: {
    marginTop: 5,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  btnContainer: {
    textAlign: 'center',
    paddingTop: 10,
    '& button': {
      margin: '0px 10px',
    },
    '@media print': {
      display: 'none',
    },
  },
  link: {
    textDecoration: 'none',
    color:
      theme.palette.type === 'light'
        ? theme.palette.primary.dark
        : theme.palette.primary.light,
  },
}));

const PrintPage = (props) => {
  const { unionName } = props.match.params;
  const { user, authLoading } = useContext(StoreContext);
  const classes = useStyles();
  const [riportingYear, setRiportingYear] = useState(getYear());
  const [unit, setUnit] = useState('১ক');

  if (authLoading)
    return (
      <div className={classes.progressContainer}>
        <CircularProgress />
      </div>
    );
  if (user)
    return (
      <div className={classes.root}>
        <LoadRiportForm
          riportingYear={riportingYear}
          setRiportingYear={setRiportingYear}
          unionName={unionName}
          unit={unit}
          setUnit={setUnit}
        />
        <div className={classes.printContainer}>
          <div className={classes.printArea}>
            <div className={classes.topContainer}>
              <div>
                <div className={classes.borderText}>
                  <Typography style={{ fontSize: 'inherit' }}>
                    ছেলে হোক, মেয়ে হোক
                  </Typography>
                  <Typography style={{ fontSize: 'inherit' }}>
                    দুটি সন্তানই যথেষ্ট
                  </Typography>
                </div>
              </div>
              <div>
                <Typography variant='h5'>
                  গণপ্রজাতন্ত্রী বাংলাদেশ সরকার
                </Typography>
                <Typography variant='h6'>পরিবার পরিকল্পনা অধিদপ্তর</Typography>
                <Typography variant='h6'>এমআইএস ইউনিট</Typography>
              </div>
              <div>
                <Typography className={classes.borderText}>
                  দম্পতি ফরম - ১
                </Typography>
              </div>
            </div>
            <Typography variant='h6'>
              ইউনিয়নের সক্ষম দম্পতিদের বয়স এবং সন্তান সংখ্যা অনুযায়ী পদ্ধতি
              গ্রহণকারী ও অগ্রহণকারী তথ্য সংগ্রহ ফরম
            </Typography>
            <Typography variant='body2'>(বছরে একবার পূরণীয়)</Typography>
            <div className={classes.info}>
              <Typography>ইউনিয়নঃ {unionName}</Typography>
              <Typography>ইউনিটঃ {unit}</Typography>
              <Typography>উপজেলাঃ বাগমারা</Typography>
              <Typography>জেলাঃ রাজশাহী</Typography>
              <Typography>বছরঃ {riportingYear}খ্রিঃ</Typography>
            </div>
            <PrintTable
              riportingYear={riportingYear}
              unionName={unionName}
              unit={unit}
            />
          </div>
        </div>
        <div className={classes.btnContainer}>
          <Button color='secondary' variant='contained'>
            সাবমিট করুন
          </Button>
          <Button
            color='primary'
            variant='contained'
            onClick={() => window.print()}
          >
            প্রিন্ট করুন
          </Button>
        </div>
      </div>
    );
  else
    return (
      <div className={classes.progressContainer}>
        <Typography variant='h6'>
          সম্পূর্ণ ফরম পেতে{' '}
          <Link className={classes.link} to='/login'>
            লগইন করুন
          </Link>
        </Typography>
      </div>
    );
};

export default PrintPage;
