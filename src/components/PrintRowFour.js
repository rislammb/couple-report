import React, { useState, useEffect, useContext } from 'react';

import { getRowTotal } from '../functions';
import StoreContext from '../store/storeContext';

const PrintRowFour = (props) => {
  const { ageRange, rowFour } = props;
  const {
    setStoreZeroRowTotal,
    setStoreTwentyRowTotal,
    setStoreThirtyRowTotal,
    setStoreFortyRowTotal,
  } = useContext(StoreContext);
  const [rowTotal, setRowTotal] = useState('০');

  useEffect(() => {
    setRowTotal(getRowTotal(rowFour));
  }, [rowFour]);

  useEffect(() => {
    switch (ageRange) {
      case '<২০':
        setStoreZeroRowTotal((prev) => {
          return { ...prev, t4: rowTotal };
        });
        break;
      case '২০-২৯':
        setStoreTwentyRowTotal((prev) => {
          return { ...prev, t4: rowTotal };
        });
        break;
      case '৩০-৩৯':
        setStoreThirtyRowTotal((prev) => {
          return { ...prev, t4: rowTotal };
        });
        break;
      case '৪০-৪৯':
        setStoreFortyRowTotal((prev) => {
          return { ...prev, t4: rowTotal };
        });
        break;
      default:
        break;
    }
  }, [rowTotal]);

  return (
    <tr className='rowFour'>
      <td>৩+</td>
      <td>{rowFour.a4}</td>
      <td>{rowFour.b4}</td>
      <td>{rowFour.c4}</td>
      <td>{rowFour.d4}</td>
      <td>{rowFour.e4}</td>
      <td>{rowFour.f4}</td>
      <td>{rowFour.g4}</td>
      <td>{rowFour.h4}</td>
      <td>{rowFour.i4}</td>
      <td>{rowFour.j4}</td>
      <td>{rowFour.k4}</td>
      <td>{rowFour.l4}</td>
      <td>{rowFour.m4}</td>
      <td>{rowFour.n4}</td>
      <td className='fourTotal'>{rowTotal}</td>
      <td>{rowFour.p4}</td>
      <td>{rowFour.q4}</td>
      <td>{rowFour.r4}</td>
      <td>{rowFour.s4}</td>
    </tr>
  );
};

export default PrintRowFour;
