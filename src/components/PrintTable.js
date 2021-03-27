import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import TableHead from './TableHead';

import PrintRowOne from './PrintRowOne';
import PrintRowTwo from './PrintRowTwo';
import PrintRowThree from './PrintRowThree';
import PrintRowFour from './PrintRowFour';
import PrintRowFive from './PrintRowFive';

import RowOne from './totalRows/RowOne';
import RowTwo from './totalRows/RowTwo';
import RowThree from './totalRows/RowThree';
import RowFour from './totalRows/RowFour';
import TotalRowFive from './totalRows/RowFive';

import { db } from '../store/storeProvider';

import { rowOneValue, rowTwoValue, rowThreeValue, rowFourValue } from '../data';

const useStyles = makeStyles({
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
  const { riportingYear, unionName, unit } = props;
  const [dataNull, setDataNull] = useState(false);

  const [zeroRange, setZeroRange] = useState({ ...ageRangeValue });
  const [twentyRange, setTwentyRange] = useState({ ...ageRangeValue });
  const [thirtyRange, setThirtyRange] = useState({ ...ageRangeValue });
  const [fortyRange, setFortyRange] = useState({ ...ageRangeValue });

  useEffect(() => {
    setDataNull(false);
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
      });
  }, [riportingYear, unionName, unit]);

  useEffect(() => {
    let rotates = document.getElementsByClassName('rotate');
    for (let i = 0; i < rotates.length; i++) {
      rotates[i].style.height = rotates[i].offsetWidth + 50 + 'px';
    }
  }, []);

  return (
    <div>
      {dataNull && (
        <Alert className={classes.alert} severity='warning'>
          {unionName} ইউনিয়নের {unit} ইউনিটের তথ্য খুঁজে পাওয়া যায়নি
        </Alert>
      )}
      <Table className={classes.table}>
        <TableHead />
        <TableBody>
          <PrintRowOne ageRange='<২০' rowOne={zeroRange.rowOne} />
          <PrintRowTwo ageRange='<২০' rowTwo={zeroRange.rowTwo} />
          <PrintRowThree ageRange='<২০' rowThree={zeroRange.rowThree} />
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
          <PrintRowThree ageRange='২০-২৯' rowThree={twentyRange.rowThree} />
          <PrintRowFour ageRange='২০-২৯' rowFour={twentyRange.rowFour} />
          <PrintRowFive
            ageRange='২০-২৯'
            rowOne={twentyRange.rowOne}
            rowTwo={twentyRange.rowTwo}
            rowThree={twentyRange.rowThree}
            rowFour={twentyRange.rowFour}
          />

          <PrintRowOne ageRange='৩০-৩৯' rowOne={thirtyRange.rowOne} />
          <PrintRowTwo ageRange='৩০-৩৯' rowTwo={thirtyRange.rowTwo} />
          <PrintRowThree ageRange='৩০-৩৯' rowThree={thirtyRange.rowThree} />
          <PrintRowFour ageRange='৩০-৩৯' rowFour={thirtyRange.rowFour} />
          <PrintRowFive
            ageRange='৩০-৩৯'
            rowOne={thirtyRange.rowOne}
            rowTwo={thirtyRange.rowTwo}
            rowThree={thirtyRange.rowThree}
            rowFour={thirtyRange.rowFour}
          />

          <PrintRowOne ageRange='৪০-৪৯' rowOne={fortyRange.rowOne} />
          <PrintRowTwo ageRange='৪০-৪৯' rowTwo={fortyRange.rowTwo} />
          <PrintRowThree ageRange='৪০-৪৯' rowThree={fortyRange.rowThree} />
          <PrintRowFour ageRange='৪০-৪৯' rowFour={fortyRange.rowFour} />
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
      </Table>
    </div>
  );
};
export default PrintTable;
