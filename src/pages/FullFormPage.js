import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, CircularProgress } from '@material-ui/core';

import LoadRiportForm from '../components/fullForm/LoadRiportForm';
import FullFormTable from '../components/fullForm/FullFormTable';

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

  link: {
    textDecoration: 'none',
    color:
      theme.palette.type === 'light'
        ? theme.palette.primary.dark
        : theme.palette.primary.light,
  },
}));

const PrintPage = (props) => {
  const { districtName, upazilaName, unionName } = props.match.params;
  const { user, authLoading } = useContext(StoreContext);
  const classes = useStyles();
  const [riportingYear, setRiportingYear] = useState(getYear());
  const [formOption, setFormOption] = useState('ইউনিয়ন');

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
          formOption={formOption}
          setFormOption={setFormOption}
        />
        <FullFormTable
          riportingYear={riportingYear}
          districtName={districtName}
          upazilaName={upazilaName}
          unionName={unionName}
          formOption={formOption}
          user={user}
        />
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
