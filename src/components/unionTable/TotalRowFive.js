import React, { useState, useEffect } from 'react';

import { rowValue } from '../../data';
import { getTotalFromArray } from '../../functions';

const TotalRowFour = ({
  rowOneData,
  rowTwoData,
  rowThreeData,
  rowFourData,
}) => {
  const [row, setRow] = useState({ ...rowValue });

  const getColumnTotal = (name) => {
    let tempArry = [];
    rowOneData.map((item) => {
      if (item[`${name}1`]) return tempArry.push(item[`${name}1`]);
    });
    rowTwoData.map((item) => {
      tempArry.push(item[`${name}2`]);
    });
    rowThreeData.map((item) => {
      tempArry.push(item[`${name}3`]);
    });
    rowFourData.map((item) => {
      tempArry.push(item[`${name}4`]);
    });

    return getTotalFromArray(tempArry);
  };

  useEffect(() => {
    setRow((prev) => {
      return {
        ...prev,
        a: getColumnTotal('a'),
        b: getColumnTotal('b'),
        c: getColumnTotal('c'),
        d: getColumnTotal('d'),
        e: getColumnTotal('e'),
        f: getColumnTotal('f'),
        g: getColumnTotal('g'),
        h: getColumnTotal('h'),
        i: getColumnTotal('i'),
        j: getColumnTotal('j'),
        k: getColumnTotal('k'),
        l: getColumnTotal('l'),
        m: getColumnTotal('m'),
        n: getColumnTotal('n'),
        o: getColumnTotal('o'),
        p: getColumnTotal('p'),
        q: getColumnTotal('q'),
        r: getColumnTotal('r'),
        s: getColumnTotal('s'),
      };
    });
  }, [rowOneData, rowTwoData, rowThreeData, rowFourData]);

  return (
    <tr className='rowFive'>
      <td>মোট</td>
      <td>{row.a}</td>
      <td>{row.b}</td>
      <td>{row.c}</td>
      <td>{row.d}</td>
      <td>{row.e}</td>
      <td>{row.f}</td>
      <td>{row.g}</td>
      <td>{row.h}</td>
      <td>{row.i}</td>
      <td>{row.j}</td>
      <td>{row.k}</td>
      <td>{row.l}</td>
      <td>{row.m}</td>
      <td>{row.n}</td>
      <td>{row.o}</td>
      <td>{row.p}</td>
      <td>{row.q}</td>
      <td>{row.r}</td>
      <td>{row.s}</td>
    </tr>
  );
};

export default TotalRowFour;
