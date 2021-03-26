import React, { useContext, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Button,
  TextField,
  LinearProgress,
} from '@material-ui/core';

import YearList from '../components/YearList';
import UnitList from '../components/UnitList';
import FormTable from '../components/FormTable';
import AgeRange from '../components/AgeRange';

import { getYear } from '../functions';
import { rowFourValue, rowOneValue, rowThreeValue, rowTwoValue } from '../data';

import StoreContext from '../store/storeContext';
import { db } from '../store/storeProvider';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '10px',
  },
  topContainer: {
    margin: '15px 0px',
  },
  info: {
    width: 'calc(100% - 142px)',
    minWidth: '1000px',
    display: 'flex',
    margin: '0px auto 10px auto',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  progress: {
    width: '125px',
    display: 'inline-block',
    marginLeft: '9px',
  },
  header: {
    textAlign: 'center',
    color:
      theme.palette.type === 'light'
        ? theme.palette.primary.dark
        : theme.palette.primary.light,
  },
  tableContainer: {
    overflowX: 'auto',
  },
  form: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  formActions: {
    marginTop: 15,
    textAlign: 'center',
  },
}));

const CoupleForm = (props) => {
  const { unionName } = props.match.params;
  const classes = useStyles();
  const { user, authLoading, setStoreZeroRowTotal } = useContext(StoreContext);
  const [rowOne, setRowOne] = useState({ ...rowOneValue });
  const [rowTwo, setRowTwo] = useState({ ...rowTwoValue });
  const [rowThree, setRowThree] = useState({ ...rowThreeValue });
  const [rowFour, setRowFour] = useState({ ...rowFourValue });

  const [riportingYear, setRiportingYear] = useState(getYear());
  const [unit, setUnit] = useState('১ক');
  const [fwaName, setFwaName] = useState('');
  const [ageRange, setAgeRange] = useState('<২০');
  const [submitingData, setSubmitingData] = useState(false);

  const handleClear = () => {
    setRowOne({ ...rowOneValue });
    setRowTwo({ ...rowTwoValue });
    setRowThree({ ...rowThreeValue });
    setRowFour({ ...rowFourValue });
    setStoreZeroRowTotal({ t1: '০', t2: '০', t3: '০', t4: '০' });
  };

  const handleUnitChange = (unitName) => {
    setUnit(unitName);
    setFwaName('');
    setAgeRange('<২০');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitingData(true);

    if (unionName === user.union) {
      db.collection('couple-riport-1')
        .doc(`rajshahi.bagmara.${riportingYear}.${user.union}.${unit}`)
        .get()
        .then((doc) => {
          if (doc.exists) {
            return db
              .collection('couple-riport-1')
              .doc(`rajshahi.bagmara.${riportingYear}.${user.union}.${unit}`)
              .update({
                fwaName,
                [ageRange]: { rowOne, rowTwo, rowThree, rowFour },
              });
          } else {
            return db
              .collection('couple-riport-1')
              .doc(`rajshahi.bagmara.${riportingYear}.${user.union}.${unit}`)
              .set({
                union: user.union,
                riportingYear,
                unit,
                fwaName,
                [ageRange]: { rowOne, rowTwo, rowThree, rowFour },
              });
          }
        })
        .then(() => {
          setSubmitingData(false);
          handleClear();
        })
        .catch((err) => {
          console.log('Data saved Faild!', err);
          setSubmitingData(false);
        });
    } else {
      alert('আপনি এই ফরম পূরণের জন্য অনুমোদিত নন!');
      setSubmitingData(false);
    }
  };

  useEffect(() => {
    db.collection('couple-riport-1')
      .doc(`rajshahi.bagmara.${riportingYear}.${unionName}.${unit}`)
      .get()
      .then((doc) => doc.data())
      .then((dbData) => {
        if (dbData && ageRange) {
          const data = dbData[ageRange];
          setFwaName(dbData.fwaName);
          if (data) {
            setRowOne(data.rowOne);
            setRowTwo(data.rowTwo);
            setRowThree(data.rowThree);
            setRowFour(data.rowFour);
          } else {
            handleClear();
          }
        } else {
          handleClear();
        }
      });
  }, [riportingYear, user, unit, ageRange]);

  return (
    <div className={classes.root}>
      <div className={classes.topContainer}>
        <Typography variant='h5' className={classes.header}>
          সন্তান ও বয়স ভিত্তিক দম্পতিদের বিন্যাস-২০২১
        </Typography>
      </div>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.tableContainer}>
          <div className={classes.info}>
            <Typography component='div'>
              ইউনিয়নঃ{' '}
              {authLoading ? (
                <LinearProgress className={classes.progress} />
              ) : user?.union ? (
                user.union
              ) : (
                ''
              )}
            </Typography>
            <YearList
              riportingYear={riportingYear}
              setRiportingYear={setRiportingYear}
            />
            <UnitList unit={unit} setUnit={handleUnitChange} />
            <TextField
              value={fwaName}
              onChange={(e) => setFwaName(e.target.value)}
              label='এফডব্লিউএ এর নাম'
              placeholder='নাম লিখুন ...'
            />
            <AgeRange ageRange={ageRange} setAgeRange={setAgeRange} />
          </div>
          <FormTable
            ageRange={ageRange}
            rowOne={rowOne}
            setRowOne={setRowOne}
            rowTwo={rowTwo}
            setRowTwo={setRowTwo}
            rowThree={rowThree}
            setRowThree={setRowThree}
            rowFour={rowFour}
            setRowFour={setRowFour}
          />
        </div>
        <div className={classes.formActions}>
          <Button
            color='secondary'
            style={{ marginRight: 10 }}
            variant='contained'
            onClick={handleClear}
          >
            মুছে ফেলুন
          </Button>
          <Button
            disabled={
              unionName !== user?.union ||
              !riportingYear ||
              !unit ||
              !fwaName ||
              !ageRange ||
              submitingData
            }
            color='primary'
            variant='contained'
            type='submit'
          >
            সংরক্ষণ করুন
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CoupleForm;
