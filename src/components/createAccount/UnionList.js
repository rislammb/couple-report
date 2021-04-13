import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

import { districtInfo } from '../../data';

const useStyles = makeStyles({
  formControl: {
    minWidth: 75,
  },
});

const UnionList = ({ district, upazila, union, onChange }) => {
  const classes = useStyles();

  return (
    <FormControl fullWidth className={classes.formControl}>
      <InputLabel id='select-union'>ইউনিয়ন</InputLabel>
      <Select
        labelId='select-union'
        id='union'
        name='union'
        value={union}
        onChange={onChange}
      >
        {districtInfo.map(
          (dist) =>
            dist.name === district &&
            dist.upazila.map(
              (upa) =>
                upa.name === upazila &&
                upa.union.map((union) => (
                  <MenuItem key={union} value={union}>
                    {union}
                  </MenuItem>
                ))
            )
        )}
      </Select>
    </FormControl>
  );
};

export default UnionList;
