'use strict';

const isLeapYear = year => {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
    return year;
  } else {
    return false;
  }
}

const getLeapYears = (st_year, end_year) => {
  const arr = [];

  for (let i = st_year; i <= end_year; i++) {
    arr.push(i);
  }

  const newArr = [];

  arr.forEach(
    year => {
      if (isLeapYear(year))
        newArr.push(year);
    });

  return newArr;
}

console.log(getLeapYears(2000, 2022));
