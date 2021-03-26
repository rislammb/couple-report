import React, { useState, useEffect } from 'react';

import { getTotal, getTotalRowTotal } from '../../functions';

const RowFour = (props) => {
  const { zeroRowFour, twentyRowFour, thirtyRowFour, fortyRowFour } = props;
  const [rowTotal, setRowTotal] = useState('০');

  useEffect(() => {
    setRowTotal(
      getTotalRowTotal(zeroRowFour, twentyRowFour, thirtyRowFour, fortyRowFour)
    );
  }, [zeroRowFour, twentyRowFour, thirtyRowFour, fortyRowFour]);

  return (
    <tr className='rowFour'>
      <td>৩+</td>
      <td>
        {getTotal(
          zeroRowFour.a4,
          twentyRowFour.a4,
          thirtyRowFour.a4,
          fortyRowFour.a4
        )}
      </td>
      <td>
        {getTotal(
          zeroRowFour.b4,
          twentyRowFour.b4,
          thirtyRowFour.b4,
          fortyRowFour.b4
        )}
      </td>
      <td>
        {getTotal(
          zeroRowFour.c4,
          twentyRowFour.c4,
          thirtyRowFour.c4,
          fortyRowFour.c4
        )}
      </td>
      <td>
        {getTotal(
          zeroRowFour.d4,
          twentyRowFour.d4,
          thirtyRowFour.d4,
          fortyRowFour.d4
        )}
      </td>
      <td>
        {getTotal(
          zeroRowFour.e4,
          twentyRowFour.e4,
          thirtyRowFour.e4,
          fortyRowFour.e4
        )}
      </td>
      <td>
        {getTotal(
          zeroRowFour.f4,
          twentyRowFour.f4,
          thirtyRowFour.f4,
          fortyRowFour.f4
        )}
      </td>
      <td>
        {getTotal(
          zeroRowFour.g4,
          twentyRowFour.g4,
          thirtyRowFour.g4,
          fortyRowFour.g4
        )}
      </td>
      <td>
        {getTotal(
          zeroRowFour.h4,
          twentyRowFour.h4,
          thirtyRowFour.h4,
          fortyRowFour.h4
        )}
      </td>
      <td>
        {getTotal(
          zeroRowFour.i4,
          twentyRowFour.i4,
          thirtyRowFour.i4,
          fortyRowFour.i4
        )}
      </td>
      <td>
        {getTotal(
          zeroRowFour.j4,
          twentyRowFour.j4,
          thirtyRowFour.j4,
          fortyRowFour.j4
        )}
      </td>
      <td>
        {getTotal(
          zeroRowFour.k4,
          twentyRowFour.k4,
          thirtyRowFour.k4,
          fortyRowFour.k4
        )}
      </td>
      <td>
        {getTotal(
          zeroRowFour.l4,
          twentyRowFour.l4,
          thirtyRowFour.l4,
          fortyRowFour.l4
        )}
      </td>
      <td>
        {getTotal(
          zeroRowFour.m4,
          twentyRowFour.m4,
          thirtyRowFour.m4,
          fortyRowFour.m4
        )}
      </td>
      <td>
        {getTotal(
          zeroRowFour.n4,
          twentyRowFour.n4,
          thirtyRowFour.n4,
          fortyRowFour.n4
        )}
      </td>
      <td className='fourTotal'>{rowTotal}</td>
      <td>
        {getTotal(
          zeroRowFour.p4,
          twentyRowFour.p4,
          thirtyRowFour.p4,
          fortyRowFour.p4
        )}
      </td>
      <td>
        {getTotal(
          zeroRowFour.q4,
          twentyRowFour.q4,
          thirtyRowFour.q4,
          fortyRowFour.q4
        )}
      </td>
      <td>
        {getTotal(
          zeroRowFour.r4,
          twentyRowFour.r4,
          thirtyRowFour.r4,
          fortyRowFour.r4
        )}
      </td>
      <td>
        {getTotal(
          zeroRowFour.s4,
          twentyRowFour.s4,
          thirtyRowFour.s4,
          fortyRowFour.s4
        )}
      </td>
    </tr>
  );
};

export default RowFour;
