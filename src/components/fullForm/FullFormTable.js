import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, Typography, Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import TableHead from '../TableHead';

import UnitRange from './UnitRange';
import UnitTotalRange from './UnitTotalRange';
import UnionRange from './UnionRange';
import UnionTotalRange from './UnionTotalRange';

import FormFooter from './FormFooter';

import { db } from '../../store/storeProvider';

import { rowValue } from '../../data';

const useStyles = makeStyles({
  printContainer: {
    overflowX: 'auto',
  },
  printArea: {
    width: 'calc(100% - 142px)',
    minWidth: '1000px',
    margin: '0px auto',
    textAlign: 'center',
    padding: '10px',
  },
  topContainer: {
    margin: '0px 0px 15px 0px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-between',
  },
  borderText: { fontSize: 14, border: '1px solid #888', padding: 5 },
  info: {
    marginTop: 5,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  table: {
    margin: '15px auto',
    '& .rotate.age div': {
      marginLeft: '-83px',
    },
    '& .rotate.normal p': {
      marginLeft: '-55px',
    },
    '& .rotate, .total': {
      marginLeft: '-105px',
    },
    '& .rotate.not-accept div': {
      marginLeft: '-91px',
    },
    '& .rotate.pregnant div': {
      marginLeft: '-123px',
    },
    '& .rotate.hb-nai div': {
      marginLeft: '-93px',
    },
  },
  alert: {
    position: 'fixed',
    maxWidth: '90%',
    left: 7,
    top: 7,
  },
  btnContainer: {
    textAlign: 'center',
    paddingTop: 10,
    '& button': {
      margin: '0px 10px',
    },
    '@media print': {
      display: 'none',
    },
  },
  alertText: {
    position: 'fixed',
    maxWidth: '90%',
    left: 7,
    top: 7,
  },
});

const ageRangeValue = {
  rowOne: { ...rowValue },
  rowTwo: { ...rowValue },
  rowThree: { ...rowValue },
  rowFour: { ...rowValue },
};

const FullFormTable = (props) => {
  const classes = useStyles();
  const {
    user,
    riportingYear,
    districtName,
    upazilaName,
    unionName,
    formOption,
  } = props;
  const [dataNull, setDataNull] = useState(false);
  const [stableConnection, setStableConnection] = useState(true);

  const [fwaName, setFwaName] = useState('');
  const [zeroRange, setZeroRange] = useState({ ...ageRangeValue });
  const [twentyRange, setTwentyRange] = useState({ ...ageRangeValue });
  const [thirtyRange, setThirtyRange] = useState({ ...ageRangeValue });
  const [fortyRange, setFortyRange] = useState({ ...ageRangeValue });

  const [unionZeroRange, setUnionZeroRange] = useState([]);
  const [unionTwentyRange, setUnionTwentyRange] = useState([]);
  const [unionThirtyRange, setUnionThirtyRange] = useState([]);
  const [unionFortyRange, setUnionFortyRange] = useState([]);
  const [submitCompleted, setSubmitCompleted] = useState(false);

  const handleClear = () => {
    setZeroRange({ ...ageRangeValue });
    setTwentyRange({ ...ageRangeValue });
    setThirtyRange({ ...ageRangeValue });
    setFortyRange({ ...ageRangeValue });
  };

  const handleDataSubmit = () => {
    setSubmitCompleted(false);

    if (
      (districtName === user.district,
      upazilaName === user.upazila,
      unionName === user.union)
    ) {
      if (
        formOption === 'জেলা' ||
        formOption === 'উপজেলা' ||
        formOption === 'ইউনিয়ন'
      ) {
        alert(`${formOption} সাবমিটের কাজ এখনো শুরু করা হয়নি`);
      } else {
        if (
          window.confirm(
            `আপনি কি ${formOption} ইউনিটের প্রতিবেদনটি সাবমিট করতে চান?`
          )
        ) {
          const dataToSubmit = {
            riportingYear,
            districtName,
            upazilaName,
            unionName,
            unit: formOption,
            fwaName,
            zeroRange,
            twentyRange,
            thirtyRange,
            fortyRange,
          };
          return db
            .collection('couple-riport-2')
            .doc(`${districtName}.${upazilaName}.${riportingYear}.${unionName}`)
            .get()
            .then((doc) => {
              if (doc.exists) {
                return db
                  .collection('couple-riport-2')
                  .doc(
                    `${districtName}.${upazilaName}.${riportingYear}.${unionName}`
                  )
                  .update({
                    [formOption]: dataToSubmit,
                  })
                  .catch((err) => console.log('riport submitted err', err));
              } else {
                return db
                  .collection('couple-riport-2')
                  .doc(
                    `${districtName}.${upazilaName}.${riportingYear}.${unionName}`
                  )
                  .set({
                    [formOption]: dataToSubmit,
                  })
                  .catch((err) => console.log('riport submitted err', err));
              }
            })
            .then(() => {
              setSubmitCompleted(true);
              setTimeout(() => {
                setSubmitCompleted(false);
              }, 4100);
            });
        }
      }
    } else {
      alert('আপনি এই রিপোর্ট সাবমিটের জন্য অনুমোদিত নন!');
    }
  };

  useEffect(() => {
    setDataNull(false);
    setFwaName('');
    handleClear();
    if (
      formOption === 'জেলা' ||
      formOption === 'উপজেলা' ||
      formOption === 'ইউনিয়ন'
    ) {
      db.collection('couple-riport-2')
        .doc(`${districtName}.${upazilaName}.${riportingYear}.${unionName}`)
        .get()
        .then((doc) => doc.data())
        .then((data) => {
          if (data) {
            let newZeroRange = [];
            let newTwentyRange = [];
            let newThirtyRange = [];
            let newFortyRange = [];
            Object.entries(data).map((item) => {
              newZeroRange.push(item[1].zeroRange);
              newTwentyRange.push(item[1].twentyRange);
              newThirtyRange.push(item[1].thirtyRange);
              newFortyRange.push(item[1].fortyRange);
            });
            setUnionZeroRange(newZeroRange);
            setUnionTwentyRange(newTwentyRange);
            setUnionThirtyRange(newThirtyRange);
            setUnionFortyRange(newFortyRange);
          } else {
            setDataNull(true);
            setUnionZeroRange([]);
            setUnionTwentyRange([]);
            setUnionThirtyRange([]);
            setUnionFortyRange([]);
            setTimeout(() => {
              setDataNull(false);
            }, 4100);
          }
        })
        .catch((err) => {
          if (err.code === 'unavailable') {
            setStableConnection(false);
            setTimeout(() => {
              setStableConnection(true);
            }, 4100);
          }
        });
    } else {
      db.collection('couple-riport-1')
        .doc(
          `${districtName}.${upazilaName}.${riportingYear}.${unionName}.${formOption}`
        )
        .get()
        .then((doc) => doc.data())
        .then((data) => {
          if (data) {
            if (data['<২০']) setZeroRange(data['<২০']);
            else setZeroRange({ ...ageRangeValue });
            if (data['২০-২৯']) setTwentyRange(data['২০-২৯']);
            else setTwentyRange({ ...ageRangeValue });
            if (data['৩০-৩৯']) setThirtyRange(data['৩০-৩৯']);
            else setThirtyRange({ ...ageRangeValue });
            if (data['৪০-৪৯']) setFortyRange(data['৪০-৪৯']);
            else setFortyRange({ ...ageRangeValue });
            if (data.fwaName) setFwaName(data.fwaName);
            else setFwaName('');
          } else {
            setDataNull(true);
            handleClear();
            setTimeout(() => {
              setDataNull(false);
            }, 4100);
          }
        })
        .catch((err) => {
          if (err.code === 'unavailable') {
            setStableConnection(false);
            setTimeout(() => {
              setStableConnection(true);
            }, 4100);
          }
        });
    }
  }, [riportingYear, districtName, upazilaName, unionName, formOption]);

  useEffect(() => {
    let rotates = document.getElementsByClassName('rotate');
    for (let i = 0; i < rotates.length; i++) {
      rotates[i].style.height = rotates[i].offsetWidth + 50 + 'px';
    }
  }, []);

  return (
    <div>
      <div className={classes.printContainer}>
        <div className={classes.printArea}>
          <div className={classes.topContainer}>
            <div>
              <div className={classes.borderText}>
                <Typography style={{ fontSize: 'inherit' }}>
                  ছেলে হোক, মেয়ে হোক
                </Typography>
                <Typography style={{ fontSize: 'inherit' }}>
                  দুটি সন্তানই যথেষ্ট
                </Typography>
              </div>
            </div>
            <div>
              <Typography variant='h5'>
                গণপ্রজাতন্ত্রী বাংলাদেশ সরকার
              </Typography>
              <Typography variant='h6'>পরিবার পরিকল্পনা অধিদপ্তর</Typography>
              <Typography variant='h6'>এমআইএস ইউনিট</Typography>
            </div>
            <div>
              <Typography className={classes.borderText}>
                দম্পতি ফরম -{' '}
                {formOption === 'জেলা'
                  ? '৪'
                  : formOption === 'উপজেলা'
                  ? '৩'
                  : formOption === 'ইউনিয়ন'
                  ? '২'
                  : '১'}
              </Typography>
            </div>
          </div>
          <Typography variant='h6'>
            ইউনিয়নের সক্ষম দম্পতিদের বয়স এবং সন্তান সংখ্যা অনুযায়ী পদ্ধতি
            গ্রহণকারী ও অগ্রহণকারী তথ্য সংগ্রহ ফরম
          </Typography>
          <Typography variant='body2'>(বছরে একবার পূরণীয়)</Typography>
          <div className={classes.info}>
            {formOption === 'জেলা' ? (
              <Typography>জেলাঃ {districtName}</Typography>
            ) : formOption === 'উপজেলা' ? (
              <>
                <Typography>উপজেলাঃ {upazilaName}</Typography>
                <Typography>জেলাঃ {districtName}</Typography>
              </>
            ) : formOption === 'ইউনিয়ন' ? (
              <>
                <Typography>ইউনিয়নঃ {unionName}</Typography>
                <Typography>উপজেলাঃ {upazilaName}</Typography>
                <Typography>জেলাঃ {districtName}</Typography>
              </>
            ) : (
              <>
                <Typography>ইউনিটঃ {formOption}</Typography>
                <Typography>ইউনিয়নঃ {unionName}</Typography>
                <Typography>উপজেলাঃ {upazilaName}</Typography>
                <Typography>জেলাঃ {districtName}</Typography>
              </>
            )}
            <Typography>বছরঃ {riportingYear}খ্রিঃ</Typography>
          </div>
          <div className='FullFormTable'>
            <div>
              {!stableConnection ? (
                <Alert className={classes.alertText} severity='warning'>
                  ফরমের তথ্য পেতে ইন্টারনেট সংযোগ দিন
                </Alert>
              ) : dataNull ? (
                <Alert className={classes.alertText} severity='warning'>
                  {unionName.includes('এনজিও')
                    ? `${unionName} এর`
                    : `${unionName} ইউনিয়নের`}{' '}
                  {(formOption !== 'জেলা' ||
                    formOption !== 'উপজেলা' ||
                    formOption !== 'ইউনিয়ন') &&
                    `${formOption} ইউনিটের`}{' '}
                  তথ্য খুঁজে পাওয়া যায়নি
                </Alert>
              ) : (
                ''
              )}

              <Table className={classes.table}>
                <TableHead />
                {formOption === 'জেলা' ||
                formOption === 'উপজেলা' ||
                formOption === 'ইউনিয়ন' ? (
                  <TableBody>
                    <UnionRange
                      ageRange='<২০'
                      unionRangeData={unionZeroRange}
                    />
                    <UnionRange
                      ageRange='২০-২৯'
                      unionRangeData={unionTwentyRange}
                    />
                    <UnionRange
                      ageRange='৩০-৩৯'
                      unionRangeData={unionThirtyRange}
                    />
                    <UnionRange
                      ageRange='৪০-৪৯'
                      unionRangeData={unionFortyRange}
                    />
                    <UnionTotalRange
                      zeroRange={unionZeroRange}
                      twentyRange={unionTwentyRange}
                      thirtyRange={unionThirtyRange}
                      fortyRange={unionFortyRange}
                    />
                  </TableBody>
                ) : (
                  <TableBody>
                    <UnitRange ageRange='<২০' rangeData={zeroRange} />
                    <UnitRange ageRange='২০-২৯' rangeData={twentyRange} />
                    <UnitRange ageRange='৩০-৩৯' rangeData={thirtyRange} />
                    <UnitRange ageRange='৪০-৪৯' rangeData={fortyRange} />
                    <UnitTotalRange
                      zeroRange={zeroRange}
                      twentyRange={twentyRange}
                      thirtyRange={thirtyRange}
                      fortyRange={fortyRange}
                    />
                  </TableBody>
                )}
              </Table>
              <FormFooter
                districtName={districtName}
                upazilaName={upazilaName}
                unionName={unionName}
                fwaName={fwaName}
                formOption={formOption}
                user={user}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.btnContainer}>
        <Button
          color='secondary'
          variant='contained'
          onClick={handleDataSubmit}
        >
          {formOption == 'জেলা'
            ? 'বিভাগে'
            : formOption === 'উপজেলা'
            ? 'জেলায়'
            : formOption === 'ইউনিয়ন'
            ? 'উপজেলায়'
            : 'ইউনিয়নে'}{' '}
          সাবমিট
        </Button>
        <Button
          color='primary'
          variant='contained'
          onClick={() => window.print()}
        >
          প্রিন্ট
        </Button>
      </div>
      {submitCompleted && (
        <Alert className={classes.alertText} severity='success'>
          আপনার প্রতিবেদনটি{' '}
          {formOption == 'জেলা'
            ? 'বিভাগে'
            : formOption === 'উপজেলা'
            ? 'জেলায়'
            : formOption === 'ইউনিয়ন'
            ? 'উপজেলায়'
            : 'ইউনিয়নে'}{' '}
          সাবমিট হয়েছে
        </Alert>
      )}
    </div>
  );
};
export default FullFormTable;
