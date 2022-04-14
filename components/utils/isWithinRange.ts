/**
 * Determines if two numbers are within some range.
 * @param n1 The first number.
 * @param n2 The second number.
 * @param e The acceptable margin of error (epsilon).
 * @return {boolean} True if the difference between the numbers is within
 * the acceptable margin of error. Otherwise, false.
 */
export const isWithinRange = (n1: number, n2: number, e: number): boolean => {
  return Math.abs(n1 - n2) <= Math.abs(e)
}
