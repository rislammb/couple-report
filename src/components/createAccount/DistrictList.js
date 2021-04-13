import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

import { districtInfo } from '../../data';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 75,
    marginBottom: theme.spacing(1),
  },
}));

const DistrictList = ({ district, onChange }) => {
  const classes = useStyles();

  return (
    <FormControl fullWidth className={classes.formControl}>
      <InputLabel id='select-district'>জেলা</InputLabel>
      <Select
        labelId='select-district'
        id='district'
        name='district'
        value={district}
        onChange={onChange}
      >
        {districtInfo.map((dist) => (
          <MenuItem key={dist.name} value={dist.name}>
            {dist.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DistrictList;
