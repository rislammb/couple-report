import React, { useState, useEffect } from 'react';

import { getTotalFromArray } from '../../functions';

const TotalRowFour = ({ rowFourData }) => {
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
    rowFourData.map((item) => {
      arrayA.push(item.a4);
      arrayB.push(item.b4);
      arrayC.push(item.c4);
      arrayD.push(item.d4);
      arrayE.push(item.e4);
      arrayF.push(item.f4);
      arrayG.push(item.g4);
      arrayH.push(item.h4);
      arrayI.push(item.i4);
      arrayJ.push(item.j4);
      arrayK.push(item.k4);
      arrayL.push(item.l4);
      arrayM.push(item.m4);
      arrayN.push(item.n4);
      arrayO.push(item.o4);
      arrayP.push(item.p4);
      arrayQ.push(item.q4);
      arrayR.push(item.r4);
      arrayS.push(item.s4);
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
  }, [rowFourData]);

  return (
    <tr className='rowFour'>
      <td>৩+</td>
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
      <td className='fourTotal'>{oTotal}</td>
      <td>{pTotal}</td>
      <td>{qTotal}</td>
      <td>{rTotal}</td>
      <td>{sTotal}</td>
    </tr>
  );
};

export default TotalRowFour;
