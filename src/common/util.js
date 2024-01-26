const deepClone = (obj) => {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  const clonedObj = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key]);
    }
  }

  return clonedObj;
};

const addComma = (money) => {
  let parts = money.toString().split(".");

  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return parts.join(".");
};

const isEmpty = (value) => {
  return value === "";
};

const createInitialCount = (start, end) => {
  const count = {};
  for (let i = start; i <= end; i++) {
    count[i] = 0;
  }
  return count;
};

const getAllRanges = (arr, age) => {
  if (arr.length > 0 && arr[arr.length - 1][1] + 1 === age) {
    arr[arr.length - 1][1] = age;
  } else {
    arr.push([age, age]);
  }
};

const getNumberIntervals = (allInputGroup, min = 0, max = 20) => {
  const count = createInitialCount(min, max);
  let overlap = [];
  let notInclude = [];

  for (let i = 0; i < allInputGroup.length; i++) {
    let min = allInputGroup[i][0];
    let max = allInputGroup[i][1];
    for (let j = min; j <= max; j++) {
      count[j] += 1;
    }
  }

  Object.keys(count).forEach((age) => {
    if (!count[age]) {
      getAllRanges(notInclude, Number(age));
    }
    if (count[age] >= 2) {
      getAllRanges(overlap, Number(age));
    }
  });

  return { overlap, notInclude };
};

const getIsOverlap = (currentRange, allOverlapRange) => {
  let isOverlap = false;
  for (let overlapRange of allOverlapRange) {
    const checkOption = [currentRange, overlapRange];
    const { overlap } = getNumberIntervals(checkOption);
    if (overlap.length !== 0) {
      isOverlap = true;
      break;
    }
  }
  return isOverlap;
};

const getValidInputValue = (value) => {
  let validInput = value.replace(/[^0-9.]/g, "");

  let decimalCount = validInput.split(".").length - 1;
  if (decimalCount > 1) {
    validInput = validInput.slice(0, validInput.lastIndexOf("."));
  }

  return validInput;
};

export {
  deepClone,
  isEmpty,
  addComma,
  getNumberIntervals,
  getIsOverlap,
  getValidInputValue,
};
