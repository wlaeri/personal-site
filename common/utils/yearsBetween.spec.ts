import { isWithinRange } from './isWithinRange'
import { yearsBetween } from './yearsBetween'

describe('yearsBetween', () => {
  it('should be accurate within a margin of error of 10e-5 for two dates exactly one year apart', () => {
    const t1 = new Date(2021, 1, 1)
    const t2 = new Date(2022, 1, 1)
    const yearsBetweenDates = yearsBetween(t1, t2)
    expect(isWithinRange(yearsBetweenDates, 1, 0.00001)).toEqual(true)
  })
})
