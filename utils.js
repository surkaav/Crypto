'use strict';

// Utility Methods
// ---------------
const VALUES={
    'a': 0 ,
    'b': 1 ,
    'c': 2 ,
    'd': 3 ,
    'e': 4 ,
    'f': 5 ,
    'g': 6 ,
    'h': 7 ,
    'i': 8 ,
    'j': 9 ,
    'k': 10 ,
    'l': 11 ,
    'm': 12 ,
    'n': 13 ,
    'o': 14 ,
    'p': 15 ,
    'q': 16 ,
    'r': 17 ,
    's': 18 ,
    't': 19 ,
    'u': 20 ,
    'v': 21 ,
    'w': 22 ,
    'x': 23 ,
    'y': 24 ,
    'z': 25 ,
    'A': 26 ,
    'B': 27 ,
    'C': 28 ,
    'D': 29 ,
    'E': 30 ,
    'F': 31 ,
    'G': 32 ,
    'H': 33 ,
    'I': 34 ,
    'J': 35 ,
    'K': 36 ,
    'L': 37 ,
    'M': 38 ,
    'N': 39 ,
    'O': 40 ,
    'P': 41 ,
    'Q': 42 ,
    'R': 43 ,
    'S': 44 ,
    'T': 45 ,
    'U': 46 ,
    'V': 47 ,
    'W': 48 ,
    'X': 49 ,
    'Y': 50 ,
    'Z': 51 ,
    '1': 52,
    '2': 53,
    '3': 54,
    '4': 55,
    '5': 56,
    '6': 57,
    '7': 58,
    '8': 59,
    '9': 60,
    '0': 61,
    '@': 62,
    '#': 63,
    '$': 64,
    '*': 65,
    '_': 66,
    '!': 67
}

const VALUES_RANGE=Object.keys(VALUES).length;
class NotAnIntegerError        extends TypeError {}
class NotAPositiveIntegerError extends NotAnIntegerError {}


/**
 * Converts a number into
 * character
 *
 * @param  {number} num
 * @return {string}
 */
const numToChar = (num) => {
    return Object.keys(VALUES).find(key=>VALUES[key]===num);
  };


/**
 * Converts an array of 0-25 numbers into a String
 *
 * @param  {array} array
 * @return {string}
 */
const numArrayToString = (array) => {
  return array.map(numToChar).join('');
};


/**
 * Converts an A-Z character to an integer
 * in the 0-25 range
 *
 * @param  {string} char - One Letter String
 * @return {number}
 */
const charToNum = (char) => {
  return VALUES[char];
}

const stringToNumArray = (string) => {
    return string.split('').map(charToNum);
  };

/**
 * Does a Postive Mod (result is always a positive integer)
 *
 * @param  {number} num
 * @return {number}
 */
const positiveMod = (num, div) => {
  return ((num % div) + div) % div;
}


/**
 * Bring a number bigger than the range, back into range
 *
 * @param  {number} num
 * @return {number}
 */
const bringInRange = (num) => {
  return positiveMod(num, VALUES_RANGE);
}


/**
 * Checks if all passed arguments are Integers,
 * and throws a TypeError if not
 *
 * @param  {any}
 * @return {boolean}
 */
const validateIntegers = (t, ...terms) => {
  const isInteger = (term) => {
    if (typeof term === 'number' && (term % 1) === 0)
      return true;
    else
      throw new NotAnIntegerError(`"${term}" is not a valid Integer`);
  }

  return terms.concat(t).map(isInteger) && true;
}


/**
 * Calculates GCD of two integers using Euclidean Algorithm.
 *
 * @param  {number}
 * @param  {number}
 * @return {number}
 */
const gcd = (a, b) => {
  validateIntegers(a, b);

  if (a <= 0 || b < 0)
    throw new NotAPositiveIntegerError('Only Positive Integers can be used for GCD');

  if (b === 0)
    return a;
  else
    return gcd(b, a % b);
}


/**
 * Calculates GCD along with the Multiplicative Inverse of two
 * integers using Extended Euclidean Algorithm
 *
 * @param  {number}
 * @param  {number}
 * @return {number}
 */
const xgcd = (a, b) => {
  if (b === 0) {
    return [1, 0, a];

  } else {
    let x, y, d;
    [x, y, d] = xgcd(b, a % b);

    return [y, x - y * Math.floor(a/b), d];
  }
}


/**
 * Finds multiplicative inverse of "a" w.r.t. "b" using
 * Extended Euclidean Algorithm
 *
 * @param  {number} a
 * @param  {number} b
 * @return {number}
 */
const multiplicativeInverse = (a, b) => {
  validateIntegers(a, b);

  if (a <= 0 || b < 0)
    throw new NotAPositiveIntegerError('Only Positive Integers can be used for GCD');

  return positiveMod(xgcd(a, b)[0], b);
}


/**
 * Checks if two numbers are co-prime
 *
 * @param  {number}
 * @param  {number}
 * @return {boolean}
 */
const areCoprime = (a, b) => {
  return gcd(a, b) === 1;
}


  

// Export Modules
// --------------

module.exports = {
  VALUES,
  VALUES_RANGE,

  NotAnIntegerError,
  NotAPositiveIntegerError,

  numToChar,
  charToNum,
  numArrayToString,
  bringInRange,
  stringToNumArray,

  gcd,
  multiplicativeInverse,
  areCoprime,
  validateIntegers,
  cleanString
};