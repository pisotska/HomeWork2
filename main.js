// 2.(exponentiation)

function elevation(x, n) {
  let calkulus = x;
  for (let i = 1; i < n; i++) {
    calkulus = calkulus * x;
  }
  return calkulus;
}
// console.log(elevation(2, 3));

//6.(repetition of letters)
function letters(str) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    // console.log(str[i]);
    if (str[i] === "a") {
      counter++;
    }
  }
  return counter;
}
//console.log(letters("mariaaaa"));

// 10. (Palindrom)

function isPalindrom(str) {
  let result = true;
  for (let i = 0; i < str.length / 2; i++) {
    const leftChar = str[i];
    console.log("leftChar:", leftChar);
    const rightChar = str[str.length - (i + 1)];
    console.log("rightChar:", rightChar);
    if (leftChar !== rightChar) {
      return false;
    }
  }
  return result;
}
//console.log(isPalindrom("korok"));

// 3. (Make the first letter uppercase)
function firstLetter(str) {
  return str[0].toUpperCase() + str.substring(1);
}
//console.log(firstLetter("maria"));

//9. (delete letters) - done (2) - Чьто нє так з першим варіатом?
function deleteLetters(sym, str) {
  //let newString = "";
  sym = sym.toLoverCase();
  for (let i = 0; i < str.length; i++) {
    if (str[i] != "a") {
      newString = newString + str[i];
      return newString;
    }
  }
}
//console.log(deleteLetters("a","mariaa"));

function deleteLetters(text) {
  result = text.replace(/a/g, "");
  return result;
}
// console.log(deleteLetters("maria"));

// 1. the largest digit in the number
function getMaxDigit(num) {
  if (num == 0) {
    return 0;
  } else {
    return Math.max(num % 10, getMaxDigit(Math.floor(num / 10)));
  }
}
// console.log(getMaxDigit(16984));

//let number = prompt("Введіть будь-яке ціле число: ", "16984");
// max = 0;
//console.log(number);
// while (number != 0) {
//  if (number % 10 > max) max = number % 10;
//  cislo = number / 10;
//}
// console.log(max.toString()[0]);

// 8. generate password
function getRandomPassword(length, charset) {
  let password = "";
  for (let i = 0; i < length; ++i) {
    password = password + charset[Math.floor(Math.random() * charset.length)];
  }
  return password;
}
//console.log(getRandomPassword(3, "12345678"));

// 5. random number from n to m
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//console.log(getRandomNumber(1, 10));

// 7.

const convertCur = (str) => {
  const convertUSDindex = str.indexOf("$");
  const convertUAHindex = str.indexOf("UAH");

  if (convertUSDindex > 0) {
    const sum = str.slice(0, convertUSDindex);
    const grn = sum * 25;
    return grn;
  } else if (convertUAHindex > 0) {
    const sum = str.slice(0, convertUAHindex);
    const dol = sum / 25;
    return dol;
  }
};
