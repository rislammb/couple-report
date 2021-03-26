import React, { useState, useEffect, useContext } from 'react';

import { getRowTotal } from '../functions';
import StoreContext from '../store/storeContext';

const PrintRowTwo = (props) => {
  const { ageRange, rowTwo } = props;
  const {
    setStoreZeroRowTotal,
    setStoreTwentyRowTotal,
    setStoreThirtyRowTotal,
    setStoreFortyRowTotal,
  } = useContext(StoreContext);
  const [rowTotal, setRowTotal] = useState('০');

  useEffect(() => {
    setRowTotal(getRowTotal(rowTwo));
  }, [rowTwo]);

  useEffect(() => {
    switch (ageRange) {
      case '<২০':
        setStoreZeroRowTotal((prev) => {
          return { ...prev, t2: rowTotal };
        });
        break;
      case '২০-২৯':
        setStoreTwentyRowTotal((prev) => {
          return { ...prev, t2: rowTotal };
        });
        break;
      case '৩০-৩৯':
        setStoreThirtyRowTotal((prev) => {
          return { ...prev, t2: rowTotal };
        });
        break;
      case '৪০-৪৯':
        setStoreFortyRowTotal((prev) => {
          return { ...prev, t2: rowTotal };
        });
        break;
      default:
        break;
    }
  }, [rowTotal]);

  return (
    <tr className='rowTwo'>
      <td>১</td>
      <td>{rowTwo.a2}</td>
      <td>{rowTwo.b2}</td>
      <td>{rowTwo.c2}</td>
      <td>{rowTwo.d2}</td>
      <td>{rowTwo.e2}</td>
      <td>{rowTwo.f2}</td>
      <td>{rowTwo.g2}</td>
      <td>{rowTwo.h2}</td>
      <td>{rowTwo.i2}</td>
      <td>{rowTwo.j2}</td>
      <td>{rowTwo.k2}</td>
      <td>{rowTwo.l2}</td>
      <td>{rowTwo.m2}</td>
      <td>{rowTwo.n2}</td>
      <td className='twoTotal'>{rowTotal}</td>
      <td>{rowTwo.p2}</td>
      <td>{rowTwo.q2}</td>
      <td>{rowTwo.r2}</td>
      <td>{rowTwo.s2}</td>
    </tr>
  );
};

export default PrintRowTwo;
