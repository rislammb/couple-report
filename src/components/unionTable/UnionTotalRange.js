import React, { useState, useEffect } from 'react';

import TotalRowOne from './TotalRowOne';
import TotalRowTwo from './TotalRowTwo';
import TotalRowThree from './TotalRowThree';
import TotalRowFour from './TotalRowFour';
import TotalRowFive from './TotalRowFive';

const UnionTotalRange = ({
  unionZeroRange,
  unionTwentyRange,
  unionThirtyRange,
  unionFortyRange,
}) => {
  const [rowOneData, setRowOneData] = useState([]);
  const [rowTwoData, setRowTwoData] = useState([]);
  const [rowThreeData, setRowThreeData] = useState([]);
  const [rowFourData, setRowFourData] = useState([]);

  useEffect(() => {
    let rowOneTempData = [];
    rowOneTempData.push(...unionZeroRange.map((item) => item.rowOne));
    rowOneTempData.push(...unionTwentyRange.map((item) => item.rowOne));
    rowOneTempData.push(...unionThirtyRange.map((item) => item.rowOne));
    rowOneTempData.push(...unionFortyRange.map((item) => item.rowOne));
    setRowOneData(rowOneTempData);

    let rowTwoTempData = [];
    rowTwoTempData.push(...unionZeroRange.map((item) => item.rowTwo));
    rowTwoTempData.push(...unionTwentyRange.map((item) => item.rowTwo));
    rowTwoTempData.push(...unionThirtyRange.map((item) => item.rowTwo));
    rowTwoTempData.push(...unionFortyRange.map((item) => item.rowTwo));
    setRowTwoData(rowTwoTempData);

    let rowThreeTempData = [];
    rowThreeTempData.push(...unionZeroRange.map((item) => item.rowThree));
    rowThreeTempData.push(...unionTwentyRange.map((item) => item.rowThree));
    rowThreeTempData.push(...unionThirtyRange.map((item) => item.rowThree));
    rowThreeTempData.push(...unionFortyRange.map((item) => item.rowThree));
    setRowThreeData(rowThreeTempData);

    let rowFourTempData = [];
    rowFourTempData.push(...unionZeroRange.map((item) => item.rowFour));
    rowFourTempData.push(...unionTwentyRange.map((item) => item.rowFour));
    rowFourTempData.push(...unionThirtyRange.map((item) => item.rowFour));
    rowFourTempData.push(...unionFortyRange.map((item) => item.rowFour));
    setRowFourData(rowFourTempData);
  }, [unionZeroRange, unionTwentyRange, unionThirtyRange, unionFortyRange]);

  return (
    <>
      <TotalRowOne rowOneData={rowOneData} />
      <TotalRowTwo rowTwoData={rowTwoData} />
      <TotalRowThree rowThreeData={rowThreeData} />
      <TotalRowFour rowFourData={rowFourData} />
      <TotalRowFive
        rowOneData={rowOneData}
        rowTwoData={rowTwoData}
        rowThreeData={rowThreeData}
        rowFourData={rowFourData}
      />
    </>
  );
};

export default UnionTotalRange;
