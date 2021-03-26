import React, { useState, useEffect, useContext } from 'react';

import StoreContext from '../store/storeContext';
import { getRowTotal } from '../functions';

const RowThree = (props) => {
  const { storeZeroRowTotal, setStoreZeroRowTotal } = useContext(StoreContext);
  const { rowThree, setRowThree } = props;
  const [rowTotal, setRowTotal] = useState('০');

  useEffect(() => {
    setRowTotal(getRowTotal(rowThree));
  }, [rowThree]);

  useEffect(() => {
    setStoreZeroRowTotal({ ...storeZeroRowTotal, t3: rowTotal });
  }, [rowTotal]);

  return (
    <tr className='rowThree'>
      <td>২</td>
      <td>
        <input
          value={rowThree.a3}
          onChange={(e) => setRowThree({ ...rowThree, a3: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowThree.b3}
          onChange={(e) => setRowThree({ ...rowThree, b3: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowThree.c3}
          onChange={(e) => setRowThree({ ...rowThree, c3: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowThree.d3}
          onChange={(e) => setRowThree({ ...rowThree, d3: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowThree.e3}
          onChange={(e) => setRowThree({ ...rowThree, e3: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowThree.f3}
          onChange={(e) => setRowThree({ ...rowThree, f3: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowThree.g3}
          onChange={(e) => setRowThree({ ...rowThree, g3: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowThree.h3}
          onChange={(e) => setRowThree({ ...rowThree, h3: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowThree.i3}
          onChange={(e) => setRowThree({ ...rowThree, i3: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowThree.j3}
          onChange={(e) => setRowThree({ ...rowThree, j3: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowThree.k3}
          onChange={(e) => setRowThree({ ...rowThree, k3: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowThree.l3}
          onChange={(e) => setRowThree({ ...rowThree, l3: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowThree.m3}
          onChange={(e) => setRowThree({ ...rowThree, m3: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowThree.n3}
          onChange={(e) => setRowThree({ ...rowThree, n3: e.target.value })}
        />
      </td>
      <td className='twoTotal'>{rowTotal}</td>
      <td>
        <input
          value={rowThree.p3}
          onChange={(e) => setRowThree({ ...rowThree, p3: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowThree.q3}
          onChange={(e) => setRowThree({ ...rowThree, q3: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowThree.r3}
          onChange={(e) => setRowThree({ ...rowThree, r3: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowThree.s3}
          onChange={(e) => setRowThree({ ...rowThree, s3: e.target.value })}
        />
      </td>
    </tr>
  );
};

export default RowThree;
