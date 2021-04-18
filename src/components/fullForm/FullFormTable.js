import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, Typography, Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import TableHead from '../TableHead';

import UnitRange from './UnitRange';
import UnitTotalRange from './UnitTotalRange';

import FormFooter from './FormFooter';

import { db } from '../../store/storeProvider';

import { rowValue } from '../../data';
import { rangeDataFromDB } from '../../functions';

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

  const [submitCompleted, setSubmitCompleted] = useState(false);

  const handleClear = () => {
    setZeroRange({ ...ageRangeValue });
    setTwentyRange({ ...ageRangeValue });
    setThirtyRange({ ...ageRangeValue });
    setFortyRange({ ...ageRangeValue });
  };

  const handleDataSubmit = () => {
    setSubmitCompleted(false);

    if (unionName) {
      if (
        user.accountType === 'ইউনিয়ন একাউন্ট' &&
        districtName === user.district &&
        upazilaName === user.upazila &&
        unionName === user.union
      ) {
        if (formOption === 'ইউনিয়ন') {
          // start union

          if (
            window.confirm(
              `আপনি কি ${unionName} ইউনিয়নের প্রতিবেদনটি সাবমিট করতে চান?`
            )
          ) {
            const dataToSubmit = {
              riportingYear,
              districtName,
              upazilaName,
              unionName,
              zeroRange,
              twentyRange,
              thirtyRange,
              fortyRange,
            };

            return db
              .collection('couple-riport-3')
              .doc(`${districtName}.${upazilaName}.${riportingYear}`)
              .get()
              .then((doc) => {
                if (doc.exists) {
                  return db
                    .collection('couple-riport-3')
                    .doc(`${districtName}.${upazilaName}.${riportingYear}`)
                    .update({
                      [unionName]: dataToSubmit,
                    })
                    .catch((err) => console.log('riport submitted err', err));
                } else {
                  return db
                    .collection('couple-riport-3')
                    .doc(`${districtName}.${upazilaName}.${riportingYear}`)
                    .set({
                      [unionName]: dataToSubmit,
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

          // end union
        } else {
          // start unit

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
              .doc(
                `${districtName}.${upazilaName}.${riportingYear}.${unionName}`
              )
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

          // end unit
        }
      } else {
        alert('আপনি এই প্রতিবেদনটি সাবমিটের জন্য অনুমেদিত নন!');
      }
    } else if (upazilaName) {
      if (
        user.accountType === 'উপজেলা একাউন্ট' &&
        districtName === user.district &&
        upazilaName === user.upazila
      ) {
        if (formOption === 'উপজেলা') {
          // start upazila

          if (
            window.confirm(
              `আপনি কি ${upazilaName} উপজেলার প্রতিবেদনটি সাবমিট করতে চান?`
            )
          ) {
            const dataToSubmit = {
              riportingYear,
              districtName,
              upazilaName,
              zeroRange,
              twentyRange,
              thirtyRange,
              fortyRange,
            };

            return db
              .collection('couple-riport-4')
              .doc(`${districtName}.${riportingYear}`)
              .get()
              .then((doc) => {
                if (doc.exists) {
                  return db
                    .collection('couple-riport-4')
                    .doc(`${districtName}.${riportingYear}`)
                    .update({
                      [upazilaName]: dataToSubmit,
                    })
                    .catch((err) => console.log('riport submitted err', err));
                } else {
                  return db
                    .collection('couple-riport-4')
                    .doc(`${districtName}.${riportingYear}`)
                    .set({
                      [upazilaName]: dataToSubmit,
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

          // end upazila
        } else alert('আপনি এই প্রতিবেদনটি সাবমিটের জন্য অনুমেদিত নন!');
      } else {
        alert('আপনি এই প্রতিবেদনটি সাবমিটের জন্য অনুমেদিত নন!');
      }
    } else if (districtName) {
      if (
        user.accountType === 'জেলা একাউন্ট' &&
        districtName === user.district
      ) {
        if (formOption === 'জেলা') {
          alert('জেলার তথ্য সাবমিটের ব্যবস্থা প্রয়োজনে পরে করা হবে');
        } else alert('আপনি এই প্রতিবেদনটি সাবমিটের জন্য অনুমেদিত নন!');
      } else alert('আপনি এই প্রতিবেদনটি সাবমিটের জন্য অনুমেদিত নন!');
    }
  };

  useEffect(() => {
    setDataNull(false);
    setFwaName('');
    handleClear();

    if (unionName) {
      if (formOption === 'ইউনিয়ন') {
        db.collection('couple-riport-2')
          .doc(`${districtName}.${upazilaName}.${riportingYear}.${unionName}`)
          .get()
          .then((doc) => doc.data())
          .then(async (data) => {
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

              setZeroRange(await rangeDataFromDB(newZeroRange));
              setTwentyRange(await rangeDataFromDB(newTwentyRange));
              setThirtyRange(await rangeDataFromDB(newThirtyRange));
              setFortyRange(await rangeDataFromDB(newFortyRange));
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
    } else if (upazilaName) {
      if (formOption === 'উপজেলা') {
        db.collection('couple-riport-3')
          .doc(`${districtName}.${upazilaName}.${riportingYear}`)
          .get()
          .then((doc) => doc.data())
          .then(async (data) => {
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
              setZeroRange(await rangeDataFromDB(newZeroRange));
              setTwentyRange(await rangeDataFromDB(newTwentyRange));
              setThirtyRange(await rangeDataFromDB(newThirtyRange));
              setFortyRange(await rangeDataFromDB(newFortyRange));
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
      } else {
        db.collection('couple-riport-3')
          .doc(`${districtName}.${upazilaName}.${riportingYear}`)
          .get()
          .then((doc) => doc.data())
          .then((data) => {
            if (data) {
              setZeroRange(data[formOption].zeroRange);
              setTwentyRange(data[formOption].twentyRange);
              setThirtyRange(data[formOption].thirtyRange);
              setFortyRange(data[formOption].fortyRange);
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
    } else if (districtName) {
      if (formOption === 'জেলা') {
        db.collection('couple-riport-4')
          .doc(`${districtName}.${riportingYear}`)
          .get()
          .then((doc) => doc.data())
          .then(async (data) => {
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
              setZeroRange(await rangeDataFromDB(newZeroRange));
              setTwentyRange(await rangeDataFromDB(newTwentyRange));
              setThirtyRange(await rangeDataFromDB(newThirtyRange));
              setFortyRange(await rangeDataFromDB(newFortyRange));
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
      } else {
        db.collection('couple-riport-4')
          .doc(`${districtName}.${riportingYear}`)
          .get()
          .then((doc) => doc.data())
          .then((data) => {
            if (data) {
              setZeroRange(data[formOption].zeroRange);
              setTwentyRange(data[formOption].twentyRange);
              setThirtyRange(data[formOption].thirtyRange);
              setFortyRange(data[formOption].fortyRange);
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
    }
  }, [riportingYear, districtName, upazilaName, unionName, formOption]);

  const getFormNumber = () => {
    if (unionName) {
      if (formOption === 'ইউনিয়ন') return '২';
      else return '১';
    } else if (upazilaName) {
      if (formOption === 'উপজেলা') return '৩';
      else return '২';
    } else if (districtName) {
      if (formOption === 'জেলা') return '৪';
      else return '৩';
    } else return '';
  };

  const getSubmitText = () => {
    if (unionName) {
      if (formOption === 'ইউনিয়ন') return 'উপজেলায়';
      else return 'ইউনিয়নে';
    } else if (upazilaName) {
      if (formOption === 'উপজেলা') return 'জেলায়';
      else return 'উপজেলায়';
    } else if (districtName) {
      if (formOption === 'জেলা') return 'বিভাগে';
      else return 'জেলায়';
    } else return '';
  };

  useEffect(() => {
    let rotates = document.getElementsByClassName('rotate');
    for (let i = 0; i < rotates.length; i++) {
      rotates[i].style.height = rotates[i].offsetWidth + 50 + 'px';
    }
  }, []);

  const renderAlert = () => {
    if (unionName) {
      if (formOption !== 'ইউনিয়ন') {
        if (unionName.includes('এনজিও')) {
          return `${unionName} এর ${formOption} ইউনিটের`;
        } else {
          return `${unionName} ইউনিয়নের ${formOption} ইউনিটের`;
        }
      } else {
        if (unionName.includes('এনজিও')) {
          return `${unionName} এর`;
        } else {
          return `${unionName} ইউনিয়নের`;
        }
      }
    } else if (upazilaName) {
      if (formOption !== 'উপজেলা') {
        return `${formOption} ইউনিয়নের`;
      } else {
        return `${upazilaName} উপজেলার`;
      }
    } else if (districtName) {
      if (formOption !== 'জেলা') {
        return `${formOption} উপজেলার`;
      } else {
        return `${districtName} জেলার`;
      }
    }
  };

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
                দম্পতি ফরম - {getFormNumber()}
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
          <div className='fullFormTable'>
            <div>
              {!stableConnection ? (
                <Alert className={classes.alertText} severity='warning'>
                  ফরমের তথ্য পেতে ইন্টারনেট সংযোগ দিন
                </Alert>
              ) : dataNull ? (
                <Alert className={classes.alertText} severity='warning'>
                  {renderAlert()} তথ্য খুঁজে পাওয়া যায়নি
                </Alert>
              ) : (
                ''
              )}

              <Table className={classes.table}>
                <TableHead />
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
              </Table>
              <FormFooter
                districtName={districtName}
                upazilaName={upazilaName}
                unionName={unionName}
                formOption={formOption}
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
          {getSubmitText()} সাবমিট
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
          {unionName
            ? formOption && formOption !== 'ইউনিয়ন'
              ? 'ইউনিয়নে'
              : 'উপজেলায়'
            : upazilaName
            ? 'জেলায়'
            : districtName
            ? 'বিভাগে'
            : ''}{' '}
          সাবমিট হয়েছে
        </Alert>
      )}
    </div>
  );
};

export default FullFormTable;
