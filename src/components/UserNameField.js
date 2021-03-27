import React from 'react';
import TextField from '@material-ui/core/TextField';

const UserNameField = (props) => {
  return (
    <TextField
      fullWidth
      id='name'
      name='name'
      label='নাম'
      placeholder='আব্দুর রহমান'
      {...props}
    />
  );
};

export default UserNameField;
