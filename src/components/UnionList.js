import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 75,
  },
}));

const UnionList = (props) => {
  const { union, onChange } = props;
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
        <MenuItem value='০১-গোবিন্দপাড়া'>০১-গোবিন্দপাড়া</MenuItem>
        <MenuItem value='০২-নরদাশ'>০২-নরদাশ</MenuItem>
        <MenuItem value='০৩-দ্বীপপুর'>০৩-দ্বীপপুর</MenuItem>
        <MenuItem value='০৪-বড়বিহানালী'>০৪-বড়বিহানালী</MenuItem>
        <MenuItem value='০৫-আউচপাড়া'>০৫-আউচপাড়া</MenuItem>
        <MenuItem value='০৬-শ্রীপুর'>০৬-শ্রীপুর</MenuItem>
        <MenuItem value='০৭-বাসুপাড়া'>০৭-বাসুপাড়া</MenuItem>
        <MenuItem value='০৮-কাচারীকোয়ালীপাড়া'>০৮-কাচারী কোয়ালীপাড়া</MenuItem>
        <MenuItem value='০৯-শুভডাঙ্গা'>০৯-শুভডাঙ্গা</MenuItem>
        <MenuItem value='১০-মাড়িয়া'>১০-মাড়িয়া</MenuItem>
        <MenuItem value='১১-গণিপুর'>১১-গণিপুর</MenuItem>
        <MenuItem value='১২-ঝিকরা'>১২-ঝিকরা</MenuItem>
        <MenuItem value='১৩-গোয়ালকান্দি'>১৩-গোয়ালকান্দি</MenuItem>
        <MenuItem value='১৪-হামিরকুৎসা'>১৪-হামিরকুৎসা</MenuItem>
        <MenuItem value='১৫-যোগীপাড়া'>১৫-যোগীপাড়া</MenuItem>
        <MenuItem value='১৬-সোনাডাঙ্গা'>১৬-সোনাডাঙ্গা</MenuItem>
        <MenuItem value='বেসরকারী সংস্থা'>বেসরকারী সংস্থা</MenuItem>
      </Select>
    </FormControl>
  );
};

export default UnionList;
