import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  footerContainer: {
    display: 'none',
    '@media print': {
      display: 'block',
    },
  },
  footerTextContainer: {
    display: 'flex',
  },
  date: { flex: 1, textAlign: 'left' },
});

const FormFooter = ({
  districtName,
  upazilaName,
  unionName,
  fwaName,
  unit,
  user,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.footerContainer}>
      <br />
      <br />
      <br />
      <br />
      <div className={classes.footerTextContainer}>
        <Typography className={classes.date}>তারিখঃ</Typography>
        {unionName.includes('এনজিও') ? (
          <div>
            <Typography>{unionName}</Typography>
            <Typography>বাগমারা, রাজশাহী।</Typography>
          </div>
        ) : unit ? (
          <div>
            {fwaName && <Typography>( {fwaName} )</Typography>}
            <Typography>পরিবার কলাণ সহকারী</Typography>
            <Typography>
              {unit} ইউনিট, {unionName} ইউনিয়ন
            </Typography>
            <Typography>
              {upazilaName}, {districtName}।
            </Typography>
          </div>
        ) : (
          <div>
            <Typography>( {user.name} )</Typography>
            <Typography>পরিবার পরিকল্পনা পরিদর্শক</Typography>
            <Typography>{unionName} ইউনিয়ন</Typography>
            <Typography>
              {upazilaName}, {districtName}।
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormFooter;
