import React, { useState, useEffect, useContext } from 'react';

import StoreContext from '../store/storeContext';
import { getRowTotal } from '../functions';

const RowTwo = (props) => {
  const { storeZeroRowTotal, setStoreZeroRowTotal } = useContext(StoreContext);
  const { rowTwo, setRowTwo } = props;

  const [rowTotal, setRowTotal] = useState('০');

  useEffect(() => {
    setRowTotal(getRowTotal(rowTwo));
  }, [rowTwo]);

  useEffect(() => {
    setStoreZeroRowTotal({ ...storeZeroRowTotal, t2: rowTotal });
  }, [rowTotal]);

  return (
    <tr className='rowTwo'>
      <td>১</td>
      <td>
        <input
          value={rowTwo.a2}
          onChange={(e) => setRowTwo({ ...rowTwo, a2: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowTwo.b2}
          onChange={(e) => setRowTwo({ ...rowTwo, b2: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowTwo.c2}
          onChange={(e) => setRowTwo({ ...rowTwo, c2: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowTwo.d2}
          onChange={(e) => setRowTwo({ ...rowTwo, d2: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowTwo.e2}
          onChange={(e) => setRowTwo({ ...rowTwo, e2: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowTwo.f2}
          onChange={(e) => setRowTwo({ ...rowTwo, f2: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowTwo.g2}
          onChange={(e) => setRowTwo({ ...rowTwo, g2: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowTwo.h2}
          onChange={(e) => setRowTwo({ ...rowTwo, h2: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowTwo.i2}
          onChange={(e) => setRowTwo({ ...rowTwo, i2: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowTwo.j2}
          onChange={(e) => setRowTwo({ ...rowTwo, j2: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowTwo.k2}
          onChange={(e) => setRowTwo({ ...rowTwo, k2: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowTwo.l2}
          onChange={(e) => setRowTwo({ ...rowTwo, l2: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowTwo.m2}
          onChange={(e) => setRowTwo({ ...rowTwo, m2: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowTwo.n2}
          onChange={(e) => setRowTwo({ ...rowTwo, n2: e.target.value })}
        />
      </td>
      <td className='oneTotal'>{rowTotal}</td>
      <td>
        <input
          value={rowTwo.p2}
          onChange={(e) => setRowTwo({ ...rowTwo, p2: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowTwo.q2}
          onChange={(e) => setRowTwo({ ...rowTwo, q2: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowTwo.r2}
          onChange={(e) => setRowTwo({ ...rowTwo, r2: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowTwo.s2}
          onChange={(e) => setRowTwo({ ...rowTwo, s2: e.target.value })}
        />
      </td>
    </tr>
  );
};

export default RowTwo;
