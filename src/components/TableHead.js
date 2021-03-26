import React from 'react';
import { TableHead } from '@material-ui/core';

const TableHeadComp = () => {
  return (
    <TableHead>
      <tr>
        <td rowSpan='4' className='rotate age'>
          <div>বয়সের বিন্যাস</div>
        </td>
        <td rowSpan='4' className='rotate'>
          <div>সন্তান সংখ্যার বিন্যাস</div>
        </td>
        <td colSpan='15' className='center'>
          পদ্ধতি গ্রহণকারী
        </td>
        <td rowSpan='4' className='rotate not-accept'>
          <div>অগ্রহণকারী</div>
        </td>
        <td rowSpan='4' className='rotate pregnant'>
          <div>গর্ভবতী</div>
        </td>
        <td rowSpan='4' className='rotate' style={{ height: '10px' }}>
          <div>মোট জীবিত সন্তান সংখ্যা</div>
        </td>
        <td
          rowSpan='4'
          className='rotate hb-nai'
          style={{ marginBottom: '-70px' }}
        >
          <div>স্বামী বিদেশ</div>
        </td>
      </tr>
      <tr>
        <td colSpan='2' className='center'>
          খাবার বড়ি
        </td>
        <td colSpan='2' className='center'>
          কনডম
        </td>
        <td colSpan='2' className='center'>
          ইনজেকটেবল
        </td>
        <td colSpan='2' className='center'>
          আইইউডি
        </td>
        <td colSpan='2' className='center'>
          ইমপ্লান্ট
        </td>
        <td colSpan='4' className='center'>
          স্থায়ী পদ্ধতি
        </td>
        <td rowSpan='3' className='rotate'>
          <p className='total'>মোট</p>
        </td>
      </tr>
      <tr>
        <td rowSpan='2' className='rotate normal'>
          <p>স্বাভাবিক</p>
        </td>
        <td rowSpan='2' className='rotate'>
          <p>প্রসব পরবর্তী</p>
        </td>
        <td rowSpan='2' className='rotate normal'>
          <p>স্বাভাবিক</p>
        </td>
        <td rowSpan='2' className='rotate'>
          <p>প্রসব পরবর্তী</p>
        </td>
        <td rowSpan='2' className='rotate normal'>
          <p>স্বাভাবিক</p>
        </td>
        <td rowSpan='2' className='rotate'>
          <p>প্রসব পরবর্তী</p>
        </td>
        <td rowSpan='2' className='rotate normal'>
          <p>স্বাভাবিক</p>
        </td>
        <td rowSpan='2' className='rotate'>
          <p>প্রসব পরবর্তী</p>
        </td>
        <td rowSpan='2' className='rotate normal'>
          <p>স্বাভাবিক</p>
        </td>
        <td rowSpan='2' className='rotate'>
          <p>প্রসব পরবর্তী</p>
        </td>

        <td colSpan='2' className='center'>
          পুরুষ
        </td>
        <td colSpan='2' className='center'>
          মহিলা
        </td>
      </tr>

      <tr>
        <td rowSpan='2' className='rotate'>
          <span>স্বাভাবিক</span>
        </td>
        <td rowSpan='2' className='rotate'>
          <span>প্রসব পরবর্তী</span>
        </td>
        <td rowSpan='2' className='rotate'>
          <span>স্বাভাবিক</span>
        </td>
        <td rowSpan='2' className='rotate'>
          <span>প্রসব পরবর্তী</span>
        </td>
      </tr>
    </TableHead>
  );
};

export default TableHeadComp;
