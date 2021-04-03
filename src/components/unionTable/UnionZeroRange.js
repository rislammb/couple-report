import React from 'react';

import RowOne from './RowOne';
import RowTwo from './RowTwo';
import RowThree from './RowThree';
import RowFour from './RowFour';
import RowFive from './RowFive';

const UnionZeroRange = ({ unionZeroRange }) => {
  return (
    <>
      <RowOne ageRange='<২০' range={unionZeroRange} />
      <RowTwo range={unionZeroRange} />
      <RowThree range={unionZeroRange} />
      <RowFour range={unionZeroRange} />
      <RowFive range={unionZeroRange} />
    </>
  );
};

export default UnionZeroRange;
