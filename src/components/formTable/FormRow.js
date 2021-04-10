import React, { useEffect, useContext } from 'react';

import StoreContext from '../../store/storeContext';

const FormRow = ({ ageRange, rowData, setRowData, frist, childRange }) => {
  const { storeZeroRowTotal, setStoreZeroRowTotal } = useContext(StoreContext);

  useEffect(() => {
    setStoreZeroRowTotal({ ...storeZeroRowTotal, t1: rowData.o });
  }, [rowData.o]);

  return (
    <tr className='rowData'>
      {frist && (
        <td rowSpan='5' className='rotate'>
          {ageRange}
        </td>
      )}
      <td>{childRange}</td>
      <td>
        <input
          value={rowData.a}
          onChange={(e) => setRowData({ ...rowData, a: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowData.b}
          onChange={(e) => setRowData({ ...rowData, b: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowData.c}
          onChange={(e) => setRowData({ ...rowData, c: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowData.d}
          onChange={(e) => setRowData({ ...rowData, d: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowData.e}
          onChange={(e) => setRowData({ ...rowData, e: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowData.f}
          onChange={(e) => setRowData({ ...rowData, f: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowData.g}
          onChange={(e) => setRowData({ ...rowData, g: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowData.h}
          onChange={(e) => setRowData({ ...rowData, h: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowData.i}
          onChange={(e) => setRowData({ ...rowData, i: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowData.j}
          onChange={(e) => setRowData({ ...rowData, j: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowData.k}
          onChange={(e) => setRowData({ ...rowData, k: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowData.l}
          onChange={(e) => setRowData({ ...rowData, l: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowData.m}
          onChange={(e) => setRowData({ ...rowData, m: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowData.n}
          onChange={(e) => setRowData({ ...rowData, n: e.target.value })}
        />
      </td>
      <td>{rowData.o}</td>
      <td>
        <input
          value={rowData.p}
          onChange={(e) => setRowData({ ...rowData, p: e.target.value })}
        />
      </td>
      <td>
        <input
          value={rowData.q}
          onChange={(e) => setRowData({ ...rowData, q: e.target.value })}
        />
      </td>

      <td className={frist ? 'close' : ''}>
        {!frist && (
          <input
            value={rowData.r}
            onChange={(e) => setRowData({ ...rowData, r: e.target.value })}
          />
        )}
      </td>
      <td>
        <input
          value={rowData.s}
          onChange={(e) => setRowData({ ...rowData, s: e.target.value })}
        />
      </td>
    </tr>
  );
};

export default FormRow;
