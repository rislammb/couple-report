import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

const useStyles = makeStyles({
  formControl: {
    minWidth: 75,
  },
});

const UnitList = ({ unit, setUnit }) => {
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id='select-unit'>ইউনিট</InputLabel>
      <Select
        labelId='select-unit-label'
        id='select-unit'
        value={unit}
        onChange={(e) => setUnit(e.target.value)}
      >
        <MenuItem value='১ক'>১/ক</MenuItem>
        <MenuItem value='১খ'>১/খ</MenuItem>
        <MenuItem value='১গ'>১/গ</MenuItem>
        <MenuItem value='২ক'>২/ক</MenuItem>
        <MenuItem value='২খ'>২/খ</MenuItem>
        <MenuItem value='২গ'>২/গ</MenuItem>
        <MenuItem value='৩ক'>৩/ক</MenuItem>
        <MenuItem value='৩খ'>৩/খ</MenuItem>
        <MenuItem value='৩গ'>৩/গ</MenuItem>
      </Select>
    </FormControl>
  );
};

export default UnitList;
