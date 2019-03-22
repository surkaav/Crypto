'use strict';

const utils = require('./utils');


const Affine = {
  /**
   * Encrypts a Plaintext with the given numeric A, B key
   * pair using Affine Cipher
   *
   * @param  {string} plaintext
   * @param  {number} key A
   * @param  {number} key B
   * @return {string} ciphertext
   */
  encrypt: (plaintext, keyA, keyB) => {
    utils.validateIntegers(keyA, keyB);

    if (!utils.areCoprime(keyA, 68))
      throw new RangeError(`"${keyA}" is not Co-Prime with 68`);

    if (keyB < 0 || keyB > 67)
      throw new RangeError(`"${keyB}" is not between 0-67`);


    return plaintext
      .replace(/\ +/g, ' ')
      .split(' ')
      .map((s)  => utils.stringToNumArray(s))
      .map((na) => na.map((n) => (n * keyA) + keyB))
      .map((na) => na.map((n) => utils.bringInRange(n)))
      .map((na) => utils.numArrayToString(na))
      .join(' ');
  }
};


module.exports = Affine;