import React, { useState, useEffect } from 'react';

import UnionRow from './UnionRow';
import UnitRow from './UnitRow';
import { rowValue } from '../../data';
import { getTotalFromArray } from '../../functions';

const UnionRange = ({ ageRange, unionRangeData }) => {
  const [totalRow, setTotalRow] = useState({ ...rowValue });

  console.log('union range');

  const getRowData = (name) => {
    let cellData = [];
    unionRangeData.map((row) => {
      return cellData.push(
        row.rowOne[name],
        row.rowTwo[name],
        row.rowThree[name],
        row.rowFour[name]
      );
    });

    return getTotalFromArray(cellData);
  };

  useEffect(() => {
    if (unionRangeData) {
      return setTotalRow((prev) => {
        return {
          ...prev,
          a: getRowData('a'),
          b: getRowData('b'),
          c: getRowData('c'),
          d: getRowData('d'),
          e: getRowData('e'),
          f: getRowData('f'),
          g: getRowData('g'),
          h: getRowData('h'),
          i: getRowData('i'),
          j: getRowData('j'),
          k: getRowData('k'),
          l: getRowData('l'),
          m: getRowData('m'),
          n: getRowData('n'),
          o: getRowData('o'),
          p: getRowData('p'),
          q: getRowData('q'),
          r: getRowData('r'),
          s: getRowData('s'),
        };
      });
    }
  }, [unionRangeData]);

  return (
    <>
      <UnionRow
        ageRange={ageRange}
        rangeData={unionRangeData}
        rowName='rowOne'
        frist
        childRange='০'
      />
      <UnionRow rangeData={unionRangeData} rowName='rowTwo' childRange='১' />
      <UnionRow rangeData={unionRangeData} rowName='rowThree' childRange='২' />
      <UnionRow rangeData={unionRangeData} rowName='rowFour' childRange='৩+' />
      <UnitRow rowData={totalRow} childRange='মোট' />
    </>
  );
};

export default UnionRange;
