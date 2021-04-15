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

const FormFooter = ({ districtName, upazilaName, unionName, formOption }) => {
  const classes = useStyles();

  return (
    <div className={classes.footerContainer}>
      <br />
      <br />
      <br />
      <br />
      <div className={classes.footerTextContainer}>
        <Typography className={classes.date}>তারিখঃ</Typography>
        {formOption ? (
          unionName?.includes('এনজিও') ? (
            <div>
              <Typography>{unionName}</Typography>
              <Typography>
                {upazilaName}, {districtName}।
              </Typography>
            </div>
          ) : formOption === 'জেলা' ? (
            <div>
              <Typography>উপ-পরিচালক</Typography>
              <Typography>{districtName} জেলা।</Typography>
            </div>
          ) : formOption === 'উপজেলা' ? (
            <div>
              <Typography>উপজেলা পরিবার পরিকল্পনা কর্মকর্তা</Typography>
              <Typography>
                {upazilaName}, {districtName}।
              </Typography>
            </div>
          ) : formOption === 'ইউনিয়ন' ? (
            <div>
              <Typography>পরিবার পরিকল্পনা পরিদর্শক</Typography>
              <Typography>{unionName} ইউনিয়ন</Typography>
              <Typography>
                {upazilaName}, {districtName}।
              </Typography>
            </div>
          ) : (
            <div>
              <Typography>পরিবার কলাণ সহকারী</Typography>
              <Typography>
                {formOption} ইউনিট, {unionName} ইউনিয়ন
              </Typography>
              <Typography>
                {upazilaName}, {districtName}।
              </Typography>
            </div>
          )
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default FormFooter;
