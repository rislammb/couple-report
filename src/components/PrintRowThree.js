import React, { useState, useEffect, useContext } from 'react';

import { getRowTotal } from '../functions';
import StoreContext from '../store/storeContext';

const PrintRowThree = (props) => {
  const { ageRange, rowThree } = props;
  const {
    setStoreZeroRowTotal,
    setStoreTwentyRowTotal,
    setStoreThirtyRowTotal,
    setStoreFortyRowTotal,
  } = useContext(StoreContext);
  const [rowTotal, setRowTotal] = useState('০');

  useEffect(() => {
    setRowTotal(getRowTotal(rowThree));
  }, [rowThree]);

  useEffect(() => {
    switch (ageRange) {
      case '<২০':
        setStoreZeroRowTotal((prev) => {
          return { ...prev, t3: rowTotal };
        });
        break;
      case '২০-২৯':
        setStoreTwentyRowTotal((prev) => {
          return { ...prev, t3: rowTotal };
        });
        break;
      case '৩০-৩৯':
        setStoreThirtyRowTotal((prev) => {
          return { ...prev, t3: rowTotal };
        });
        break;
      case '৪০-৪৯':
        setStoreFortyRowTotal((prev) => {
          return { ...prev, t3: rowTotal };
        });
        break;
      default:
        break;
    }
  }, [rowTotal]);

  return (
    <tr className='rowThree'>
      <td>২</td>
      <td>{rowThree.a3}</td>
      <td>{rowThree.b3}</td>
      <td>{rowThree.c3}</td>
      <td>{rowThree.d3}</td>
      <td>{rowThree.e3}</td>
      <td>{rowThree.f3}</td>
      <td>{rowThree.g3}</td>
      <td>{rowThree.h3}</td>
      <td>{rowThree.i3}</td>
      <td>{rowThree.j3}</td>
      <td>{rowThree.k3}</td>
      <td>{rowThree.l3}</td>
      <td>{rowThree.m3}</td>
      <td>{rowThree.n3}</td>
      <td className='threeTotal'>{rowTotal}</td>
      <td>{rowThree.p3}</td>
      <td>{rowThree.q3}</td>
      <td>{rowThree.r3}</td>
      <td>{rowThree.s3}</td>
    </tr>
  );
};

export default PrintRowThree;
