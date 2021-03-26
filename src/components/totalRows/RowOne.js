import React, { useState, useEffect } from 'react';

import { getTotal, getTotalRowTotal } from '../../functions';

const RowOne = (props) => {
  const {
    ageRange,
    zeroRowOne,
    twentyRowOne,
    thirtyRowOne,
    fortyRowOne,
  } = props;
  const [rowTotal, setRowTotal] = useState('০');

  useEffect(() => {
    setRowTotal(
      getTotalRowTotal(zeroRowOne, twentyRowOne, thirtyRowOne, fortyRowOne)
    );
  }, [zeroRowOne, twentyRowOne, thirtyRowOne, fortyRowOne]);

  return (
    <tr className='rowOne'>
      <td rowSpan='5' className='rotate'>
        {ageRange}
      </td>
      <td>০</td>
      <td>
        {getTotal(
          zeroRowOne.a1,
          twentyRowOne.a1,
          thirtyRowOne.a1,
          fortyRowOne.a1
        )}
      </td>
      <td>
        {getTotal(
          zeroRowOne.b1,
          twentyRowOne.b1,
          thirtyRowOne.b1,
          fortyRowOne.b1
        )}
      </td>
      <td>
        {getTotal(
          zeroRowOne.c1,
          twentyRowOne.c1,
          thirtyRowOne.c1,
          fortyRowOne.c1
        )}
      </td>
      <td>
        {getTotal(
          zeroRowOne.d1,
          twentyRowOne.d1,
          thirtyRowOne.d1,
          fortyRowOne.d1
        )}
      </td>
      <td>
        {getTotal(
          zeroRowOne.e1,
          twentyRowOne.e1,
          thirtyRowOne.e1,
          fortyRowOne.e1
        )}
      </td>
      <td>
        {getTotal(
          zeroRowOne.f1,
          twentyRowOne.f1,
          thirtyRowOne.f1,
          fortyRowOne.f1
        )}
      </td>
      <td>
        {getTotal(
          zeroRowOne.g1,
          twentyRowOne.g1,
          thirtyRowOne.g1,
          fortyRowOne.g1
        )}
      </td>
      <td>
        {getTotal(
          zeroRowOne.h1,
          twentyRowOne.h1,
          thirtyRowOne.h1,
          fortyRowOne.h1
        )}
      </td>
      <td>
        {getTotal(
          zeroRowOne.i1,
          twentyRowOne.i1,
          thirtyRowOne.i1,
          fortyRowOne.i1
        )}
      </td>
      <td>
        {getTotal(
          zeroRowOne.j1,
          twentyRowOne.j1,
          thirtyRowOne.j1,
          fortyRowOne.j1
        )}
      </td>
      <td>
        {getTotal(
          zeroRowOne.k1,
          twentyRowOne.k1,
          thirtyRowOne.k1,
          fortyRowOne.k1
        )}
      </td>
      <td>
        {getTotal(
          zeroRowOne.l1,
          twentyRowOne.l1,
          thirtyRowOne.l1,
          fortyRowOne.l1
        )}
      </td>
      <td>
        {getTotal(
          zeroRowOne.m1,
          twentyRowOne.m1,
          thirtyRowOne.m1,
          fortyRowOne.m1
        )}
      </td>
      <td>
        {getTotal(
          zeroRowOne.n1,
          twentyRowOne.n1,
          thirtyRowOne.n1,
          fortyRowOne.n1
        )}
      </td>
      <td className='oneTotal'>{rowTotal}</td>
      <td>
        {getTotal(
          zeroRowOne.p1,
          twentyRowOne.p1,
          thirtyRowOne.p1,
          fortyRowOne.p1
        )}
      </td>
      <td>
        {getTotal(
          zeroRowOne.q1,
          twentyRowOne.q1,
          thirtyRowOne.q1,
          fortyRowOne.q1
        )}
      </td>
      <td className='close'></td>
      <td>
        {getTotal(
          zeroRowOne.s1,
          twentyRowOne.s1,
          thirtyRowOne.s1,
          fortyRowOne.s1
        )}
      </td>
    </tr>
  );
};

export default RowOne;
