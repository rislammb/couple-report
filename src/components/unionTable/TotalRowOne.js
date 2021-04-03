import React, { useState, useEffect } from 'react';

import { getTotalFromArray } from '../../functions';

const TotalRowOne = ({ rowOneData }) => {
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
    let arrayS = [];
    rowOneData.map((item) => {
      arrayA.push(item.a1);
      arrayB.push(item.b1);
      arrayC.push(item.c1);
      arrayD.push(item.d1);
      arrayE.push(item.e1);
      arrayF.push(item.f1);
      arrayG.push(item.g1);
      arrayH.push(item.h1);
      arrayI.push(item.i1);
      arrayJ.push(item.j1);
      arrayK.push(item.k1);
      arrayL.push(item.l1);
      arrayM.push(item.m1);
      arrayN.push(item.n1);
      arrayO.push(item.o1);
      arrayP.push(item.p1);
      arrayQ.push(item.q1);
      arrayS.push(item.s1);
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
    setSTotal(getTotalFromArray(arrayS));
  }, [rowOneData]);

  return (
    <tr className='rowOne'>
      <td rowSpan='5' className='rotate'>
        সর্বমোট
      </td>
      <td>০</td>
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
      <td className='oneTotal'>{oTotal}</td>
      <td>{pTotal}</td>
      <td>{qTotal}</td>
      <td className='close'></td>
      <td>{sTotal}</td>
    </tr>
  );
};

export default TotalRowOne;
