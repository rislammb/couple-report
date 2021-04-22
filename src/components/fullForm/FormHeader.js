import React from 'react';
import Typography from '@material-ui/core/Typography';

const FormHeader = ({ districtName, upazilaName, unionName, formOption }) => {
  const renderHTML = () => {
    if (unionName) {
      if (formOption === 'ইউনিয়ন') {
        return (
          <>
            <Typography>ইউনিয়নঃ {unionName}</Typography>
            <Typography>উপজেলাঃ {upazilaName}</Typography>
            <Typography>জেলাঃ {districtName}</Typography>
          </>
        );
      } else {
        return (
          <>
            <Typography>ইউনিটঃ {formOption}</Typography>
            <Typography>ইউনিয়নঃ {unionName}</Typography>
            <Typography>উপজেলাঃ {upazilaName}</Typography>
            <Typography>জেলাঃ {districtName}</Typography>
          </>
        );
      }
    } else if (upazilaName) {
      if (formOption === 'উপজেলা') {
        return (
          <>
            <Typography>উপজেলাঃ {upazilaName}</Typography>
            <Typography>জেলাঃ {districtName}</Typography>
          </>
        );
      } else {
        return (
          <>
            <Typography>ইউনিয়নঃ {formOption}</Typography>
            <Typography>উপজেলাঃ {upazilaName}</Typography>
            <Typography>জেলাঃ {districtName}</Typography>
          </>
        );
      }
    } else if (districtName) {
      if (formOption === 'জেলা') {
        return <Typography>জেলাঃ {districtName}</Typography>;
      } else {
        return (
          <>
            <Typography>উপজেলাঃ {formOption}</Typography>
            <Typography>জেলাঃ {districtName}</Typography>
          </>
        );
      }
    }
  };

  return renderHTML();
};

export default FormHeader;
