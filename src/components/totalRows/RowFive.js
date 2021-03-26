import React, { useState, useEffect, useContext } from 'react';

import StoreContext from '../../store/storeContext';
import {
  getCellATotal,
  getCellBTotal,
  getCellCTotal,
  getCellDTotal,
  getCellETotal,
  getCellFTotal,
  getCellGTotal,
  getCellHTotal,
  getCellITotal,
  getCellJTotal,
  getCellKTotal,
  getCellLTotal,
  getCellMTotal,
  getCellNTotal,
  getCellPTotal,
  getCellQTotal,
  getCellRTotal,
  getCellSTotal,
  getTotal,
} from '../../functions';
import { rowTotalValue } from '../../data';

const RowFive = (props) => {
  const {
    storeZeroRowTotal,
    storeTwentyRowTotal,
    storeThirtyRowTotal,
    storeFortyRowTotal,
  } = useContext(StoreContext);
  const { zeroRange, twentyRange, thirtyRange, fortyRange } = props;
  const [totalRow, setTotalRow] = useState({ ...rowTotalValue });

  const getTotalOfTotal = () => {
    return getTotal(
      storeZeroRowTotal.t1,
      storeZeroRowTotal.t2,
      storeZeroRowTotal.t3,
      storeZeroRowTotal.t4,
      storeTwentyRowTotal.t1,
      storeTwentyRowTotal.t2,
      storeTwentyRowTotal.t3,
      storeTwentyRowTotal.t4,
      storeThirtyRowTotal.t1,
      storeThirtyRowTotal.t2,
      storeThirtyRowTotal.t3,
      storeThirtyRowTotal.t4,
      storeFortyRowTotal.t1,
      storeFortyRowTotal.t2,
      storeFortyRowTotal.t3,
      storeFortyRowTotal.t4
    );
  };

  useEffect(() => {
    setTotalRow({
      a: getCellATotal(zeroRange, twentyRange, thirtyRange, fortyRange),
      b: getCellBTotal(zeroRange, twentyRange, thirtyRange, fortyRange),
      c: getCellCTotal(zeroRange, twentyRange, thirtyRange, fortyRange),
      d: getCellDTotal(zeroRange, twentyRange, thirtyRange, fortyRange),
      e: getCellETotal(zeroRange, twentyRange, thirtyRange, fortyRange),
      f: getCellFTotal(zeroRange, twentyRange, thirtyRange, fortyRange),
      g: getCellGTotal(zeroRange, twentyRange, thirtyRange, fortyRange),
      h: getCellHTotal(zeroRange, twentyRange, thirtyRange, fortyRange),
      i: getCellITotal(zeroRange, twentyRange, thirtyRange, fortyRange),
      j: getCellJTotal(zeroRange, twentyRange, thirtyRange, fortyRange),
      k: getCellKTotal(zeroRange, twentyRange, thirtyRange, fortyRange),
      l: getCellLTotal(zeroRange, twentyRange, thirtyRange, fortyRange),
      m: getCellMTotal(zeroRange, twentyRange, thirtyRange, fortyRange),
      n: getCellNTotal(zeroRange, twentyRange, thirtyRange, fortyRange),
      o: getTotalOfTotal(),
      p: getCellPTotal(zeroRange, twentyRange, thirtyRange, fortyRange),
      q: getCellQTotal(zeroRange, twentyRange, thirtyRange, fortyRange),
      r: getCellRTotal(zeroRange, twentyRange, thirtyRange, fortyRange),
      s: getCellSTotal(zeroRange, twentyRange, thirtyRange, fortyRange),
    });
  }, [zeroRange, twentyRange, thirtyRange, fortyRange]);

  return (
    <tr className='rowFive'>
      <td>মোট</td>
      <td>{totalRow.a}</td>
      <td>{totalRow.b}</td>
      <td>{totalRow.c}</td>
      <td>{totalRow.d}</td>
      <td>{totalRow.e}</td>
      <td>{totalRow.f}</td>
      <td>{totalRow.g}</td>
      <td>{totalRow.h}</td>
      <td>{totalRow.i}</td>
      <td>{totalRow.j}</td>
      <td>{totalRow.k}</td>
      <td>{totalRow.l}</td>
      <td>{totalRow.m}</td>
      <td>{totalRow.n}</td>
      <td>{totalRow.o}</td>
      <td>{totalRow.p}</td>
      <td>{totalRow.q}</td>
      <td>{totalRow.r}</td>
      <td>{totalRow.s}</td>
    </tr>
  );
};

export default RowFive;
