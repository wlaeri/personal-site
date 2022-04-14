import { Config } from '@jest/types'

const config: Config.InitialOptions = {
  clearMocks: true,
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
}

export default config
