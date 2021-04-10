import React, { useState, useEffect } from 'react';

import { rowValue } from '../../data';
import { getTotalFromArray } from '../../functions';

const UnionRow = ({ ageRange, rangeData, rowName, frist, childRange }) => {
  const [rowData, setRowData] = useState({ ...rowValue });

  useEffect(() => {
    setRowData((prev) => {
      return {
        ...prev,
        a: getTotalFromArray(rangeData.map((unit) => unit[rowName].a)),
        b: getTotalFromArray(rangeData.map((unit) => unit[rowName].b)),
        c: getTotalFromArray(rangeData.map((unit) => unit[rowName].c)),
        d: getTotalFromArray(rangeData.map((unit) => unit[rowName].d)),
        e: getTotalFromArray(rangeData.map((unit) => unit[rowName].e)),
        f: getTotalFromArray(rangeData.map((unit) => unit[rowName].e)),
        g: getTotalFromArray(rangeData.map((unit) => unit[rowName].g)),
        h: getTotalFromArray(rangeData.map((unit) => unit[rowName].h)),
        i: getTotalFromArray(rangeData.map((unit) => unit[rowName].i)),
        j: getTotalFromArray(rangeData.map((unit) => unit[rowName].j)),
        k: getTotalFromArray(rangeData.map((unit) => unit[rowName].k)),
        l: getTotalFromArray(rangeData.map((unit) => unit[rowName].l)),
        m: getTotalFromArray(rangeData.map((unit) => unit[rowName].m)),
        n: getTotalFromArray(rangeData.map((unit) => unit[rowName].n)),
        o: getTotalFromArray(rangeData.map((unit) => unit[rowName].o)),
        p: getTotalFromArray(rangeData.map((unit) => unit[rowName].p)),
        q: getTotalFromArray(rangeData.map((unit) => unit[rowName].q)),
        r: getTotalFromArray(rangeData.map((unit) => unit[rowName].r)),
        s: getTotalFromArray(rangeData.map((unit) => unit[rowName].s)),
      };
    });
  }, [rangeData]);

  return (
    <tr>
      {frist && (
        <td rowSpan='5' className='rotate'>
          {ageRange}
        </td>
      )}
      <td>{childRange}</td>
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
      <td className={frist ? 'close' : ''}>{!frist && rowData.r}</td>
      <td>{rowData.s}</td>
    </tr>
  );
};

export default UnionRow;
