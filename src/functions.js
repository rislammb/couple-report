const banglaToEnglish = {
  '০': 0,
  '১': 1,
  '২': 2,
  '৩': 3,
  '৪': 4,
  '৫': 5,
  '৬': 6,
  '৭': 7,
  '৮': 8,
  '৯': 9,
};
const englishToBangla = {
  0: '০',
  1: '১',
  2: '২',
  3: '৩',
  4: '৪',
  5: '৫',
  6: '৬',
  7: '৭',
  8: '৮',
  9: '৯',
};

function replaceToEnglish(input) {
  let output = [];
  for (let i = 0; i < input.length; ++i) {
    if (banglaToEnglish.hasOwnProperty(input[i])) {
      output.push(banglaToEnglish[input[i]]);
    } else {
      output.push(input[i]);
    }
  }
  return output.join('');
}

function replaceToBangla(input) {
  let output = [];
  for (let i = 0; i < input.length; ++i) {
    if (englishToBangla.hasOwnProperty(input[i])) {
      output.push(englishToBangla[input[i]]);
    } else {
      output.push(input[i]);
    }
  }
  return output.join('');
}

export const getRowTotal = (rowValue) => {
  let totalValue = 0;
  Object.entries(rowValue).map((item) => {
    if (item[0] < 'p') {
      totalValue += +replaceToEnglish(item[1]);
    }
  });
  return replaceToBangla(totalValue.toString());
};

export const getTotalRowTotal = (...props) => {
  let totalValue = 0;
  for (let i = 0; i < props.length; i++) {
    Object.entries(props[i]).map((item) => {
      if (item[0] < 'p') {
        totalValue += +replaceToEnglish(item[1]);
      }
    });
  }
  return replaceToBangla(totalValue.toString());
};

export const getColumnTotal = (row1, row2, row3, row4) => {
  let totalValue = 0;
  totalValue += +replaceToEnglish(row1);
  totalValue += +replaceToEnglish(row2);
  totalValue += +replaceToEnglish(row3);
  if (row4) {
    totalValue += +replaceToEnglish(row4);
  }

  return replaceToBangla(totalValue.toString());
};

export const getTotal = (...props) => {
  let totalValue = 0;
  props.map((number) => {
    totalValue += +replaceToEnglish(number);
  });
  return replaceToBangla(totalValue.toString());
};

export const getTotalFromArray = (aray) => {
  let totalValue = 0;
  aray.map((item) => {
    totalValue += +replaceToEnglish(item);
  });
  return replaceToBangla(totalValue.toString());
};

export const getYear = () =>
  replaceToBangla(new Date().getFullYear().toString());

export const getCellATotal = (...props) => {
  let forSum = [];
  let total = 0;
  props.forEach((range) => {
    forSum.push(
      range.rowOne.a1,
      range.rowTwo.a2,
      range.rowThree.a3,
      range.rowFour.a4
    );
  });
  forSum.forEach((item) => {
    total += +replaceToEnglish(item);
  });
  return replaceToBangla(total.toString());
};

export const getCellBTotal = (...props) => {
  let forSum = [];
  let total = 0;
  props.forEach((range) => {
    forSum.push(
      range.rowOne.b1,
      range.rowTwo.b2,
      range.rowThree.b3,
      range.rowFour.b4
    );
  });
  forSum.forEach((item) => {
    total += +replaceToEnglish(item);
  });
  return replaceToBangla(total.toString());
};

export const getCellCTotal = (...props) => {
  let forSum = [];
  let total = 0;
  props.forEach((range) => {
    forSum.push(
      range.rowOne.c1,
      range.rowTwo.c2,
      range.rowThree.c3,
      range.rowFour.c4
    );
  });
  forSum.forEach((item) => {
    total += +replaceToEnglish(item);
  });
  return replaceToBangla(total.toString());
};

export const getCellDTotal = (...props) => {
  let forSum = [];
  let total = 0;
  props.forEach((range) => {
    forSum.push(
      range.rowOne.d1,
      range.rowTwo.d2,
      range.rowThree.d3,
      range.rowFour.d4
    );
  });
  forSum.forEach((item) => {
    total += +replaceToEnglish(item);
  });
  return replaceToBangla(total.toString());
};

export const getCellETotal = (...props) => {
  let forSum = [];
  let total = 0;
  props.forEach((range) => {
    forSum.push(
      range.rowOne.e1,
      range.rowTwo.e2,
      range.rowThree.e3,
      range.rowFour.e4
    );
  });
  forSum.forEach((item) => {
    total += +replaceToEnglish(item);
  });
  return replaceToBangla(total.toString());
};

export const getCellFTotal = (...props) => {
  let forSum = [];
  let total = 0;
  props.forEach((range) => {
    forSum.push(
      range.rowOne.f1,
      range.rowTwo.f2,
      range.rowThree.f3,
      range.rowFour.f4
    );
  });
  forSum.forEach((item) => {
    total += +replaceToEnglish(item);
  });
  return replaceToBangla(total.toString());
};

export const getCellGTotal = (...props) => {
  let forSum = [];
  let total = 0;
  props.forEach((range) => {
    forSum.push(
      range.rowOne.g1,
      range.rowTwo.g2,
      range.rowThree.g3,
      range.rowFour.g4
    );
  });
  forSum.forEach((item) => {
    total += +replaceToEnglish(item);
  });
  return replaceToBangla(total.toString());
};

export const getCellHTotal = (...props) => {
  let forSum = [];
  let total = 0;
  props.forEach((range) => {
    forSum.push(
      range.rowOne.h1,
      range.rowTwo.h2,
      range.rowThree.h3,
      range.rowFour.h4
    );
  });
  forSum.forEach((item) => {
    total += +replaceToEnglish(item);
  });
  return replaceToBangla(total.toString());
};

export const getCellITotal = (...props) => {
  let forSum = [];
  let total = 0;
  props.forEach((range) => {
    forSum.push(
      range.rowOne.i1,
      range.rowTwo.i2,
      range.rowThree.i3,
      range.rowFour.i4
    );
  });
  forSum.forEach((item) => {
    total += +replaceToEnglish(item);
  });
  return replaceToBangla(total.toString());
};

export const getCellJTotal = (...props) => {
  let forSum = [];
  let total = 0;
  props.forEach((range) => {
    forSum.push(
      range.rowOne.j1,
      range.rowTwo.j2,
      range.rowThree.j3,
      range.rowFour.j4
    );
  });
  forSum.forEach((item) => {
    total += +replaceToEnglish(item);
  });
  return replaceToBangla(total.toString());
};

export const getCellKTotal = (...props) => {
  let forSum = [];
  let total = 0;
  props.forEach((range) => {
    forSum.push(
      range.rowOne.k1,
      range.rowTwo.k2,
      range.rowThree.k3,
      range.rowFour.k4
    );
  });
  forSum.forEach((item) => {
    total += +replaceToEnglish(item);
  });
  return replaceToBangla(total.toString());
};

export const getCellLTotal = (...props) => {
  let forSum = [];
  let total = 0;
  props.forEach((range) => {
    forSum.push(
      range.rowOne.l1,
      range.rowTwo.l2,
      range.rowThree.l3,
      range.rowFour.l4
    );
  });
  forSum.forEach((item) => {
    total += +replaceToEnglish(item);
  });
  return replaceToBangla(total.toString());
};

export const getCellMTotal = (...props) => {
  let forSum = [];
  let total = 0;
  props.forEach((range) => {
    forSum.push(
      range.rowOne.m1,
      range.rowTwo.m2,
      range.rowThree.m3,
      range.rowFour.m4
    );
  });
  forSum.forEach((item) => {
    total += +replaceToEnglish(item);
  });
  return replaceToBangla(total.toString());
};

export const getCellNTotal = (...props) => {
  let forSum = [];
  let total = 0;
  props.forEach((range) => {
    forSum.push(
      range.rowOne.n1,
      range.rowTwo.n2,
      range.rowThree.n3,
      range.rowFour.n4
    );
  });
  forSum.forEach((item) => {
    total += +replaceToEnglish(item);
  });
  return replaceToBangla(total.toString());
};

export const getCellPTotal = (...props) => {
  let forSum = [];
  let total = 0;
  props.forEach((range) => {
    forSum.push(
      range.rowOne.p1,
      range.rowTwo.p2,
      range.rowThree.p3,
      range.rowFour.p4
    );
  });
  forSum.forEach((item) => {
    total += +replaceToEnglish(item);
  });
  return replaceToBangla(total.toString());
};

export const getCellQTotal = (...props) => {
  let forSum = [];
  let total = 0;
  props.forEach((range) => {
    forSum.push(
      range.rowOne.q1,
      range.rowTwo.q2,
      range.rowThree.q3,
      range.rowFour.q4
    );
  });
  forSum.forEach((item) => {
    total += +replaceToEnglish(item);
  });
  return replaceToBangla(total.toString());
};

export const getCellRTotal = (...props) => {
  let forSum = [];
  let total = 0;
  props.forEach((range) => {
    forSum.push(range.rowTwo.r2, range.rowThree.r3, range.rowFour.r4);
  });
  forSum.forEach((item) => {
    total += +replaceToEnglish(item);
  });
  return replaceToBangla(total.toString());
};

export const getCellSTotal = (...props) => {
  let forSum = [];
  let total = 0;
  props.forEach((range) => {
    forSum.push(
      range.rowOne.s1,
      range.rowTwo.s2,
      range.rowThree.s3,
      range.rowFour.s4
    );
  });
  forSum.forEach((item) => {
    total += +replaceToEnglish(item);
  });
  return replaceToBangla(total.toString());
};
