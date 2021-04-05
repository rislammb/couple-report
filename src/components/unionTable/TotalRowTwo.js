import React, { useState, useEffect } from 'react';

import { rowValue } from '../../data';
import { getTotalFromArray } from '../../functions';

const TotalRowTwo = ({ rowTwoData }) => {
  const [row, setRow] = useState({ ...rowValue });

  const getCellTotal = (name) => {
    let tempArray = [];
    rowTwoData.map((item) => {
      tempArray.push(item[`${name}2`]);
    });
    return getTotalFromArray(tempArray);
  };

  useEffect(() => {
    setRow((prev) => {
      return {
        ...prev,
        a: getCellTotal('a'),
        b: getCellTotal('b'),
        c: getCellTotal('c'),
        d: getCellTotal('d'),
        e: getCellTotal('e'),
        f: getCellTotal('f'),
        g: getCellTotal('g'),
        h: getCellTotal('h'),
        i: getCellTotal('i'),
        j: getCellTotal('j'),
        k: getCellTotal('k'),
        l: getCellTotal('l'),
        m: getCellTotal('m'),
        n: getCellTotal('n'),
        o: getCellTotal('o'),
        p: getCellTotal('p'),
        q: getCellTotal('q'),
        r: getCellTotal('r'),
        s: getCellTotal('s'),
      };
    });
  }, [rowTwoData]);

  return (
    <tr className='rowTwo'>
      <td>১</td>
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

export default TotalRowTwo;