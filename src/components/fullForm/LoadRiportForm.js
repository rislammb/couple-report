import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import YearList from '../YearList';

import { db } from '../../store/storeProvider';
import { replaceToBangla } from '../../functions';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '25px auto',
    width: '95%',

    '@media print': {
      display: 'none',
    },
  },
  top: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 7,
  },
  formControl: {
    minWidth: 137,
  },
}));

const LoadRiportForm = (props) => {
  const {
    riportingYear,
    setRiportingYear,
    formOption,
    setFormOption,
    districtName,
    upazilaName,
    unionName,
  } = props;
  const classes = useStyles();
  const [listItems, setListItems] = useState([]);
  const [submittedNumber, setSubmittedNumber] = useState('০');

  useEffect(() => {
    setFormOption('');
    if (unionName) setFormOption('ইউনিয়ন');
    else if (upazilaName) setFormOption('উপজেলা');
    else if (districtName) setFormOption('জেলা');
    else setFormOption('');
  }, [unionName, upazilaName, districtName]);

  useEffect(() => {
    if (unionName) {
      return db
        .collection('couple-riport-2')
        .doc(`${districtName}.${upazilaName}.${riportingYear}.${unionName}`)
        .get()
        .then((doc) => {
          let dataObj = doc.data();
          dataObj &&
            setSubmittedNumber(
              replaceToBangla(`${Object.keys(dataObj).length}`)
            );
        });
    } else if (upazilaName) {
      return db
        .collection('couple-riport-3')
        .doc(`${districtName}.${upazilaName}.${riportingYear}`)
        .get()
        .then((doc) => {
          let dataObj = doc.data();
          if (dataObj) {
            let tempItems = [];
            Object.entries(dataObj).map((item) => {
              if (item[1] !== null) return tempItems.push(item[0]);
            });
            setListItems(tempItems);
            setSubmittedNumber(replaceToBangla(`${tempItems.length}`));
          }
        });
    } else if (districtName) {
      return db
        .collection('couple-riport-4')
        .doc(`${districtName}.${riportingYear}`)
        .get()
        .then((doc) => {
          let dataObj = doc.data();
          if (dataObj) {
            let tempItems = [];
            Object.entries(dataObj).map((item) => {
              if (item[1] !== null) return tempItems.push(item[0]);
            });
            setListItems(tempItems);
            setSubmittedNumber(replaceToBangla(`${tempItems.length}`));
          }
        });
    }
  }, [formOption, unionName, upazilaName, districtName]);

  return (
    <div className={classes.root}>
      <div className={classes.top}>
        <YearList
          riportingYear={riportingYear}
          setRiportingYear={setRiportingYear}
        />
        <FormControl className={classes.formControl}>
          <InputLabel id='select-option'>নির্বাচন করুন</InputLabel>

          {unionName ? (
            <Select
              labelId='select-option'
              id='select-option'
              value={formOption}
              onChange={(e) => setFormOption(e.target.value)}
            >
              <MenuItem value='ইউনিয়ন'>ইউনিয়ন</MenuItem>
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
          ) : upazilaName ? (
            <Select
              labelId='select-option'
              id='select-option'
              value={formOption}
              onChange={(e) => setFormOption(e.target.value)}
            >
              <MenuItem value='উপজেলা'>উপজেলা</MenuItem>
              {listItems &&
                listItems.map((item) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
            </Select>
          ) : districtName ? (
            <Select
              labelId='select-option'
              id='select-option'
              value={formOption}
              onChange={(e) => setFormOption(e.target.value)}
            >
              <MenuItem value='জেলা'>জেলা</MenuItem>
              {listItems &&
                listItems.map((item) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
            </Select>
          ) : (
            ''
          )}
        </FormControl>
      </div>
      {formOption === 'ইউনিয়ন' && (
        <Typography color='secondary' style={{ textAlign: 'center' }}>
          {submittedNumber}টি ইউনিটের রিপোর্ট সাবমিট হয়েছে
        </Typography>
      )}
      {formOption === 'উপজেলা' && (
        <Typography color='secondary' style={{ textAlign: 'center' }}>
          {submittedNumber}টি ইউনিয়নের রিপোর্ট সাবমিট হয়েছে
        </Typography>
      )}
      {formOption === 'জেলা' && (
        <Typography color='secondary' style={{ textAlign: 'center' }}>
          {submittedNumber}টি উপজেলার রিপোর্ট সাবমিট হয়েছে
        </Typography>
      )}
    </div>
  );
};

export default LoadRiportForm;
