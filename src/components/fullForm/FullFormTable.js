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
import {
  rangeDataFromDB,
  renderAlert,
  getFormNumber,
  getSubmitText,
  getCompletedText,
} from '../../functions';
import FormHeader from './FormHeader';

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

  const [isBtnDisable, setIsBtnDisable] = useState(false);
  const [submitCompleted, setSubmitCompleted] = useState(false);
  const [deleteCompleted, setDeleteCompleted] = useState(false);

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
        user.accountType === '?????????????????? ?????????????????????' &&
        districtName === user.district &&
        upazilaName === user.upazila &&
        unionName === user.union
      ) {
        if (formOption === '??????????????????') {
          // start union
          const getConfirmText = () => {
            if (unionName.includes('???????????????'))
              return `???????????? ?????? ${unionName}??? ????????????????????????????????? ?????????????????? ???????????? ??????????`;
            else
              return `???????????? ?????? ${unionName} ???????????????????????? ????????????????????????????????? ?????????????????? ???????????? ??????????`;
          };

          if (window.confirm(getConfirmText())) {
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
                setIsBtnDisable(true);
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
              `???????????? ?????? ${formOption} ????????????????????? ????????????????????????????????? ?????????????????? ???????????? ??????????`
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
        alert('???????????? ?????? ????????????????????????????????? ???????????????????????? ???????????? ???????????????????????? ??????!');
      }
    } else if (upazilaName) {
      if (
        user.accountType === '?????????????????? ?????????????????????' &&
        districtName === user.district &&
        upazilaName === user.upazila
      ) {
        if (formOption === '??????????????????') {
          // start upazila

          if (
            window.confirm(
              `???????????? ?????? ${upazilaName} ????????????????????? ????????????????????????????????? ?????????????????? ???????????? ??????????`
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
                setIsBtnDisable(true);
                setTimeout(() => {
                  setSubmitCompleted(false);
                }, 4100);
              });
          }

          // end upazila
        } else {
          if (
            window.confirm(
              `???????????? ?????? ${formOption} ???????????????????????? ????????????????????????????????? ??????????????? ???????????? ??????????`
            )
          ) {
            return db
              .collection('couple-riport-3')
              .doc(`${districtName}.${upazilaName}.${riportingYear}`)
              .update({
                [formOption]: null,
              })
              .then(() => {
                setDeleteCompleted(true);
                handleClear();
                setTimeout(() => {
                  setDeleteCompleted(false);
                }, 4100);
              });
          }
        }
      } else {
        if (formOption === '??????????????????') {
          alert('???????????? ?????? ????????????????????????????????? ???????????????????????? ???????????? ???????????????????????? ??????!');
        } else {
          alert('???????????? ?????? ????????????????????????????????? ????????????????????? ???????????? ???????????????????????? ??????!');
        }
      }
    } else if (districtName) {
      if (
        user.accountType === '???????????? ?????????????????????' &&
        districtName === user.district
      ) {
        if (formOption === '????????????') {
          alert('??????????????? ???????????? ???????????????????????? ???????????????????????? ???????????????????????? ????????? ????????? ?????????');
        } else {
          if (
            window.confirm(
              `???????????? ?????? ${formOption} ????????????????????? ????????????????????????????????? ??????????????? ???????????? ??????????`
            )
          ) {
            return db
              .collection('couple-riport-4')
              .doc(`${districtName}.${riportingYear}`)
              .update({
                [formOption]: null,
              })
              .then(() => {
                setDeleteCompleted(true);
                handleClear();
                setTimeout(() => {
                  setDeleteCompleted(false);
                }, 4100);
              });
          }
        }
      } else {
        if (formOption === '????????????') {
          alert('???????????? ?????? ????????????????????????????????? ???????????????????????? ???????????? ???????????????????????? ??????!');
        } else alert('???????????? ?????? ????????????????????????????????? ????????????????????? ???????????? ???????????????????????? ??????!');
      }
    }
  };

  useEffect(() => {
    setDataNull(false);
    setFwaName('');
    handleClear();

    if (unionName) {
      if (formOption === '??????????????????') {
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
                if (item[1] !== null) {
                  newZeroRange.push(item[1].zeroRange);
                  newTwentyRange.push(item[1].twentyRange);
                  newThirtyRange.push(item[1].thirtyRange);
                  newFortyRange.push(item[1].fortyRange);
                }
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
      } else if (
        formOption === '??????' ||
        formOption === '??????' ||
        formOption === '??????' ||
        formOption === '??????' ||
        formOption === '??????' ||
        formOption === '??????' ||
        formOption === '??????' ||
        formOption === '??????' ||
        formOption === '??????'
      ) {
        db.collection('couple-riport-1')
          .doc(
            `${districtName}.${upazilaName}.${riportingYear}.${unionName}.${formOption}`
          )
          .get()
          .then((doc) => doc.data())
          .then((data) => {
            if (data) {
              if (data['<??????']) setZeroRange(data['<??????']);
              else setZeroRange({ ...ageRangeValue });
              if (data['??????-??????']) setTwentyRange(data['??????-??????']);
              else setTwentyRange({ ...ageRangeValue });
              if (data['??????-??????']) setThirtyRange(data['??????-??????']);
              else setThirtyRange({ ...ageRangeValue });
              if (data['??????-??????']) setFortyRange(data['??????-??????']);
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
      if (formOption === '??????????????????') {
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
                if (item[1] !== null) {
                  newZeroRange.push(item[1].zeroRange);
                  newTwentyRange.push(item[1].twentyRange);
                  newThirtyRange.push(item[1].thirtyRange);
                  newFortyRange.push(item[1].fortyRange);
                }
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
      if (formOption === '????????????') {
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
                if (item[1] !== null) {
                  newZeroRange.push(item[1].zeroRange);
                  newTwentyRange.push(item[1].twentyRange);
                  newThirtyRange.push(item[1].thirtyRange);
                  newFortyRange.push(item[1].fortyRange);
                }
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

  useEffect(() => {
    setIsBtnDisable(false);
    if (unionName) {
      if (formOption === '??????????????????') {
        db.collection('couple-riport-3')
          .doc(`${districtName}.${upazilaName}.${riportingYear}`)
          .get()
          .then((doc) => doc.data())
          .then((data) => {
            if (data) {
              Object.entries(data).map((item) => {
                if (item[0] === unionName && item[1] !== null) {
                  setIsBtnDisable(true);
                }
              });
            }
          });
      }
    } else if (upazilaName) {
      if (formOption === '??????????????????') {
        db.collection('couple-riport-4')
          .doc(`${districtName}.${riportingYear}`)
          .get()
          .then((doc) => doc.data())
          .then((data) => {
            if (data) {
              Object.entries(data).map((item) => {
                if (item[0] === upazilaName && item[1] !== null) {
                  setIsBtnDisable(true);
                }
              });
            }
          });
      }
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
                  ???????????? ?????????, ???????????? ?????????
                </Typography>
                <Typography style={{ fontSize: 'inherit' }}>
                  ???????????? ????????????????????? ??????????????????
                </Typography>
              </div>
            </div>
            <div>
              <Typography variant='h5'>
                ?????????????????????????????????????????? ???????????????????????? ???????????????
              </Typography>
              <Typography variant='h6'>?????????????????? ??????????????????????????? ????????????????????????</Typography>
              <Typography variant='h6'>?????????????????? ???????????????</Typography>
            </div>
            <div>
              <Typography className={classes.borderText}>
                ?????????????????? ????????? -{' '}
                {getFormNumber(
                  unionName,
                  upazilaName,
                  districtName,
                  formOption
                )}
              </Typography>
            </div>
          </div>
          <Typography variant='h6'>
            ???????????????????????? ??????????????? ??????????????????????????? ????????? ????????? ?????????????????? ?????????????????? ????????????????????? ??????????????????
            ??????????????????????????? ??? ?????????????????????????????? ???????????? ?????????????????? ?????????
          </Typography>
          <Typography variant='body2'>(???????????? ??????????????? ??????????????????)</Typography>
          <div className={classes.info}>
            <FormHeader
              districtName={districtName}
              upazilaName={upazilaName}
              unionName={unionName}
              formOption={formOption}
            />
            <Typography>???????????? {riportingYear}???????????????</Typography>
          </div>
          <div className='fullFormTable'>
            <div>
              {!stableConnection ? (
                <Alert className={classes.alertText} severity='warning'>
                  ??????????????? ???????????? ???????????? ??????????????????????????? ??????????????? ?????????
                </Alert>
              ) : dataNull ? (
                <Alert className={classes.alertText} severity='warning'>
                  {renderAlert(
                    unionName,
                    upazilaName,
                    districtName,
                    formOption
                  )}{' '}
                  ???????????? ??????????????? ??????????????? ???????????????
                </Alert>
              ) : (
                ''
              )}

              <Table className={classes.table}>
                <TableHead />
                <TableBody>
                  <UnitRange ageRange='<??????' rangeData={zeroRange} />
                  <UnitRange ageRange='??????-??????' rangeData={twentyRange} />
                  <UnitRange ageRange='??????-??????' rangeData={thirtyRange} />
                  <UnitRange ageRange='??????-??????' rangeData={fortyRange} />
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
          disabled={isBtnDisable}
        >
          {getSubmitText(unionName, upazilaName, districtName, formOption)}
        </Button>
        <Button
          color='primary'
          variant='contained'
          onClick={() => window.print()}
        >
          ?????????????????????
        </Button>
      </div>
      {submitCompleted && (
        <Alert className={classes.alertText} severity='success'>
          ??????????????? ?????????????????????????????????{' '}
          {getCompletedText(unionName, upazilaName, districtName, formOption)}{' '}
          ?????????????????? ???????????????
        </Alert>
      )}
      {deleteCompleted && (
        <Alert className={classes.alertText} severity='success'>
          {formOption}??? ????????????????????????????????? ??????????????? ???????????????
        </Alert>
      )}
    </div>
  );
};

export default FullFormTable;
