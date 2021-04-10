import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody } from '@material-ui/core';

import TableHead from '../TableHead';
import FormRow from './FormRow';
import TotalRow from '../TotalRow';

const useStyles = makeStyles({
  table: {
    width: 'calc(100% - 142px)',
    minWidth: '1000px',
    margin: '15px auto',
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
        <FormRow
          ageRange={ageRange}
          rowData={rowOne}
          setRowData={setRowOne}
          childRange='০'
          frist
        />
        <FormRow rowData={rowTwo} setRowData={setRowTwo} childRange='১' />
        <FormRow rowData={rowThree} setRowData={setRowThree} childRange='২' />
        <FormRow rowData={rowFour} setRowData={setRowFour} childRange='৩+' />
        <TotalRow
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
