import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

import { accountTypeData } from '../../data';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 75,
    marginBottom: theme.spacing(1),
  },
}));

const AccountType = ({ accountType, onChange }) => {
  const classes = useStyles();

  return (
    <FormControl fullWidth className={classes.formControl}>
      <InputLabel id='select-account-type'>একাউন্টের ধরণ</InputLabel>
      <Select
        labelId='select-account-type'
        id='accountType'
        name='accountType'
        value={accountType}
        onChange={onChange}
      >
        {accountTypeData.map((type) => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default AccountType;
