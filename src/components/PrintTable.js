import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, Typography, Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import TableHead from './TableHead';

import PrintRowOne from './PrintRowOne';
import PrintRowTwo from './PrintRowTwo';
import PrintRowThree from './PrintRowThree';
import PrintRowFour from './PrintRowFour';
import PrintRowFive from './PrintRowFive';

import UnionZeroRange from './unionTable/UnionZeroRange';
import UnionTwentyRange from './unionTable/UnionTwentyRange';
import UnionThirtyRange from './unionTable/UnionThirtyRange';
import UnionFortyRange from './unionTable/UnionFortyRange';
import UnionTotalRange from './unionTable/UnionTotalRange';

import RowOne from './totalRows/RowOne';
import RowTwo from './totalRows/RowTwo';
import RowThree from './totalRows/RowThree';
import RowFour from './totalRows/RowFour';
import TotalRowFive from './totalRows/RowFive';

import { db } from '../store/storeProvider';

import StoreContext from '../store/storeContext';

import { rowOneValue, rowTwoValue, rowThreeValue, rowFourValue } from '../data';

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
  footerContainer: {
    display: 'none',
    '@media print': {
      display: 'block',
    },
  },
  footerTextContainer: {
    display: 'flex',
  },
  date: { flex: 1, textAlign: 'left' },
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
  alert: {
    position: 'fixed',
    maxWidth: '90%',
    left: 7,
    top: 7,
  },
});

const ageRangeValue = {
  rowOne: { ...rowOneValue },
  rowTwo: { ...rowTwoValue },
  rowThree: { ...rowThreeValue },
  rowFour: { ...rowFourValue },
};

const PrintTable = (props) => {
  const classes = useStyles();
  const { user, riportingYear, unionName, unit } = props;
  const {
    storeZeroRowTotal,
    storeTwentyRowTotal,
    storeThirtyRowTotal,
    storeFortyRowTotal,
  } = useContext(StoreContext);
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

  const handleDataSubmit = () => {
    setSubmitCompleted(false);

    if (unionName === user.union) {
      if (unit) {
        if (
          window.confirm(`আপনি কি ${unit} ইউনিটের প্রতিবেদনটি সাবমিট করতে চান?`)
        ) {
          const newZeroRange = {
            ...zeroRange,
            rowOne: { ...zeroRange.rowOne, o1: storeZeroRowTotal.t1 },
            rowTwo: { ...zeroRange.rowTwo, o2: storeZeroRowTotal.t2 },
            rowThree: { ...zeroRange.rowThree, o3: storeZeroRowTotal.t3 },
            rowFour: { ...zeroRange.rowFour, o4: storeZeroRowTotal.t4 },
          };
          const newTwentyRange = {
            ...twentyRange,
            rowOne: { ...twentyRange.rowOne, o1: storeTwentyRowTotal.t1 },
            rowTwo: { ...twentyRange.rowTwo, o2: storeTwentyRowTotal.t2 },
            rowThree: { ...twentyRange.rowThree, o3: storeTwentyRowTotal.t3 },
            rowFour: { ...twentyRange.rowFour, o4: storeTwentyRowTotal.t4 },
          };
          const newThirtyRange = {
            ...thirtyRange,
            rowOne: { ...thirtyRange.rowOne, o1: storeThirtyRowTotal.t1 },
            rowTwo: { ...thirtyRange.rowTwo, o2: storeThirtyRowTotal.t2 },
            rowThree: { ...thirtyRange.rowThree, o3: storeThirtyRowTotal.t3 },
            rowFour: { ...thirtyRange.rowFour, o4: storeThirtyRowTotal.t4 },
          };
          const newFortyRange = {
            ...fortyRange,
            rowOne: { ...fortyRange.rowOne, o1: storeFortyRowTotal.t1 },
            rowTwo: { ...fortyRange.rowTwo, o2: storeFortyRowTotal.t2 },
            rowThree: { ...fortyRange.rowThree, o3: storeFortyRowTotal.t3 },
            rowFour: { ...fortyRange.rowFour, o4: storeFortyRowTotal.t4 },
          };
          const dataToSubmit = {
            riportingYear,
            unionName,
            unit,
            fwaName,
            zeroRange: newZeroRange,
            twentyRange: newTwentyRange,
            thirtyRange: newThirtyRange,
            fortyRange: newFortyRange,
          };

          return db
            .collection('couple-riport-2')
            .doc(`rajshahi.bagmara.${riportingYear}.${user.union}`)
            .get()
            .then((doc) => {
              if (doc.exists) {
                return db
                  .collection('couple-riport-2')
                  .doc(`rajshahi.bagmara.${riportingYear}.${user.union}`)
                  .update({
                    [unit]: dataToSubmit,
                  })
                  .catch((err) => console.log('riport submitted err', err));
              } else {
                console.log('nai');
                return db
                  .collection('couple-riport-2')
                  .doc(`rajshahi.bagmara.${riportingYear}.${user.union}`)
                  .set({
                    [unit]: dataToSubmit,
                  })
                  .catch((err) => console.log('riport submitted err', err));
              }
            })
            .then(() => {
              setSubmitCompleted(true);
              setTimeout(() => {
                setSubmitCompleted(false);
              }, 4700);
            });
        }
      } else {
        alert('উপজেলায় সাবমিটের কাজ এখনো শুরু করা হয়নি');
      }
    } else {
      alert('আপনি এই রিপোর্ট সাবমিটের জন্য অনুমোদিত নন!');
    }
  };

  useEffect(() => {
    setDataNull(false);
    setFwaName('');
    setZeroRange({ ...ageRangeValue });
    setTwentyRange({ ...ageRangeValue });
    setThirtyRange({ ...ageRangeValue });
    setFortyRange({ ...ageRangeValue });
    if (unit) {
      db.collection('couple-riport-1')
        .doc(`rajshahi.bagmara.${riportingYear}.${unionName}.${unit}`)
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
            setZeroRange({ ...ageRangeValue });
            setTwentyRange({ ...ageRangeValue });
            setThirtyRange({ ...ageRangeValue });
            setFortyRange({ ...ageRangeValue });
            setTimeout(() => {
              setDataNull(false);
            }, 3700);
          }
        })
        .catch((err) => {
          if (err.code === 'unavailable') {
            setStableConnection(false);
            setTimeout(() => {
              setStableConnection(true);
            }, 3700);
          }
        });
    } else {
      db.collection('couple-riport-2')
        .doc(`rajshahi.bagmara.${riportingYear}.${unionName}`)
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
            }, 3700);
          }
        })
        .catch((err) => {
          if (err.code === 'unavailable') {
            setStableConnection(false);
            setTimeout(() => {
              setStableConnection(true);
            }, 4700);
          }
        });
    }
  }, [riportingYear, unionName, unit]);

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
                দম্পতি ফরম - {unit ? '১' : '২'}
              </Typography>
            </div>
          </div>
          <Typography variant='h6'>
            ইউনিয়নের সক্ষম দম্পতিদের বয়স এবং সন্তান সংখ্যা অনুযায়ী পদ্ধতি
            গ্রহণকারী ও অগ্রহণকারী তথ্য সংগ্রহ ফরম
          </Typography>
          <Typography variant='body2'>(বছরে একবার পূরণীয়)</Typography>
          <div className={classes.info}>
            <Typography>ইউনিয়নঃ {unionName}</Typography>
            {unit && <Typography>ইউনিটঃ {unit}</Typography>}
            <Typography>উপজেলাঃ বাগমারা</Typography>
            <Typography>জেলাঃ রাজশাহী</Typography>
            <Typography>বছরঃ {riportingYear}খ্রিঃ</Typography>
          </div>
          <div className='printTable'>
            <div>
              {!stableConnection ? (
                <Alert className={classes.alert} severity='warning'>
                  ফরমের তথ্য পেতে ইন্টারনেট সংযোগ দিন
                </Alert>
              ) : dataNull ? (
                <Alert className={classes.alert} severity='warning'>
                  {unionName.includes('এনজিও')
                    ? `${unionName} এর`
                    : `${unionName} ইউনিয়নের`}{' '}
                  {unit && `${unit} ইউনিটের`} তথ্য খুঁজে পাওয়া যায়নি
                </Alert>
              ) : (
                ''
              )}

              <Table className={classes.table}>
                <TableHead />
                {unit ? (
                  <TableBody>
                    <PrintRowOne ageRange='<২০' rowOne={zeroRange.rowOne} />
                    <PrintRowTwo ageRange='<২০' rowTwo={zeroRange.rowTwo} />
                    <PrintRowThree
                      ageRange='<২০'
                      rowThree={zeroRange.rowThree}
                    />
                    <PrintRowFour ageRange='<২০' rowFour={zeroRange.rowFour} />
                    <PrintRowFive
                      ageRange='<২০'
                      rowOne={zeroRange.rowOne}
                      rowTwo={zeroRange.rowTwo}
                      rowThree={zeroRange.rowThree}
                      rowFour={zeroRange.rowFour}
                    />

                    <PrintRowOne ageRange='২০-২৯' rowOne={twentyRange.rowOne} />
                    <PrintRowTwo ageRange='২০-২৯' rowTwo={twentyRange.rowTwo} />
                    <PrintRowThree
                      ageRange='২০-২৯'
                      rowThree={twentyRange.rowThree}
                    />
                    <PrintRowFour
                      ageRange='২০-২৯'
                      rowFour={twentyRange.rowFour}
                    />
                    <PrintRowFive
                      ageRange='২০-২৯'
                      rowOne={twentyRange.rowOne}
                      rowTwo={twentyRange.rowTwo}
                      rowThree={twentyRange.rowThree}
                      rowFour={twentyRange.rowFour}
                    />

                    <PrintRowOne ageRange='৩০-৩৯' rowOne={thirtyRange.rowOne} />
                    <PrintRowTwo ageRange='৩০-৩৯' rowTwo={thirtyRange.rowTwo} />
                    <PrintRowThree
                      ageRange='৩০-৩৯'
                      rowThree={thirtyRange.rowThree}
                    />
                    <PrintRowFour
                      ageRange='৩০-৩৯'
                      rowFour={thirtyRange.rowFour}
                    />
                    <PrintRowFive
                      ageRange='৩০-৩৯'
                      rowOne={thirtyRange.rowOne}
                      rowTwo={thirtyRange.rowTwo}
                      rowThree={thirtyRange.rowThree}
                      rowFour={thirtyRange.rowFour}
                    />

                    <PrintRowOne ageRange='৪০-৪৯' rowOne={fortyRange.rowOne} />
                    <PrintRowTwo ageRange='৪০-৪৯' rowTwo={fortyRange.rowTwo} />
                    <PrintRowThree
                      ageRange='৪০-৪৯'
                      rowThree={fortyRange.rowThree}
                    />
                    <PrintRowFour
                      ageRange='৪০-৪৯'
                      rowFour={fortyRange.rowFour}
                    />
                    <PrintRowFive
                      ageRange='৪০-৪৯'
                      rowOne={fortyRange.rowOne}
                      rowTwo={fortyRange.rowTwo}
                      rowThree={fortyRange.rowThree}
                      rowFour={fortyRange.rowFour}
                    />

                    <RowOne
                      ageRange='সর্বমোট'
                      zeroRowOne={zeroRange.rowOne}
                      twentyRowOne={twentyRange.rowOne}
                      thirtyRowOne={thirtyRange.rowOne}
                      fortyRowOne={fortyRange.rowOne}
                    />
                    <RowTwo
                      zeroRowTwo={zeroRange.rowTwo}
                      twentyRowTwo={twentyRange.rowTwo}
                      thirtyRowTwo={thirtyRange.rowTwo}
                      fortyRowTwo={fortyRange.rowTwo}
                    />

                    <RowThree
                      zeroRowThree={zeroRange.rowThree}
                      twentyRowThree={twentyRange.rowThree}
                      thirtyRowThree={thirtyRange.rowThree}
                      fortyRowThree={fortyRange.rowThree}
                    />

                    <RowFour
                      zeroRowFour={zeroRange.rowFour}
                      twentyRowFour={twentyRange.rowFour}
                      thirtyRowFour={thirtyRange.rowFour}
                      fortyRowFour={fortyRange.rowFour}
                    />
                    <TotalRowFive
                      zeroRange={zeroRange}
                      twentyRange={twentyRange}
                      thirtyRange={thirtyRange}
                      fortyRange={fortyRange}
                    />
                  </TableBody>
                ) : (
                  <TableBody>
                    <UnionZeroRange unionZeroRange={unionZeroRange} />
                    <UnionTwentyRange unionTwentyRange={unionTwentyRange} />
                    <UnionThirtyRange unionThirtyRange={unionThirtyRange} />
                    <UnionFortyRange unionFortyRange={unionFortyRange} />
                    <UnionTotalRange
                      unionZeroRange={unionZeroRange}
                      unionTwentyRange={unionTwentyRange}
                      unionThirtyRange={unionThirtyRange}
                      unionFortyRange={unionFortyRange}
                    />
                  </TableBody>
                )}
              </Table>
              <div className={classes.footerContainer}>
                <br />
                <br />
                <br />
                <br />
                <div className={classes.footerTextContainer}>
                  <Typography className={classes.date}>তারিখঃ</Typography>
                  {unionName.includes('এনজিও') ? (
                    <div>
                      <Typography>{unionName}</Typography>
                      <Typography>বাগমারা, রাজশাহী।</Typography>
                    </div>
                  ) : unit ? (
                    <div>
                      {fwaName && <Typography>( {fwaName} )</Typography>}
                      <Typography>পরিবার কলাণ সহকারী</Typography>
                      <Typography>
                        {unit} ইউনিট, {unionName} ইউনিয়ন
                      </Typography>
                      <Typography>বাগমারা, রাজশাহী।</Typography>
                    </div>
                  ) : (
                    <div>
                      <Typography>( {user.name} )</Typography>
                      <Typography>পরিবার পরিকল্পনা পরিদর্শক</Typography>
                      <Typography>{unionName} ইউনিয়ন</Typography>
                      <Typography>বাগমারা, রাজশাহী।</Typography>
                    </div>
                  )}
                </div>
              </div>
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
          {unit ? 'ইউনিয়নে' : 'উপজেলায়'} সাবমিট
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
        <Alert className={classes.alert} severity='success'>
          আপনার {unit} ইউনিটের প্রতিবেদনটি সাবমিট হয়েছে
        </Alert>
      )}
    </div>
  );
};
export default PrintTable;
