import React, { useState, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, LinearProgress, Button } from '@material-ui/core';

import PrintTable from '../components/PrintTable';

import StoreContext from '../store/storeContext';

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    overflowX: 'auto',
  },
  root: {
    width: 'calc(100% - 142px)',
    minWidth: '1000px',
    margin: '0px auto 10px auto',
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
  printBtn: {
    '@media print': {
      display: 'none',
    },
  },
}));

const PrintPage = (props) => {
  const { unionName } = props.match.params;
  const { user, authLoading } = useContext(StoreContext);
  const classes = useStyles();
  const [unit, setUnit] = useState('১ক');

  return (
    <div className={classes.rootContainer}>
      <div className={classes.root}>
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
            <Typography variant='h5'>গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</Typography>
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
          <Typography component='div'>ইউনিয়নঃ {unionName}</Typography>
          <Typography>উপজেলাঃ বাগমারা</Typography>
          <Typography>জেলাঃ রাজশাহী</Typography>
          <Typography>বছরঃ ২০২১</Typography>
        </div>
        <PrintTable unionName={unionName} unit={unit} />

        <Button
          className={classes.printBtn}
          color='primary'
          variant='contained'
          onClick={() => window.print()}
        >
          প্রিন্ট করুন
        </Button>
      </div>
    </div>
  );
};

export default PrintPage;
