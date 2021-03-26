import React, { useState, useEffect, useContext } from 'react';

import StoreContext from '../store/storeContext';
import { getRowTotal } from '../functions';

const RowOne = (props) => {
  const { storeZeroRowTotal, setStoreZeroRowTotal } = useContext(StoreContext);
  const { ageRange, rowOne, setRowOne } = props;
  const [rowTotal, setRowTotal] = useState('০');

  useEffect(() => {
    setRowTotal(getRowTotal(rowOne));
  }, [rowOne]);

  useEffect(() => {
    setStoreZeroRowTotal({ ...storeZeroRowTotal, t1: rowTotal });
  }, [rowTotal]);

  return (
    <tr className='rowOne'>
      <td rowSpan='5' className='rotate'>
        {ageRange}
      </td>
      <td>০</td>
      <td>
        <input
          value={rowOne.a1}
          onChange={(e) => setRowOne({ ...rowOne, a1: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowOne.b1}
          onChange={(e) => setRowOne({ ...rowOne, b1: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowOne.c1}
          onChange={(e) => setRowOne({ ...rowOne, c1: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowOne.d1}
          onChange={(e) => setRowOne({ ...rowOne, d1: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowOne.e1}
          onChange={(e) => setRowOne({ ...rowOne, e1: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowOne.f1}
          onChange={(e) => setRowOne({ ...rowOne, f1: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowOne.g1}
          onChange={(e) => setRowOne({ ...rowOne, g1: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowOne.h1}
          onChange={(e) => setRowOne({ ...rowOne, h1: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowOne.i1}
          onChange={(e) => setRowOne({ ...rowOne, i1: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowOne.j1}
          onChange={(e) => setRowOne({ ...rowOne, j1: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowOne.k1}
          onChange={(e) => setRowOne({ ...rowOne, k1: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowOne.l1}
          onChange={(e) => setRowOne({ ...rowOne, l1: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowOne.m1}
          onChange={(e) => setRowOne({ ...rowOne, m1: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowOne.n1}
          onChange={(e) => setRowOne({ ...rowOne, n1: e.target.value })}
        />
      </td>
      <td>{rowTotal}</td>
      <td>
        <input
          value={rowOne.p1}
          onChange={(e) => setRowOne({ ...rowOne, p1: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowOne.q1}
          onChange={(e) => setRowOne({ ...rowOne, q1: e.target.value })}
        />
      </td>

      <td className='close'></td>
      <td>
        <input
          value={rowOne.s1}
          onChange={(e) => setRowOne({ ...rowOne, s1: e.target.value })}
        />
      </td>
    </tr>
  );
};

export default RowOne;
