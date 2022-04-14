import styled from '@emotion/styled'
import React from 'react'

const GrowingDiv = styled.div`
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.1);
  }
`

/**
 * Since the <Grow> component is only inteded to wrap components
 * it doesn't accept any props besides the default children prop.
 */
export interface GrowProps {
  children: React.ReactNode
}

/**
 * A wrapper component for adding a growing animation on hover.
 */
export const Grow = ({ children }: GrowProps): JSX.Element => (
  <GrowingDiv>{children}</GrowingDiv>
)
