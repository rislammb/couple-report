import React from 'react';

import RowOne from './RowOne';
import RowTwo from './RowTwo';
import RowThree from './RowThree';
import RowFour from './RowFour';

const UnionZeroRange = ({ unionZeroRange }) => {
  return (
    <>
      <RowOne ageRange='<২০' range={unionZeroRange} />
      <RowTwo range={unionZeroRange} />
      <RowThree range={unionZeroRange} />
      <RowFour range={unionZeroRange} />
      <RowFour range={unionZeroRange} />
    </>
  );
};

export default UnionZeroRange;
