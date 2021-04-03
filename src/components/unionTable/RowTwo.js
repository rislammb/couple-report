import React, { useState, useEffect } from 'react';

import { getTotalFromArray } from '../../functions';

const RowTwo = ({ range }) => {
  const [a2, setA2] = useState('০');
  const [b2, setB2] = useState('০');
  const [c2, setC2] = useState('০');
  const [d2, setD2] = useState('০');
  const [e2, setE2] = useState('০');
  const [f2, setF2] = useState('০');
  const [g2, setG2] = useState('০');
  const [h2, setH2] = useState('০');
  const [i2, setI2] = useState('০');
  const [j2, setJ2] = useState('০');
  const [k2, setK2] = useState('০');
  const [l2, setL2] = useState('০');
  const [m2, setM2] = useState('০');
  const [n2, setN2] = useState('০');
  const [o2, setO2] = useState('০');
  const [p2, setP2] = useState('০');
  const [q2, setQ2] = useState('০');
  const [r2, setR2] = useState('০');
  const [s2, setS2] = useState('০');

  useEffect(() => {
    setA2(getTotalFromArray(range.map((unit) => unit.rowTwo.a2)));
    setB2(getTotalFromArray(range.map((unit) => unit.rowTwo.b2)));
    setC2(getTotalFromArray(range.map((unit) => unit.rowTwo.c2)));
    setD2(getTotalFromArray(range.map((unit) => unit.rowTwo.d2)));
    setE2(getTotalFromArray(range.map((unit) => unit.rowTwo.e2)));
    setF2(getTotalFromArray(range.map((unit) => unit.rowTwo.f2)));
    setG2(getTotalFromArray(range.map((unit) => unit.rowTwo.g2)));
    setH2(getTotalFromArray(range.map((unit) => unit.rowTwo.h2)));
    setI2(getTotalFromArray(range.map((unit) => unit.rowTwo.i2)));
    setJ2(getTotalFromArray(range.map((unit) => unit.rowTwo.j2)));
    setK2(getTotalFromArray(range.map((unit) => unit.rowTwo.k2)));
    setL2(getTotalFromArray(range.map((unit) => unit.rowTwo.l2)));
    setM2(getTotalFromArray(range.map((unit) => unit.rowTwo.m2)));
    setN2(getTotalFromArray(range.map((unit) => unit.rowTwo.n2)));
    setO2(getTotalFromArray(range.map((unit) => unit.rowTwo.o2)));
    setP2(getTotalFromArray(range.map((unit) => unit.rowTwo.p2)));
    setQ2(getTotalFromArray(range.map((unit) => unit.rowTwo.q2)));
    setR2(getTotalFromArray(range.map((unit) => unit.rowTwo.r2)));
    setS2(getTotalFromArray(range.map((unit) => unit.rowTwo.s2)));
  }, [range]);

  return (
    <tr className='rowOne'>
      <td>১</td>
      <td>{a2}</td>
      <td>{b2}</td>
      <td>{c2}</td>
      <td>{d2}</td>
      <td>{e2}</td>
      <td>{f2}</td>
      <td>{g2}</td>
      <td>{h2}</td>
      <td>{i2}</td>
      <td>{j2}</td>
      <td>{k2}</td>
      <td>{l2}</td>
      <td>{m2}</td>
      <td>{n2}</td>
      <td className='oneTotal'>{o2}</td>
      <td>{p2}</td>
      <td>{q2}</td>
      <td>{r2}</td>
      <td>{s2}</td>
    </tr>
  );
};

export default RowTwo;
