import React, { useState, useEffect } from 'react';

import { getTotalFromArray } from '../../functions';

const RowThree = ({ range }) => {
  const [a3, setA3] = useState('০');
  const [b3, setB3] = useState('০');
  const [c3, setC3] = useState('০');
  const [d3, setD3] = useState('০');
  const [e3, setE3] = useState('০');
  const [f3, setF3] = useState('০');
  const [g3, setG3] = useState('০');
  const [h3, setH3] = useState('০');
  const [i3, setI3] = useState('০');
  const [j3, setJ3] = useState('০');
  const [k3, setK3] = useState('০');
  const [l3, setL3] = useState('০');
  const [m3, setM3] = useState('০');
  const [n3, setN3] = useState('০');
  const [o3, setO3] = useState('০');
  const [p3, setP3] = useState('০');
  const [q3, setQ3] = useState('০');
  const [r3, setR3] = useState('০');
  const [s3, setS3] = useState('০');

  useEffect(() => {
    setA3(getTotalFromArray(range.map((unit) => unit.rowThree.a3)));
    setB3(getTotalFromArray(range.map((unit) => unit.rowThree.b3)));
    setC3(getTotalFromArray(range.map((unit) => unit.rowThree.c3)));
    setD3(getTotalFromArray(range.map((unit) => unit.rowThree.d3)));
    setE3(getTotalFromArray(range.map((unit) => unit.rowThree.e3)));
    setF3(getTotalFromArray(range.map((unit) => unit.rowThree.f3)));
    setG3(getTotalFromArray(range.map((unit) => unit.rowThree.g3)));
    setH3(getTotalFromArray(range.map((unit) => unit.rowThree.h3)));
    setI3(getTotalFromArray(range.map((unit) => unit.rowThree.i3)));
    setJ3(getTotalFromArray(range.map((unit) => unit.rowThree.j3)));
    setK3(getTotalFromArray(range.map((unit) => unit.rowThree.k3)));
    setL3(getTotalFromArray(range.map((unit) => unit.rowThree.l3)));
    setM3(getTotalFromArray(range.map((unit) => unit.rowThree.m3)));
    setN3(getTotalFromArray(range.map((unit) => unit.rowThree.n3)));
    setO3(getTotalFromArray(range.map((unit) => unit.rowThree.o3)));
    setP3(getTotalFromArray(range.map((unit) => unit.rowThree.p3)));
    setQ3(getTotalFromArray(range.map((unit) => unit.rowThree.q3)));
    setR3(getTotalFromArray(range.map((unit) => unit.rowThree.r3)));
    setS3(getTotalFromArray(range.map((unit) => unit.rowThree.s3)));
  }, [range]);

  return (
    <tr className='rowThree'>
      <td>২</td>
      <td>{a3}</td>
      <td>{b3}</td>
      <td>{c3}</td>
      <td>{d3}</td>
      <td>{e3}</td>
      <td>{f3}</td>
      <td>{g3}</td>
      <td>{h3}</td>
      <td>{i3}</td>
      <td>{j3}</td>
      <td>{k3}</td>
      <td>{l3}</td>
      <td>{m3}</td>
      <td>{n3}</td>
      <td className='threeTotal'>{o3}</td>
      <td>{p3}</td>
      <td>{q3}</td>
      <td>{r3}</td>
      <td>{s3}</td>
    </tr>
  );
};

export default RowThree;
