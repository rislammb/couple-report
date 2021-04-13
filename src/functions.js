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
    if (item[0] < 'o') {
      totalValue += +replaceToEnglish(item[1]);
    }
  });
  return replaceToBangla(totalValue.toString());
};

export const getTotalFromArray = (array) => {
  let totalValue = 0;
  array.map((item) => {
    totalValue += +replaceToEnglish(item);
  });
  return replaceToBangla(totalValue.toString());
};

export const getYear = () =>
  replaceToBangla(new Date().getFullYear().toString());
