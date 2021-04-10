import React from 'react';

const UnitRow = (props) => {
  const { ageRange, rowData, frist, childRange } = props;

  return (
    <tr className='rowData'>
      {frist && (
        <td rowSpan='5' className='rotate'>
          {ageRange}
        </td>
      )}
      <td>{childRange}</td>
      <td>{rowData.a}</td>
      <td>{rowData.b}</td>
      <td>{rowData.c}</td>
      <td>{rowData.d}</td>
      <td>{rowData.e}</td>
      <td>{rowData.f}</td>
      <td>{rowData.g}</td>
      <td>{rowData.h}</td>
      <td>{rowData.i}</td>
      <td>{rowData.j}</td>
      <td>{rowData.k}</td>
      <td>{rowData.l}</td>
      <td>{rowData.m}</td>
      <td>{rowData.n}</td>
      <td>{rowData.o}</td>
      <td>{rowData.p}</td>
      <td>{rowData.q}</td>
      <td className={frist ? 'close' : ''}>{!frist && rowData.r}</td>
      <td>{rowData.s}</td>
    </tr>
  );
};

export default UnitRow;
