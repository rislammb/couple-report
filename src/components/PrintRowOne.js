import React, { useState, useEffect, useContext } from 'react';

import { getRowTotal } from '../functions';
import StoreContext from '../store/storeContext';

const PrintRowOne = (props) => {
  const { ageRange, rowOne } = props;
  const {
    setStoreZeroRowTotal,
    setStoreTwentyRowTotal,
    setStoreThirtyRowTotal,
    setStoreFortyRowTotal,
  } = useContext(StoreContext);
  const [rowTotal, setRowTotal] = useState('০');

  useEffect(() => {
    setRowTotal(getRowTotal(rowOne));
  }, [rowOne]);

  useEffect(() => {
    switch (ageRange) {
      case '<২০':
        setStoreZeroRowTotal((prev) => {
          return { ...prev, t1: rowTotal };
        });
        break;
      case '২০-২৯':
        setStoreTwentyRowTotal((prev) => {
          return { ...prev, t1: rowTotal };
        });
        break;
      case '৩০-৩৯':
        setStoreThirtyRowTotal((prev) => {
          return { ...prev, t1: rowTotal };
        });
        break;
      case '৪০-৪৯':
        setStoreFortyRowTotal((prev) => {
          return { ...prev, t1: rowTotal };
        });
        break;
      default:
        break;
    }
  }, [rowTotal]);

  return (
    <tr className='rowOne'>
      <td rowSpan='5' className='rotate'>
        {ageRange}
      </td>
      <td>০</td>
      <td>{rowOne.a1}</td>
      <td>{rowOne.b1}</td>
      <td>{rowOne.c1}</td>
      <td>{rowOne.d1}</td>
      <td>{rowOne.e1}</td>
      <td>{rowOne.f1}</td>
      <td>{rowOne.g1}</td>
      <td>{rowOne.h1}</td>
      <td>{rowOne.i1}</td>
      <td>{rowOne.j1}</td>
      <td>{rowOne.k1}</td>
      <td>{rowOne.l1}</td>
      <td>{rowOne.m1}</td>
      <td>{rowOne.n1}</td>
      <td className='oneTotal'>{rowTotal}</td>
      <td>{rowOne.p1}</td>
      <td>{rowOne.q1}</td>
      <td className='close'></td>
      <td>{rowOne.s1}</td>
    </tr>
  );
};

export default PrintRowOne;
