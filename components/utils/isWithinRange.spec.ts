import { isWithinRange } from './isWithinRange'

describe('isWithinRange', () => {
  it('should return TRUE for two equal numbers and an epsilon of 0', () => {
    expect(isWithinRange(1, 1, 0)).toEqual(true)
  })

  it('should return TRUE for two unequal numbers within the provided range', () => {
    expect(isWithinRange(1, 2, 1)).toEqual(true)
  })

  it('should return FALSE for two unequal numbers within the provided range', () => {
    expect(isWithinRange(1, 3, 1)).toEqual(false)
  })
})
