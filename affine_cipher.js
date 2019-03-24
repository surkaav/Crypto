'use strict';
import { validateIntegers, areCoprime, stringToNumArray, bringInRange, numArrayToString } from './utils';


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
    validateIntegers(keyA, keyB);

    if (!areCoprime(keyA, 68))
      throw new RangeError(`"${keyA}" is not Co-Prime with 68`);

    if (keyB < 0 || keyB > 67)
      throw new RangeError(`"${keyB}" is not between 0-67`);


    return plaintext
      .replace(/\ +/g, ' ')
      .split(' ')
      .map((s)  => stringToNumArray(s))
      .map((na) => na.map((n) => (n * keyA) + keyB))
      .map((na) => na.map((n) => bringInRange(n)))
      .map((na) => numArrayToString(na))
      .join(' ');
  }
};


export default Affine;
