import React, { useState, useEffect, useContext } from 'react';

import StoreContext from '../store/storeContext';
import { getColumnTotal, getTotal } from '../functions';

const PrintRowFive = (props) => {
  const {
    storeZeroRowTotal,
    storeTwentyRowTotal,
    storeThirtyRowTotal,
    storeFortyRowTotal,
  } = useContext(StoreContext);
  const { ageRange, rowOne, rowTwo, rowThree, rowFour } = props;
  const [aTotal, setATotal] = useState('০');
  const [bTotal, setBTotal] = useState('০');
  const [cTotal, setCTotal] = useState('০');
  const [dTotal, setDTotal] = useState('০');
  const [eTotal, setETotal] = useState('০');
  const [fTotal, setFTotal] = useState('০');
  const [gTotal, setGTotal] = useState('০');
  const [hTotal, setHTotal] = useState('০');
  const [iTotal, setITotal] = useState('০');
  const [jTotal, setJTotal] = useState('০');
  const [kTotal, setKTotal] = useState('০');
  const [lTotal, setLTotal] = useState('০');
  const [mTotal, setMTotal] = useState('০');
  const [nTotal, setNTotal] = useState('০');
  const [oTotal, setOTotal] = useState('০');
  const [pTotal, setPTotal] = useState('০');
  const [qTotal, setQTotal] = useState('০');
  const [rTotal, setRTotal] = useState('০');
  const [sTotal, setSTotal] = useState('০');

  useEffect(() => {
    setATotal(getColumnTotal(rowOne.a1, rowTwo.a2, rowThree.a3, rowFour.a4));
  }, [rowOne.a1, rowTwo.a2, rowThree.a3, rowFour.a4]);

  useEffect(() => {
    setBTotal(getColumnTotal(rowOne.b1, rowTwo.b2, rowThree.b3, rowFour.b4));
  }, [rowOne.b1, rowTwo.b2, rowThree.b3, rowFour.b4]);

  useEffect(() => {
    setCTotal(getColumnTotal(rowOne.c1, rowTwo.c2, rowThree.c3, rowFour.c4));
  }, [rowOne.c1, rowTwo.c2, rowThree.c3, rowFour.c4]);

  useEffect(() => {
    setDTotal(getColumnTotal(rowOne.d1, rowTwo.d2, rowThree.d3, rowFour.d4));
  }, [rowOne.d1, rowTwo.d2, rowThree.d3, rowFour.d4]);

  useEffect(() => {
    setETotal(getColumnTotal(rowOne.e1, rowTwo.e2, rowThree.e3, rowFour.e4));
  }, [rowOne.e1, rowTwo.e2, rowThree.e3, rowFour.e4]);

  useEffect(() => {
    setFTotal(getColumnTotal(rowOne.f1, rowTwo.f2, rowThree.f3, rowFour.f4));
  }, [rowOne.f1, rowTwo.f2, rowThree.f3, rowFour.f4]);

  useEffect(() => {
    setGTotal(getColumnTotal(rowOne.g1, rowTwo.g2, rowThree.g3, rowFour.g4));
  }, [rowOne.g1, rowTwo.g2, rowThree.g3, rowFour.g4]);

  useEffect(() => {
    setHTotal(getColumnTotal(rowOne.h1, rowTwo.h2, rowThree.h3, rowFour.h4));
  }, [rowOne.h1, rowTwo.h2, rowThree.h3, rowFour.h4]);

  useEffect(() => {
    setITotal(getColumnTotal(rowOne.i1, rowTwo.i2, rowThree.i3, rowFour.i4));
  }, [rowOne.i1, rowTwo.i2, rowThree.i3, rowFour.i4]);

  useEffect(() => {
    setJTotal(getColumnTotal(rowOne.j1, rowTwo.j2, rowThree.j3, rowFour.j4));
  }, [rowOne.j1, rowTwo.j2, rowThree.j3, rowFour.j4]);

  useEffect(() => {
    setKTotal(getColumnTotal(rowOne.k1, rowTwo.k2, rowThree.k3, rowFour.k4));
  }, [rowOne.k1, rowTwo.k2, rowThree.k3, rowFour.k4]);

  useEffect(() => {
    setLTotal(getColumnTotal(rowOne.l1, rowTwo.l2, rowThree.l3, rowFour.l4));
  }, [rowOne.l1, rowTwo.l2, rowThree.l3, rowFour.l4]);

  useEffect(() => {
    setMTotal(getColumnTotal(rowOne.m1, rowTwo.m2, rowThree.m3, rowFour.m4));
  }, [rowOne.m1, rowTwo.m2, rowThree.m3, rowFour.m4]);

  useEffect(() => {
    setNTotal(getColumnTotal(rowOne.n1, rowTwo.n2, rowThree.n3, rowFour.n4));
  }, [rowOne.n1, rowTwo.n2, rowThree.n3, rowFour.n4]);

  useEffect(() => {
    switch (ageRange) {
      case '<২০':
        setOTotal(
          getTotal(
            storeZeroRowTotal.t1,
            storeZeroRowTotal.t2,
            storeZeroRowTotal.t3,
            storeZeroRowTotal.t4
          )
        );
        break;
      case '২০-২৯':
        setOTotal(
          getTotal(
            storeTwentyRowTotal.t1,
            storeTwentyRowTotal.t2,
            storeTwentyRowTotal.t3,
            storeTwentyRowTotal.t4
          )
        );
        break;
      case '৩০-৩৯':
        setOTotal(
          getTotal(
            storeThirtyRowTotal.t1,
            storeThirtyRowTotal.t2,
            storeThirtyRowTotal.t3,
            storeThirtyRowTotal.t4
          )
        );
        break;
      case '৪০-৪৯':
        setOTotal(
          getTotal(
            storeFortyRowTotal.t1,
            storeFortyRowTotal.t2,
            storeFortyRowTotal.t3,
            storeFortyRowTotal.t4
          )
        );
        break;

      default:
        setOTotal(
          getTotal(
            storeZeroRowTotal.t1,
            storeZeroRowTotal.t2,
            storeZeroRowTotal.t3,
            storeZeroRowTotal.t4
          )
        );
        break;
    }
  }, [
    storeZeroRowTotal,
    storeTwentyRowTotal,
    storeThirtyRowTotal,
    storeFortyRowTotal,
  ]);

  useEffect(() => {
    setPTotal(getColumnTotal(rowOne.p1, rowTwo.p2, rowThree.p3, rowFour.p4));
  }, [rowOne.p1, rowTwo.p2, rowThree.p3, rowFour.p4]);

  useEffect(() => {
    setQTotal(getColumnTotal(rowOne.q1, rowTwo.q2, rowThree.q3, rowFour.q4));
  }, [rowOne.q1, rowTwo.q2, rowThree.q3, rowFour.q4]);

  useEffect(() => {
    setRTotal(getColumnTotal(rowTwo.r2, rowThree.r3, rowFour.r4));
  }, [rowTwo.r2, rowThree.r3, rowFour.r4]);

  useEffect(() => {
    setSTotal(getColumnTotal(rowOne.s1, rowTwo.s2, rowThree.s3, rowFour.s4));
  }, [rowOne.s1, rowTwo.s2, rowThree.s3, rowFour.s4]);

  return (
    <tr className='rowFive'>
      <td>মোট</td>
      <td>{aTotal}</td>
      <td>{bTotal}</td>
      <td>{cTotal}</td>
      <td>{dTotal}</td>
      <td>{eTotal}</td>
      <td>{fTotal}</td>
      <td>{gTotal}</td>
      <td>{hTotal}</td>
      <td>{iTotal}</td>
      <td>{jTotal}</td>
      <td>{kTotal}</td>
      <td>{lTotal}</td>
      <td>{mTotal}</td>
      <td>{nTotal}</td>
      <td>{oTotal}</td>
      <td>{pTotal}</td>
      <td>{qTotal}</td>
      <td>{rTotal}</td>
      <td>{sTotal}</td>
    </tr>
  );
};

export default PrintRowFive;
