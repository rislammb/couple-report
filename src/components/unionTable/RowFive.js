import React, { useState, useEffect } from 'react';

import { getTotalFromArray } from '../../functions';

const RowFive = ({ range }) => {
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
    let arrayA = [];
    let arrayB = [];
    let arrayC = [];
    let arrayD = [];
    let arrayE = [];
    let arrayF = [];
    let arrayG = [];
    let arrayH = [];
    let arrayI = [];
    let arrayJ = [];
    let arrayK = [];
    let arrayL = [];
    let arrayM = [];
    let arrayN = [];
    let arrayO = [];
    let arrayP = [];
    let arrayQ = [];
    let arrayR = [];
    let arrayS = [];
    range.map((item) => {
      arrayA.push(
        item.rowOne.a1,
        item.rowTwo.a2,
        item.rowThree.a3,
        item.rowFour.a4
      );
      arrayB.push(
        item.rowOne.b1,
        item.rowTwo.b2,
        item.rowThree.b3,
        item.rowFour.b4
      );
      arrayC.push(
        item.rowOne.c1,
        item.rowTwo.c2,
        item.rowThree.c3,
        item.rowFour.c4
      );
      arrayD.push(
        item.rowOne.d1,
        item.rowTwo.d2,
        item.rowThree.d3,
        item.rowFour.d4
      );
      arrayE.push(
        item.rowOne.e1,
        item.rowTwo.e2,
        item.rowThree.e3,
        item.rowFour.e4
      );
      arrayF.push(
        item.rowOne.f1,
        item.rowTwo.f2,
        item.rowThree.f3,
        item.rowFour.f4
      );
      arrayG.push(
        item.rowOne.g1,
        item.rowTwo.g2,
        item.rowThree.g3,
        item.rowFour.g4
      );
      arrayH.push(
        item.rowOne.h1,
        item.rowTwo.h2,
        item.rowThree.h3,
        item.rowFour.h4
      );
      arrayI.push(
        item.rowOne.i1,
        item.rowTwo.i2,
        item.rowThree.i3,
        item.rowFour.i4
      );
      arrayJ.push(
        item.rowOne.j1,
        item.rowTwo.j2,
        item.rowThree.j3,
        item.rowFour.j4
      );
      arrayK.push(
        item.rowOne.k1,
        item.rowTwo.k2,
        item.rowThree.k3,
        item.rowFour.k4
      );
      arrayL.push(
        item.rowOne.l1,
        item.rowTwo.l2,
        item.rowThree.l3,
        item.rowFour.l4
      );
      arrayM.push(
        item.rowOne.m1,
        item.rowTwo.m2,
        item.rowThree.m3,
        item.rowFour.m4
      );
      arrayN.push(
        item.rowOne.n1,
        item.rowTwo.n2,
        item.rowThree.n3,
        item.rowFour.n4
      );
      arrayO.push(
        item.rowOne.o1,
        item.rowTwo.o2,
        item.rowThree.o3,
        item.rowFour.o4
      );
      arrayP.push(
        item.rowOne.p1,
        item.rowTwo.p2,
        item.rowThree.p3,
        item.rowFour.p4
      );
      arrayQ.push(
        item.rowOne.q1,
        item.rowTwo.q2,
        item.rowThree.q3,
        item.rowFour.q4
      );
      arrayR.push(item.rowTwo.r2, item.rowThree.r3, item.rowFour.r4);
      arrayS.push(
        item.rowOne.s1,
        item.rowTwo.s2,
        item.rowThree.s3,
        item.rowFour.s4
      );
    });
    setATotal(getTotalFromArray(arrayA));
    setBTotal(getTotalFromArray(arrayB));
    setCTotal(getTotalFromArray(arrayC));
    setDTotal(getTotalFromArray(arrayD));
    setETotal(getTotalFromArray(arrayE));
    setFTotal(getTotalFromArray(arrayF));
    setGTotal(getTotalFromArray(arrayG));
    setHTotal(getTotalFromArray(arrayH));
    setITotal(getTotalFromArray(arrayI));
    setJTotal(getTotalFromArray(arrayJ));
    setKTotal(getTotalFromArray(arrayK));
    setLTotal(getTotalFromArray(arrayL));
    setMTotal(getTotalFromArray(arrayM));
    setNTotal(getTotalFromArray(arrayN));
    setOTotal(getTotalFromArray(arrayO));
    setPTotal(getTotalFromArray(arrayP));
    setQTotal(getTotalFromArray(arrayQ));
    setRTotal(getTotalFromArray(arrayR));
    setSTotal(getTotalFromArray(arrayS));
  }, [range]);

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

export default RowFive;
