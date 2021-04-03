import React from 'react';

import RowOne from './RowOne';
import RowTwo from './RowTwo';
import RowThree from './RowThree';
import RowFour from './RowFour';
import RowFive from './RowFive';

const UnionFortyRange = ({ unionFortyRange }) => {
  return (
    <>
      <RowOne ageRange='৪০-৪৯' range={unionFortyRange} />
      <RowTwo range={unionFortyRange} />
      <RowThree range={unionFortyRange} />
      <RowFour range={unionFortyRange} />
      <RowFive range={unionFortyRange} />
    </>
  );
};

export default UnionFortyRange;
