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

const UpazilaList = ({ district, upazila, onChange }) => {
  const classes = useStyles();

  return (
    <FormControl fullWidth className={classes.formControl}>
      <InputLabel id='select-upazila'>উপজেলা</InputLabel>
      <Select
        labelId='select-upazila'
        id='upazila'
        name='upazila'
        value={upazila}
        onChange={onChange}
      >
        {districtInfo.map(
          (dist) =>
            dist.name === district &&
            dist.upazila.map((upa) => (
              <MenuItem key={upa.name} value={upa.name}>
                {upa.name}
              </MenuItem>
            ))
        )}
      </Select>
    </FormControl>
  );
};

export default UpazilaList;
