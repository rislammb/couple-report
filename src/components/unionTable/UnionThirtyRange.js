import React from 'react';

import RowOne from './RowOne';
import RowTwo from './RowTwo';
import RowThree from './RowThree';
import RowFour from './RowFour';
import RowFive from './RowFive';

const UnionThirtyRange = ({ unionThirtyRange }) => {
  return (
    <>
      <RowOne ageRange='৩০-৩৯' range={unionThirtyRange} />
      <RowTwo range={unionThirtyRange} />
      <RowThree range={unionThirtyRange} />
      <RowFour range={unionThirtyRange} />
      <RowFive range={unionThirtyRange} />
    </>
  );
};

export default UnionThirtyRange;
