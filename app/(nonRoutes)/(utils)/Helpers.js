"use client"

export function generatePassword() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < 8; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

export const truncateString = (str, num) => {
  if (str?.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
};

export const calculateDiscount = (giveawayPrice, realPrice) => {
  const discount = realPrice - giveawayPrice;
  const discountPercentage = Math.round((discount / realPrice) * 100);
  return discountPercentage;
};

export function convertStringsToNumbers(arr) {
  if (arr.length === 0) {
    return '';
  }

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const parsedNumber = parseFloat(arr[i]);

    if (!isNaN(parsedNumber)) {
      result.push(parsedNumber);
    }
  }

  return result;
}

export function sortClothSizes(sizes) {
  const letterSizeOrder = {
    S: 1,
    M: 2,
    L: 3,
    XL: 4,
    XXL: 5,
    XXXL: 6
  };

  const numberSizeOrder = {
    35: 1,
    36: 2,
    37: 3,
    38: 4,
    39: 5,
    40: 6,
    41: 7,
    42: 8,
    43: 9,
    44: 10,
    45: 11,
    46: 12,
    47: 13,
    48: 14
  };

  sizes.sort((a, b) => {
    const sizeA = a.size;
    const sizeB = b.size;

    const parsedSizeA = parseInt(sizeA);
    const parsedSizeB = parseInt(sizeB);

    if (!isNaN(parsedSizeA) && !isNaN(parsedSizeB)) {
      // Both sizes are string numbers
      return numberSizeOrder[parsedSizeA] - numberSizeOrder[parsedSizeB];
    } else if (!isNaN(parsedSizeA) && isNaN(parsedSizeB)) {
      // Size A is a string number, Size B is a letter size
      return -1;
    } else if (isNaN(parsedSizeA) && !isNaN(parsedSizeB)) {
      // Size A is a letter size, Size B is a string number
      return 1;
    } else {
      // Both sizes are letter sizes
      return letterSizeOrder[sizeA] - letterSizeOrder[sizeB];
    }
  });

  return sizes;
}