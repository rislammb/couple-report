import React, { useState, useEffect } from 'react';

import { getTotalFromArray } from '../functions';
import { rowValue } from '../data';

const TotalRow = (props) => {
  const { rowOne, rowTwo, rowThree, rowFour } = props;
  const [rowData, setRowData] = useState({ ...rowValue });

  useEffect(() => {
    setRowData({ ...rowValue });
    setRowData((prev) => {
      return {
        ...prev,
        a: getTotalFromArray([rowOne.a, rowTwo.a, rowThree.a, rowFour.a]),
        b: getTotalFromArray([rowOne.b, rowTwo.b, rowThree.b, rowFour.b]),
        c: getTotalFromArray([rowOne.c, rowTwo.c, rowThree.c, rowFour.c]),
        d: getTotalFromArray([rowOne.d, rowTwo.d, rowThree.d, rowFour.d]),
        e: getTotalFromArray([rowOne.e, rowTwo.e, rowThree.e, rowFour.e]),
        f: getTotalFromArray([rowOne.f, rowTwo.f, rowThree.f, rowFour.f]),
        g: getTotalFromArray([rowOne.g, rowTwo.g, rowThree.g, rowFour.g]),
        h: getTotalFromArray([rowOne.h, rowTwo.h, rowThree.h, rowFour.h]),
        i: getTotalFromArray([rowOne.i, rowTwo.i, rowThree.i, rowFour.i]),
        j: getTotalFromArray([rowOne.j, rowTwo.j, rowThree.j, rowFour.j]),
        k: getTotalFromArray([rowOne.k, rowTwo.k, rowThree.k, rowFour.k]),
        l: getTotalFromArray([rowOne.l, rowTwo.l, rowThree.l, rowFour.l]),
        m: getTotalFromArray([rowOne.m, rowTwo.m, rowThree.m, rowFour.m]),
        n: getTotalFromArray([rowOne.n, rowTwo.n, rowThree.n, rowFour.n]),
        o: getTotalFromArray([rowOne.o, rowTwo.o, rowThree.o, rowFour.o]),
        p: getTotalFromArray([rowOne.p, rowTwo.p, rowThree.p, rowFour.p]),
        q: getTotalFromArray([rowOne.q, rowTwo.q, rowThree.q, rowFour.q]),
        r: getTotalFromArray([rowOne.r, rowTwo.r, rowThree.r, rowFour.r]),
        s: getTotalFromArray([rowOne.s, rowTwo.s, rowThree.s, rowFour.s]),
      };
    });
  }, [rowOne, rowTwo, rowThree, rowFour]);

  return (
    <tr className='TotalRow'>
      <td>মোট</td>
      <td>{rowData.a}</td>
      <td>{rowData.b}</td>
      <td>{rowData.c}</td>
      <td>{rowData.d}</td>
      <td>{rowData.e}</td>
      <td>{rowData.f}</td>
      <td>{rowData.g}</td>
      <td>{rowData.h}</td>
      <td>{rowData.i}</td>
      <td>{rowData.j}</td>
      <td>{rowData.k}</td>
      <td>{rowData.l}</td>
      <td>{rowData.m}</td>
      <td>{rowData.n}</td>
      <td>{rowData.o}</td>
      <td>{rowData.p}</td>
      <td>{rowData.q}</td>
      <td>{rowData.r}</td>
      <td>{rowData.s}</td>
    </tr>
  );
};

export default TotalRow;
