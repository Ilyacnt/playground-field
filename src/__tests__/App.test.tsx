import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import App from '../Layout'

test('Render App component', () => {
  render(<App />)
  expect(true).toBeTruthy()
})
