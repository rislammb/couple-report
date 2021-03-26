import React, { useState, useEffect, useContext } from 'react';

import StoreContext from '../store/storeContext';
import { getRowTotal } from '../functions';

const RowFour = (props) => {
  const { storeZeroRowTotal, setStoreZeroRowTotal } = useContext(StoreContext);
  const { rowFour, setRowFour } = props;
  const [rowTotal, setRowTotal] = useState('০');

  useEffect(() => {
    setRowTotal(getRowTotal(rowFour));
  }, [rowFour]);

  useEffect(() => {
    setStoreZeroRowTotal({ ...storeZeroRowTotal, t4: rowTotal });
  }, [rowTotal]);

  return (
    <tr className='rowFour'>
      <td>৩+</td>
      <td>
        <input
          value={rowFour.a4}
          onChange={(e) => setRowFour({ ...rowFour, a4: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowFour.b4}
          onChange={(e) => setRowFour({ ...rowFour, b4: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowFour.c4}
          onChange={(e) => setRowFour({ ...rowFour, c4: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowFour.d4}
          onChange={(e) => setRowFour({ ...rowFour, d4: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowFour.e4}
          onChange={(e) => setRowFour({ ...rowFour, e4: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowFour.f4}
          onChange={(e) => setRowFour({ ...rowFour, f4: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowFour.g4}
          onChange={(e) => setRowFour({ ...rowFour, g4: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowFour.h4}
          onChange={(e) => setRowFour({ ...rowFour, h4: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowFour.i4}
          onChange={(e) => setRowFour({ ...rowFour, i4: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowFour.j4}
          onChange={(e) => setRowFour({ ...rowFour, j4: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowFour.k4}
          onChange={(e) => setRowFour({ ...rowFour, k4: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowFour.l4}
          onChange={(e) => setRowFour({ ...rowFour, l4: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowFour.m4}
          onChange={(e) => setRowFour({ ...rowFour, m4: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowFour.n4}
          onChange={(e) => setRowFour({ ...rowFour, n4: e.target.value })}
        />
      </td>
      <td className='threeTotal'>{rowTotal}</td>
      <td>
        <input
          value={rowFour.p4}
          onChange={(e) => setRowFour({ ...rowFour, p4: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowFour.q4}
          onChange={(e) => setRowFour({ ...rowFour, q4: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowFour.r4}
          onChange={(e) => setRowFour({ ...rowFour, r4: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowFour.s4}
          onChange={(e) => setRowFour({ ...rowFour, s4: e.target.value })}
        />
      </td>
    </tr>
  );
};

export default RowFour;
