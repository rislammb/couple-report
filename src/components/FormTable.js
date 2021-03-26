import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody } from '@material-ui/core';

import TableHead from './TableHead';
import RowOne from './RowOne';
import RowTwo from './RowTwo';
import RowThree from './RowThree';
import RowFour from './RowFour';
import RowFive from './RowFive';

const useStyles = makeStyles({
  table: {
    width: 'calc(100% - 142px)',
    minWidth: '1000px',
    margin: '15px auto',
    // '& thead tr': {
    //   height: '230px',
    // },
    // '& thead tr th': {
    //   transform: 'rotate(-90deg)',
    //   width: '230px',
    //   height: '230px',
    // },
    // '& th, td': {
    //   border: '1px solid #333',
    // },
  },
  th: {
    // // transformOrigin: '0 0',
    // transform: 'rotate(-90deg)',
  },
});

const FormTable = (props) => {
  const {
    ageRange,
    rowOne,
    setRowOne,
    rowTwo,
    setRowTwo,
    rowThree,
    setRowThree,
    rowFour,
    setRowFour,
  } = props;
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
        <RowOne ageRange={ageRange} rowOne={rowOne} setRowOne={setRowOne} />
        <RowTwo rowTwo={rowTwo} setRowTwo={setRowTwo} />
        <RowThree rowThree={rowThree} setRowThree={setRowThree} />
        <RowFour rowFour={rowFour} setRowFour={setRowFour} />
        <RowFive
          rowOne={rowOne}
          rowTwo={rowTwo}
          rowThree={rowThree}
          rowFour={rowFour}
        />
      </TableBody>
    </Table>
  );
};
export default FormTable;
