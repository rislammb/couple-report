import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
  },
}));

const AgeRange = (props) => {
  const { ageRange, setAgeRange } = props;
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id='select-age-range'>বয়সের বিন্যাস</InputLabel>
      <Select
        labelId='select-age-range'
        id='select-age-range'
        value={ageRange}
        onChange={(e) => setAgeRange(e.target.value)}
      >
        <MenuItem value='<২০'>&lt;২০</MenuItem>
        <MenuItem value='২০-২৯'>২০-২৯</MenuItem>
        <MenuItem value='৩০-৩৯'>৩০-৩৯</MenuItem>
        <MenuItem value='৪০-৪৯'>৪০-৪৯</MenuItem>
      </Select>
    </FormControl>
  );
};

export default AgeRange;
