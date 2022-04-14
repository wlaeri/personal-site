const MILLISECONDS_IN_A_YEAR = 1000 * 60 * 60 * 24 * 365 // Does not take into account leap years, seconds, etc. Just an estimate.

/**
 * Calculates the time passed between two dates in years.
 * @param t1 The earlier date.
 * @param t2 The later date.
 * @return {number} The number of years between the two dates.
 */
export const yearsBetween = (t1: Date, t2: Date): number => {
  return (t2.valueOf() - t1.valueOf()) / MILLISECONDS_IN_A_YEAR
}
