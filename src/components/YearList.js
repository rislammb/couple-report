import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 78,
  },
}));

const YearList = (props) => {
  const { riportingYear, setRiportingYear } = props;
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id='select-unit'>বছর</InputLabel>
      <Select
        labelId='select-unit-label'
        id='select-unit'
        value={riportingYear}
        onChange={(e) => setRiportingYear(e.target.value)}
      >
        <MenuItem value='২০২১'>২০২১</MenuItem>
        <MenuItem value='২০২২'>২০২২</MenuItem>
        <MenuItem value='২০২৩'>২০২৩</MenuItem>
        <MenuItem value='২০২৪'>২০২৪</MenuItem>
        <MenuItem value='২০২৫'>২০২৫</MenuItem>
        <MenuItem value='২০২৬'>২০২৬</MenuItem>
        <MenuItem value='২০২৭'>২০২৭</MenuItem>
        <MenuItem value='২০২৮'>২০২৮</MenuItem>
        <MenuItem value='২০২৯'>২০২৯</MenuItem>
        <MenuItem value='২০৩০'>২০৩০</MenuItem>
      </Select>
    </FormControl>
  );
};

export default YearList;
