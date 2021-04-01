import React, { useState, useEffect } from 'react';

import { getTotalFromArrey } from '../../functions';

const RowFour = ({ range }) => {
  const [a4, setA4] = useState('০');
  const [b4, setB4] = useState('০');
  const [c4, setC4] = useState('০');
  const [d4, setD4] = useState('০');
  const [e4, setE4] = useState('০');
  const [f4, setF4] = useState('০');
  const [g4, setG4] = useState('০');
  const [h4, setH4] = useState('০');
  const [i4, setI4] = useState('০');
  const [j4, setJ4] = useState('০');
  const [k4, setK4] = useState('০');
  const [l4, setL4] = useState('০');
  const [m4, setM4] = useState('০');
  const [n4, setN4] = useState('০');
  const [o4, setO4] = useState('০');
  const [p4, setP4] = useState('০');
  const [q4, setQ4] = useState('০');
  const [r4, setR4] = useState('০');
  const [s4, setS4] = useState('০');

  useEffect(() => {
    setA4(getTotalFromArrey(range.map((unit) => unit.rowFour.a4)));
    setB4(getTotalFromArrey(range.map((unit) => unit.rowFour.b4)));
    setC4(getTotalFromArrey(range.map((unit) => unit.rowFour.c4)));
    setD4(getTotalFromArrey(range.map((unit) => unit.rowFour.d4)));
    setE4(getTotalFromArrey(range.map((unit) => unit.rowFour.e4)));
    setF4(getTotalFromArrey(range.map((unit) => unit.rowFour.f4)));
    setG4(getTotalFromArrey(range.map((unit) => unit.rowFour.g4)));
    setH4(getTotalFromArrey(range.map((unit) => unit.rowFour.h4)));
    setI4(getTotalFromArrey(range.map((unit) => unit.rowFour.i4)));
    setJ4(getTotalFromArrey(range.map((unit) => unit.rowFour.j4)));
    setK4(getTotalFromArrey(range.map((unit) => unit.rowFour.k4)));
    setL4(getTotalFromArrey(range.map((unit) => unit.rowFour.l4)));
    setM4(getTotalFromArrey(range.map((unit) => unit.rowFour.m4)));
    setN4(getTotalFromArrey(range.map((unit) => unit.rowFour.n4)));
    setO4(getTotalFromArrey(range.map((unit) => unit.rowFour.o4)));
    setP4(getTotalFromArrey(range.map((unit) => unit.rowFour.p4)));
    setQ4(getTotalFromArrey(range.map((unit) => unit.rowFour.q4)));
    setR4(getTotalFromArrey(range.map((unit) => unit.rowFour.r4)));
    setS4(getTotalFromArrey(range.map((unit) => unit.rowFour.s4)));
  }, [range]);

  return (
    <tr className='rowOne'>
      <td>৩+</td>
      <td>{a4}</td>
      <td>{b4}</td>
      <td>{c4}</td>
      <td>{d4}</td>
      <td>{e4}</td>
      <td>{f4}</td>
      <td>{g4}</td>
      <td>{h4}</td>
      <td>{i4}</td>
      <td>{j4}</td>
      <td>{k4}</td>
      <td>{l4}</td>
      <td>{m4}</td>
      <td>{n4}</td>
      <td className='oneTotal'>{o4}</td>
      <td>{p4}</td>
      <td>{q4}</td>
      <td>{r4}</td>
      <td>{s4}</td>
    </tr>
  );
};

export default RowFour;
