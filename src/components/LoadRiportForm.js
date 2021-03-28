import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import YearList from './YearList';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '25px auto',
    width: '95%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '@media print': {
      display: 'none',
    },
  },
  formControl: {
    minWidth: 75,
  },
}));

const LoadRiportForm = (props) => {
  const { riportingYear, setRiportingYear, unionName, unit, setUnit } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <YearList
        riportingYear={riportingYear}
        setRiportingYear={setRiportingYear}
      />
      <Typography component='div'>ইউনিয়নঃ {unionName}</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel id='select-unit'>ইউনিট</InputLabel>
        <Select
          labelId='select-unit-label'
          id='select-unit'
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
        >
          <MenuItem value=''>--</MenuItem>
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
    </div>
  );
};

export default LoadRiportForm;
