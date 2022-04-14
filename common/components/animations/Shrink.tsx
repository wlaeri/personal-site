import styled from '@emotion/styled'
import React from 'react'

const ShrinkingDiv = styled.div`
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(0.95);
  }
`

/**
 * Since the <Shrink> component is only inteded to wrap components
 * it doesn't accept any props besides the default children prop.
 */
export interface ShrinkProps {
  children: React.ReactNode
}

/**
 * A wrapper component for adding a shrinking animation on hover.
 */
export const Shrink = ({ children }: ShrinkProps): JSX.Element => (
  <ShrinkingDiv>{children}</ShrinkingDiv>
)
