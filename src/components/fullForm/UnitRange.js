import React from 'react';

import UnitRow from './UnitRow';
import TotalRow from '../TotalRow';

const UnitRange = ({ ageRange, rangeData }) => {
  console.log('unit range');
  return (
    <>
      <UnitRow
        ageRange={ageRange}
        rowData={rangeData.rowOne}
        frist
        childRange='০'
      />
      <UnitRow rowData={rangeData.rowTwo} childRange='১' />
      <UnitRow rowData={rangeData.rowThree} childRange='২' />
      <UnitRow rowData={rangeData.rowFour} childRange='৩+' />
      <TotalRow
        rowOne={rangeData.rowOne}
        rowTwo={rangeData.rowTwo}
        rowThree={rangeData.rowThree}
        rowFour={rangeData.rowFour}
      />
    </>
  );
};

export default UnitRange;
