import React, { useState, useEffect } from 'react';

import { getTotal, getTotalRowTotal } from '../../functions';

const RowTwo = (props) => {
  const { zeroRowTwo, twentyRowTwo, thirtyRowTwo, fortyRowTwo } = props;
  const [rowTotal, setRowTotal] = useState('০');

  useEffect(() => {
    setRowTotal(
      getTotalRowTotal(zeroRowTwo, twentyRowTwo, thirtyRowTwo, fortyRowTwo)
    );
  }, [zeroRowTwo, twentyRowTwo, thirtyRowTwo, fortyRowTwo]);

  return (
    <tr className='rowTwo'>
      <td>১</td>
      <td>
        {getTotal(
          zeroRowTwo.a2,
          twentyRowTwo.a2,
          thirtyRowTwo.a2,
          fortyRowTwo.a2
        )}
      </td>
      <td>
        {getTotal(
          zeroRowTwo.b2,
          twentyRowTwo.b2,
          thirtyRowTwo.b2,
          fortyRowTwo.b2
        )}
      </td>
      <td>
        {getTotal(
          zeroRowTwo.c2,
          twentyRowTwo.c2,
          thirtyRowTwo.c2,
          fortyRowTwo.c2
        )}
      </td>
      <td>
        {getTotal(
          zeroRowTwo.d2,
          twentyRowTwo.d2,
          thirtyRowTwo.d2,
          fortyRowTwo.d2
        )}
      </td>
      <td>
        {getTotal(
          zeroRowTwo.e2,
          twentyRowTwo.e2,
          thirtyRowTwo.e2,
          fortyRowTwo.e2
        )}
      </td>
      <td>
        {getTotal(
          zeroRowTwo.f2,
          twentyRowTwo.f2,
          thirtyRowTwo.f2,
          fortyRowTwo.f2
        )}
      </td>
      <td>
        {getTotal(
          zeroRowTwo.g2,
          twentyRowTwo.g2,
          thirtyRowTwo.g2,
          fortyRowTwo.g2
        )}
      </td>
      <td>
        {getTotal(
          zeroRowTwo.h2,
          twentyRowTwo.h2,
          thirtyRowTwo.h2,
          fortyRowTwo.h2
        )}
      </td>
      <td>
        {getTotal(
          zeroRowTwo.i2,
          twentyRowTwo.i2,
          thirtyRowTwo.i2,
          fortyRowTwo.i2
        )}
      </td>
      <td>
        {getTotal(
          zeroRowTwo.j2,
          twentyRowTwo.j2,
          thirtyRowTwo.j2,
          fortyRowTwo.j2
        )}
      </td>
      <td>
        {getTotal(
          zeroRowTwo.k2,
          twentyRowTwo.k2,
          thirtyRowTwo.k2,
          fortyRowTwo.k2
        )}
      </td>
      <td>
        {getTotal(
          zeroRowTwo.l2,
          twentyRowTwo.l2,
          thirtyRowTwo.l2,
          fortyRowTwo.l2
        )}
      </td>
      <td>
        {getTotal(
          zeroRowTwo.m2,
          twentyRowTwo.m2,
          thirtyRowTwo.m2,
          fortyRowTwo.m2
        )}
      </td>
      <td>
        {getTotal(
          zeroRowTwo.n2,
          twentyRowTwo.n2,
          thirtyRowTwo.n2,
          fortyRowTwo.n2
        )}
      </td>
      <td className='twoTotal'>{rowTotal}</td>
      <td>
        {getTotal(
          zeroRowTwo.p2,
          twentyRowTwo.p2,
          thirtyRowTwo.p2,
          fortyRowTwo.p2
        )}
      </td>
      <td>
        {getTotal(
          zeroRowTwo.q2,
          twentyRowTwo.q2,
          thirtyRowTwo.q2,
          fortyRowTwo.q2
        )}
      </td>
      <td>
        {getTotal(
          zeroRowTwo.r2,
          twentyRowTwo.r2,
          thirtyRowTwo.r2,
          fortyRowTwo.r2
        )}
      </td>
      <td>
        {getTotal(
          zeroRowTwo.s2,
          twentyRowTwo.s2,
          thirtyRowTwo.s2,
          fortyRowTwo.s2
        )}
      </td>
    </tr>
  );
};

export default RowTwo;
