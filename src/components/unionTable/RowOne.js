import React, { useState, useEffect } from 'react';

import { getTotalFromArray } from '../../functions';

const RowOne = ({ ageRange, range }) => {
  const [a1, setA1] = useState('০');
  const [b1, setB1] = useState('০');
  const [c1, setC1] = useState('০');
  const [d1, setD1] = useState('০');
  const [e1, setE1] = useState('০');
  const [f1, setF1] = useState('০');
  const [g1, setG1] = useState('০');
  const [h1, setH1] = useState('০');
  const [i1, setI1] = useState('০');
  const [j1, setJ1] = useState('০');
  const [k1, setK1] = useState('০');
  const [l1, setL1] = useState('০');
  const [m1, setM1] = useState('০');
  const [n1, setN1] = useState('০');
  const [o1, setO1] = useState('০');
  const [p1, setP1] = useState('০');
  const [q1, setQ1] = useState('০');
  const [s1, setS1] = useState('০');

  useEffect(() => {
    setA1(getTotalFromArray(range.map((unit) => unit.rowOne.a1)));
    setA1(getTotalFromArray(range.map((unit) => unit.rowOne.a1)));
    setB1(getTotalFromArray(range.map((unit) => unit.rowOne.b1)));
    setC1(getTotalFromArray(range.map((unit) => unit.rowOne.c1)));
    setD1(getTotalFromArray(range.map((unit) => unit.rowOne.d1)));
    setE1(getTotalFromArray(range.map((unit) => unit.rowOne.e1)));
    setF1(getTotalFromArray(range.map((unit) => unit.rowOne.f1)));
    setG1(getTotalFromArray(range.map((unit) => unit.rowOne.g1)));
    setH1(getTotalFromArray(range.map((unit) => unit.rowOne.h1)));
    setI1(getTotalFromArray(range.map((unit) => unit.rowOne.i1)));
    setJ1(getTotalFromArray(range.map((unit) => unit.rowOne.j1)));
    setK1(getTotalFromArray(range.map((unit) => unit.rowOne.k1)));
    setL1(getTotalFromArray(range.map((unit) => unit.rowOne.l1)));
    setM1(getTotalFromArray(range.map((unit) => unit.rowOne.m1)));
    setN1(getTotalFromArray(range.map((unit) => unit.rowOne.n1)));
    setO1(getTotalFromArray(range.map((unit) => unit.rowOne.o1)));
    setP1(getTotalFromArray(range.map((unit) => unit.rowOne.p1)));
    setQ1(getTotalFromArray(range.map((unit) => unit.rowOne.q1)));
    setS1(getTotalFromArray(range.map((unit) => unit.rowOne.s1)));
  }, [range]);

  return (
    <tr className='rowOne'>
      <td rowSpan='5' className='rotate'>
        {ageRange}
      </td>
      <td>০</td>
      <td>{a1}</td>
      <td>{b1}</td>
      <td>{c1}</td>
      <td>{d1}</td>
      <td>{e1}</td>
      <td>{f1}</td>
      <td>{g1}</td>
      <td>{h1}</td>
      <td>{i1}</td>
      <td>{j1}</td>
      <td>{k1}</td>
      <td>{l1}</td>
      <td>{m1}</td>
      <td>{n1}</td>
      <td className='oneTotal'>{o1}</td>
      <td>{p1}</td>
      <td>{q1}</td>
      <td className='close'></td>
      <td>{s1}</td>
    </tr>
  );
};

export default RowOne;
