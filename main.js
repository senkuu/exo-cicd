/**
 * Check if parameters are number based on their variable type.
 * @param {number} first - The first number passed as parameters.
 * @param {number} second - The second number.
 * @return {boolean} return true if parameters are numbers.
 */
function areParametersNumber(first, second) {
  if (typeof first !== "number") {
    throw new TypeError(`${first} is not a number`);
  }

  if (typeof second !== "number") {
    throw new TypeError(`${second} is not a number`);
  }

  return true;
}

/**
 * Return the sum from two numbers passed as parameters
 * @param {number} first - The first number passed as parameters.
 * @param {number} second - The second number.
 * @return {number} return the sum between both numbers
 */
function add(first, second) {
  areParametersNumber(first, second);
  return first + second;
}

/**
 * Return the minus from two numbers passed as parameters
 * @param {number} first - The first number passed as parameters.
 * @param {number} second - The second number.
 * @return {number} return the minus between both numbers
 */
function minus(first, second) {
  areParametersNumber(first, second);
  return first - second;
}

/**
 * Return the divide result from two numbers passed as parameters
 * @param {number} first - The first number passed as parameters.
 * @param {number} second - The second number.
 * @return {number} return the divide between both numbers
 */
function divide(first, second) {
  areParametersNumber(first, second);
  if (second === 0) {
    throw new Error("Can't divide per 0");
  }
  return first / second;
}

/**
 * Return the multiply result from two numbers passed as parameters
 * @param {number} first - The first number passed as parameters.
 * @param {number} second - The second number.
 * @return {number} return the multiply between both numbers
 */
function multiply(first, second) {
  areParametersNumber(first, second);
  return first * second;
}

module.exports = {
  areParametersNumber,
  add,
  minus,
  divide,
  multiply,
};
