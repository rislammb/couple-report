import { rowValue } from './data';

export const redirectTo = (user) => {
  if (user.accountType === 'ইউনিয়ন একাউন্ট') {
    return `/${user.district}/${user.upazila}/${user.union}/edit`;
  } else if (user.accountType === 'উপজেলা একাউন্ট') {
    return `/${user.district}/${user.upazila}`;
  } else if (user.accountType === 'জেলা একাউন্ট') {
    return `/${user.district}`;
  } else return '/';
};

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

export function replaceToBangla(input) {
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

const ageRangeValue = {
  rowOne: { ...rowValue },
  rowTwo: { ...rowValue },
  rowThree: { ...rowValue },
  rowFour: { ...rowValue },
};

export const rangeDataFromDB = (rangeData) => {
  let rangeValue = { ...ageRangeValue };
  const cellTotalFromRow = (rowName, name) =>
    rangeData.map((unit) => unit[rowName][name]);

  rangeValue.rowOne = {
    a: getTotalFromArray(cellTotalFromRow('rowOne', 'a')),
    b: getTotalFromArray(cellTotalFromRow('rowOne', 'b')),
    c: getTotalFromArray(cellTotalFromRow('rowOne', 'c')),
    d: getTotalFromArray(cellTotalFromRow('rowOne', 'd')),
    e: getTotalFromArray(cellTotalFromRow('rowOne', 'e')),
    f: getTotalFromArray(cellTotalFromRow('rowOne', 'f')),
    g: getTotalFromArray(cellTotalFromRow('rowOne', 'g')),
    h: getTotalFromArray(cellTotalFromRow('rowOne', 'h')),
    i: getTotalFromArray(cellTotalFromRow('rowOne', 'i')),
    j: getTotalFromArray(cellTotalFromRow('rowOne', 'j')),
    k: getTotalFromArray(cellTotalFromRow('rowOne', 'k')),
    l: getTotalFromArray(cellTotalFromRow('rowOne', 'l')),
    m: getTotalFromArray(cellTotalFromRow('rowOne', 'm')),
    n: getTotalFromArray(cellTotalFromRow('rowOne', 'n')),
    o: getTotalFromArray(cellTotalFromRow('rowOne', 'o')),
    p: getTotalFromArray(cellTotalFromRow('rowOne', 'p')),
    q: getTotalFromArray(cellTotalFromRow('rowOne', 'q')),
    r: getTotalFromArray(cellTotalFromRow('rowOne', 'r')),
    s: getTotalFromArray(cellTotalFromRow('rowOne', 's')),
  };

  rangeValue.rowTwo = {
    a: getTotalFromArray(cellTotalFromRow('rowTwo', 'a')),
    b: getTotalFromArray(cellTotalFromRow('rowTwo', 'b')),
    c: getTotalFromArray(cellTotalFromRow('rowTwo', 'c')),
    d: getTotalFromArray(cellTotalFromRow('rowTwo', 'd')),
    e: getTotalFromArray(cellTotalFromRow('rowTwo', 'e')),
    f: getTotalFromArray(cellTotalFromRow('rowTwo', 'f')),
    g: getTotalFromArray(cellTotalFromRow('rowTwo', 'g')),
    h: getTotalFromArray(cellTotalFromRow('rowTwo', 'h')),
    i: getTotalFromArray(cellTotalFromRow('rowTwo', 'i')),
    j: getTotalFromArray(cellTotalFromRow('rowTwo', 'j')),
    k: getTotalFromArray(cellTotalFromRow('rowTwo', 'k')),
    l: getTotalFromArray(cellTotalFromRow('rowTwo', 'l')),
    m: getTotalFromArray(cellTotalFromRow('rowTwo', 'm')),
    n: getTotalFromArray(cellTotalFromRow('rowTwo', 'n')),
    o: getTotalFromArray(cellTotalFromRow('rowTwo', 'o')),
    p: getTotalFromArray(cellTotalFromRow('rowTwo', 'p')),
    q: getTotalFromArray(cellTotalFromRow('rowTwo', 'q')),
    r: getTotalFromArray(cellTotalFromRow('rowTwo', 'r')),
    s: getTotalFromArray(cellTotalFromRow('rowTwo', 's')),
  };

  rangeValue.rowThree = {
    a: getTotalFromArray(cellTotalFromRow('rowThree', 'a')),
    b: getTotalFromArray(cellTotalFromRow('rowThree', 'b')),
    c: getTotalFromArray(cellTotalFromRow('rowThree', 'c')),
    d: getTotalFromArray(cellTotalFromRow('rowThree', 'd')),
    e: getTotalFromArray(cellTotalFromRow('rowThree', 'e')),
    f: getTotalFromArray(cellTotalFromRow('rowThree', 'f')),
    g: getTotalFromArray(cellTotalFromRow('rowThree', 'g')),
    h: getTotalFromArray(cellTotalFromRow('rowThree', 'h')),
    i: getTotalFromArray(cellTotalFromRow('rowThree', 'i')),
    j: getTotalFromArray(cellTotalFromRow('rowThree', 'j')),
    k: getTotalFromArray(cellTotalFromRow('rowThree', 'k')),
    l: getTotalFromArray(cellTotalFromRow('rowThree', 'l')),
    m: getTotalFromArray(cellTotalFromRow('rowThree', 'm')),
    n: getTotalFromArray(cellTotalFromRow('rowThree', 'n')),
    o: getTotalFromArray(cellTotalFromRow('rowThree', 'o')),
    p: getTotalFromArray(cellTotalFromRow('rowThree', 'p')),
    q: getTotalFromArray(cellTotalFromRow('rowThree', 'q')),
    r: getTotalFromArray(cellTotalFromRow('rowThree', 'r')),
    s: getTotalFromArray(cellTotalFromRow('rowThree', 's')),
  };

  rangeValue.rowFour = {
    a: getTotalFromArray(cellTotalFromRow('rowFour', 'a')),
    b: getTotalFromArray(cellTotalFromRow('rowFour', 'b')),
    c: getTotalFromArray(cellTotalFromRow('rowFour', 'c')),
    d: getTotalFromArray(cellTotalFromRow('rowFour', 'd')),
    e: getTotalFromArray(cellTotalFromRow('rowFour', 'e')),
    f: getTotalFromArray(cellTotalFromRow('rowFour', 'f')),
    g: getTotalFromArray(cellTotalFromRow('rowFour', 'g')),
    h: getTotalFromArray(cellTotalFromRow('rowFour', 'h')),
    i: getTotalFromArray(cellTotalFromRow('rowFour', 'i')),
    j: getTotalFromArray(cellTotalFromRow('rowFour', 'j')),
    k: getTotalFromArray(cellTotalFromRow('rowFour', 'k')),
    l: getTotalFromArray(cellTotalFromRow('rowFour', 'l')),
    m: getTotalFromArray(cellTotalFromRow('rowFour', 'm')),
    n: getTotalFromArray(cellTotalFromRow('rowFour', 'n')),
    o: getTotalFromArray(cellTotalFromRow('rowFour', 'o')),
    p: getTotalFromArray(cellTotalFromRow('rowFour', 'p')),
    q: getTotalFromArray(cellTotalFromRow('rowFour', 'q')),
    r: getTotalFromArray(cellTotalFromRow('rowFour', 'r')),
    s: getTotalFromArray(cellTotalFromRow('rowFour', 's')),
  };

  return rangeValue;
};

export const renderAlert = (
  unionName,
  upazilaName,
  districtName,
  formOption
) => {
  if (unionName) {
    if (formOption !== 'ইউনিয়ন') {
      if (unionName.includes('এনজিও')) {
        return `${unionName} এর ${formOption} ইউনিটের`;
      } else {
        return `${unionName} ইউনিয়নের ${formOption} ইউনিটের`;
      }
    } else {
      if (unionName.includes('এনজিও')) {
        return `${unionName} এর`;
      } else {
        return `${unionName} ইউনিয়নের`;
      }
    }
  } else if (upazilaName) {
    if (formOption !== 'উপজেলা') {
      return `${formOption} ইউনিয়নের`;
    } else {
      return `${upazilaName} উপজেলার`;
    }
  } else if (districtName) {
    if (formOption !== 'জেলা') {
      return `${formOption} উপজেলার`;
    } else {
      return `${districtName} জেলার`;
    }
  }
};

export const getFormNumber = (
  unionName,
  upazilaName,
  districtName,
  formOption
) => {
  if (unionName) {
    if (formOption === 'ইউনিয়ন') return '২';
    else return '১';
  } else if (upazilaName) {
    if (formOption === 'উপজেলা') return '৩';
    else return '২';
  } else if (districtName) {
    if (formOption === 'জেলা') return '৪';
    else return '৩';
  } else return '';
};

export const getSubmitText = (
  unionName,
  upazilaName,
  districtName,
  formOption
) => {
  if (unionName) {
    if (formOption === 'ইউনিয়ন') return 'উপজেলায় সাবমিট';
    else return 'ইউনিয়নে সাবমিট';
  } else if (upazilaName) {
    if (formOption === 'উপজেলা') return 'জেলায় সাবমিট';
    else return 'ডিলিট করুন';
  } else if (districtName) {
    if (formOption === 'জেলা') return 'বিভাগে সাবমিট';
    else return 'ডিলিট করুন';
  } else return '';
};

export const getCompletedText = (
  unionName,
  upazilaName,
  districtName,
  formOption
) => {
  if (unionName) {
    if (formOption && formOption !== 'ইউনিয়ন') return 'ইউনিয়নে';
    else return 'উপজেলায়';
  } else if (upazilaName) return 'জেলায়';
  else if (districtName) return 'বিভাগে';
  else return '';
};
