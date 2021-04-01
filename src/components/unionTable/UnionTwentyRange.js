import React from 'react';

import RowOne from './RowOne';
import RowTwo from './RowTwo';
import RowThree from './RowThree';
import RowFour from './RowFour';

const UnionTwentyRange = ({ unionTwentyRange }) => {
  return (
    <>
      <RowOne ageRange='২০-২৯' range={unionTwentyRange} />
      <RowTwo range={unionTwentyRange} />
      <RowThree range={unionTwentyRange} />
      <RowFour range={unionTwentyRange} />
      <RowFour range={unionTwentyRange} />
    </>
  );
};

export default UnionTwentyRange;
