function integer_to_roman(num) {
  if (typeof num !== "number") return false;

  var digits = String(+num).split(""),
    key = [
      "",
      "C",
      "CC",
      "CCC",
      "CD",
      "D",
      "DC",
      "DCC",
      "DCCC",
      "CM",
      "",
      "X",
      "XX",
      "XXX",
      "XL",
      "L",
      "LX",
      "LXX",
      "LXXX",
      "XC",
      "",
      "I",
      "II",
      "III",
      "IV",
      "V",
      "VI",
      "VII",
      "VIII",
      "IX",
    ],
    roman_num = "",
    i = 3;
  while (i--) roman_num = (key[+digits.pop() + i * 10] || "") + roman_num;
  return Array(+digits.join("") + 1).join("M") + roman_num;
}

console.log(integer_to_roman(27));
console.log(integer_to_roman(100));
console.log(integer_to_roman(65));

function toRoman(num) {
  let romToNum = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };

  let romanNumeral = "";

  for (val in romToNum) {
    romanNumeral += val.repeat(Math.floor(num / romToNum[val]));
    num %= romToNum[val];
  }

  return result;
}

function toRoman(num) {
  let roman = "";
  while (num) {
    if (num === 1000) {
      num -= 1000;
      roman += "M";
    } else if (num >= 500) {
      num -= 500;
      roman += "D";
    } else if (num >= 100) {
      num -= 100;
      roman += "C";
    } else if (num >= 50) {
      num -= 50;
      roman += "L";
    } else if (num >= 10) {
      num -= 10;
      roman += "X";
    } else if (num >= 5) {
      num -= 5;
      roman += "V";
    } else {
      num -= 1;
      roman += "I";
    }
  }
  return roman;
}

let romanNums = [
  [500, "D"],
  [100, "C"],
  [50, "L"],
  [10, "X"],
  [5, "V"],
  [1, "I"],
];

function convertToRoman(num) {
  if (num === 0) {
    return "";
  }
  for (let i = 0; i < romanNums.length; i++) {
    if (num >= romanNums[i][0]) {
      return romanNums[i][1] + convertToRoman(num - romanNums[i][0]);
    }
  }
}

console.log(convertToRoman(9));
