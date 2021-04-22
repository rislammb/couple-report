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

  const getFooterText = () => {
    if (unionName) {
      if (formOption === 'ইউনিয়ন') {
        if (unionName.includes('এনজিও')) {
          return (
            <div>
              <Typography>{unionName}</Typography>
              <Typography>
                {upazilaName}, {districtName}।
              </Typography>
            </div>
          );
        } else {
          return (
            <div>
              <Typography>পরিবার পরিকল্পনা পরিদর্শক</Typography>
              <Typography>{unionName} ইউনিয়ন</Typography>
              <Typography>
                {upazilaName}, {districtName}।
              </Typography>
            </div>
          );
        }
      } else {
        if (unionName.includes('এনজিও')) {
          return (
            <div>
              <Typography>
                {formOption} ইউনিট, {unionName}
              </Typography>
              <Typography>
                {upazilaName}, {districtName}।
              </Typography>
            </div>
          );
        } else {
          return (
            <div>
              <Typography>পরিবার কলাণ সহকারী</Typography>
              <Typography>
                {formOption} ইউনিট, {unionName} ইউনিয়ন
              </Typography>
              <Typography>
                {upazilaName}, {districtName}।
              </Typography>
            </div>
          );
        }
      }
    } else if (upazilaName) {
      if (formOption === 'উপজেলা') {
        return (
          <div>
            <Typography>উপজেলা পরিবার পরিকল্পনা কর্মকর্তা</Typography>
            <Typography>
              {upazilaName}, {districtName}।
            </Typography>
          </div>
        );
      } else {
        if (formOption.includes('এনজিও')) {
          return (
            <div>
              <Typography>{formOption}</Typography>
              <Typography>
                {upazilaName}, {districtName}।
              </Typography>
            </div>
          );
        } else {
          return (
            <div>
              <Typography>পরিবার পরিকল্পনা পরিদর্শক</Typography>
              <Typography>{formOption} ইউনিয়ন</Typography>
              <Typography>
                {upazilaName}, {districtName}।
              </Typography>
            </div>
          );
        }
      }
    } else if (districtName) {
      if (formOption === 'জেলা') {
        return (
          <div>
            <Typography>উপ-পরিচালক</Typography>
            <Typography>{districtName} জেলা।</Typography>
          </div>
        );
      } else {
        return (
          <div>
            <Typography>উপজেলা পরিবার পরিকল্পনা কর্মকর্তা</Typography>
            <Typography>
              {formOption}, {districtName}।
            </Typography>
          </div>
        );
      }
    }
  };

  return (
    <div className={classes.footerContainer}>
      <br />
      <br />
      <br />
      <br />
      <div className={classes.footerTextContainer}>
        <Typography className={classes.date}>তারিখঃ</Typography>
        {getFooterText()}
      </div>
    </div>
  );
};

export default FormFooter;
