import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody } from '@material-ui/core';

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
});

const PrintTable = (props) => {
  const { unionName, unit } = props;

  const [zeroRange, setZeroRange] = useState({
    rowOne: { ...rowOneValue },
    rowTwo: { ...rowTwoValue },
    rowThree: { ...rowThreeValue },
    rowFour: { ...rowFourValue },
  });
  const [twentyRange, setTwentyRange] = useState({
    rowOne: { ...rowOneValue },
    rowTwo: { ...rowTwoValue },
    rowThree: { ...rowThreeValue },
    rowFour: { ...rowFourValue },
  });
  const [thirtyRange, setThirtyRange] = useState({
    rowOne: { ...rowOneValue },
    rowTwo: { ...rowTwoValue },
    rowThree: { ...rowThreeValue },
    rowFour: { ...rowFourValue },
  });
  const [fortyRange, setFortyRange] = useState({
    rowOne: { ...rowOneValue },
    rowTwo: { ...rowTwoValue },
    rowThree: { ...rowThreeValue },
    rowFour: { ...rowFourValue },
  });

  useEffect(() => {
    db.collection('couple-riport-1')
      .doc(`rajshahi.bagmara.২০২১.${unionName}.${unit}`)
      .get()
      .then((doc) => doc.data())
      .then((data) => {
        if (data['<২০']) setZeroRange(data['<২০']);
        if (data['২০-২৯']) setTwentyRange(data['২০-২৯']);
        if (data['৩০-৩৯']) setThirtyRange(data['৩০-৩৯']);
        if (data['৪০-৪৯']) setFortyRange(data['৪০-৪৯']);
      });
  }, []);
  const classes = useStyles();

  useEffect(() => {
    let rotates = document.getElementsByClassName('rotate');
    for (let i = 0; i < rotates.length; i++) {
      rotates[i].style.height = rotates[i].offsetWidth + 50 + 'px';
    }
  }, []);

  return (
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
  );
};
export default PrintTable;
