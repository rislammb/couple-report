import React, { useState, useEffect } from 'react';

import { getTotalFromArray } from '../../functions';

const TotalRowThree = ({ rowThreeData }) => {
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
    rowThreeData.map((item) => {
      arrayA.push(item.a3);
      arrayB.push(item.b3);
      arrayC.push(item.c3);
      arrayD.push(item.d3);
      arrayE.push(item.e3);
      arrayF.push(item.f3);
      arrayG.push(item.g3);
      arrayH.push(item.h3);
      arrayI.push(item.i3);
      arrayJ.push(item.j3);
      arrayK.push(item.k3);
      arrayL.push(item.l3);
      arrayM.push(item.m3);
      arrayN.push(item.n3);
      arrayO.push(item.o3);
      arrayP.push(item.p3);
      arrayQ.push(item.q3);
      arrayR.push(item.r3);
      arrayS.push(item.s3);
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
  }, [rowThreeData]);

  return (
    <tr className='rowThree'>
      <td>২</td>
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
      <td className='threeTotal'>{oTotal}</td>
      <td>{pTotal}</td>
      <td>{qTotal}</td>
      <td>{rTotal}</td>
      <td>{sTotal}</td>
    </tr>
  );
};

export default TotalRowThree;
