import React, { useState, useEffect } from 'react';

import UnitRow from './UnitRow';
import TotalRow from '../TotalRow';

import { rowValue } from '../../data';
import { getTotalFromArray } from '../../functions';

const UnitTotalRange = ({
  zeroRange,
  twentyRange,
  thirtyRange,
  fortyRange,
}) => {
  const [rowOne, setRowOne] = useState({ ...rowValue });
  const [rowTwo, setRowTwo] = useState({ ...rowValue });
  const [rowThree, setRowThree] = useState({ ...rowValue });
  const [rowFour, setRowFour] = useState({ ...rowValue });

  const getCellValue = (rowName, name) => {
    const rowCellData = [
      zeroRange[rowName][name],
      twentyRange[rowName][name],
      thirtyRange[rowName][name],
      fortyRange[rowName][name],
    ];

    return getTotalFromArray(rowCellData);
  };

  useEffect(() => {
    setRowOne((prev) => {
      return {
        ...prev,
        a: getCellValue('rowOne', 'a'),
        b: getCellValue('rowOne', 'b'),
        c: getCellValue('rowOne', 'c'),
        d: getCellValue('rowOne', 'd'),
        e: getCellValue('rowOne', 'e'),
        f: getCellValue('rowOne', 'f'),
        g: getCellValue('rowOne', 'g'),
        h: getCellValue('rowOne', 'h'),
        i: getCellValue('rowOne', 'i'),
        j: getCellValue('rowOne', 'j'),
        k: getCellValue('rowOne', 'k'),
        l: getCellValue('rowOne', 'l'),
        m: getCellValue('rowOne', 'm'),
        n: getCellValue('rowOne', 'n'),
        o: getCellValue('rowOne', 'o'),
        p: getCellValue('rowOne', 'p'),
        q: getCellValue('rowOne', 'q'),
        r: getCellValue('rowOne', 'r'),
        s: getCellValue('rowOne', 's'),
      };
    });

    setRowTwo((prev) => {
      return {
        ...prev,
        a: getCellValue('rowTwo', 'a'),
        b: getCellValue('rowTwo', 'b'),
        c: getCellValue('rowTwo', 'c'),
        d: getCellValue('rowTwo', 'd'),
        e: getCellValue('rowTwo', 'e'),
        f: getCellValue('rowTwo', 'f'),
        g: getCellValue('rowTwo', 'g'),
        h: getCellValue('rowTwo', 'h'),
        i: getCellValue('rowTwo', 'i'),
        j: getCellValue('rowTwo', 'j'),
        k: getCellValue('rowTwo', 'k'),
        l: getCellValue('rowTwo', 'l'),
        m: getCellValue('rowTwo', 'm'),
        n: getCellValue('rowTwo', 'n'),
        o: getCellValue('rowTwo', 'o'),
        p: getCellValue('rowTwo', 'p'),
        q: getCellValue('rowTwo', 'q'),
        r: getCellValue('rowTwo', 'r'),
        s: getCellValue('rowTwo', 's'),
      };
    });

    setRowThree((prev) => {
      return {
        ...prev,
        a: getCellValue('rowThree', 'a'),
        b: getCellValue('rowThree', 'b'),
        c: getCellValue('rowThree', 'c'),
        d: getCellValue('rowThree', 'd'),
        e: getCellValue('rowThree', 'e'),
        f: getCellValue('rowThree', 'f'),
        g: getCellValue('rowThree', 'g'),
        h: getCellValue('rowThree', 'h'),
        i: getCellValue('rowThree', 'i'),
        j: getCellValue('rowThree', 'j'),
        k: getCellValue('rowThree', 'k'),
        l: getCellValue('rowThree', 'l'),
        m: getCellValue('rowThree', 'm'),
        n: getCellValue('rowThree', 'n'),
        o: getCellValue('rowThree', 'o'),
        p: getCellValue('rowThree', 'p'),
        q: getCellValue('rowThree', 'q'),
        r: getCellValue('rowThree', 'r'),
        s: getCellValue('rowThree', 's'),
      };
    });

    setRowFour((prev) => {
      return {
        ...prev,
        a: getCellValue('rowFour', 'a'),
        b: getCellValue('rowFour', 'b'),
        c: getCellValue('rowFour', 'c'),
        d: getCellValue('rowFour', 'd'),
        e: getCellValue('rowFour', 'e'),
        f: getCellValue('rowFour', 'f'),
        g: getCellValue('rowFour', 'g'),
        h: getCellValue('rowFour', 'h'),
        i: getCellValue('rowFour', 'i'),
        j: getCellValue('rowFour', 'j'),
        k: getCellValue('rowFour', 'k'),
        l: getCellValue('rowFour', 'l'),
        m: getCellValue('rowFour', 'm'),
        n: getCellValue('rowFour', 'n'),
        o: getCellValue('rowFour', 'o'),
        p: getCellValue('rowFour', 'p'),
        q: getCellValue('rowFour', 'q'),
        r: getCellValue('rowFour', 'r'),
        s: getCellValue('rowFour', 's'),
      };
    });
  }, [zeroRange, twentyRange, thirtyRange, fortyRange]);
  return (
    <>
      <UnitRow ageRange='সর্বমোট' rowData={rowOne} frist childRange='০' />
      <UnitRow rowData={rowTwo} childRange='১' />
      <UnitRow rowData={rowThree} childRange='২' />
      <UnitRow rowData={rowFour} childRange='৩+' />
      <TotalRow
        rowOne={rowOne}
        rowTwo={rowTwo}
        rowThree={rowThree}
        rowFour={rowFour}
      />
    </>
  );
};

export default UnitTotalRange;
