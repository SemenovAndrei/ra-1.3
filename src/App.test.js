import { render } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const day = document.querySelector('.ui-datepicker-today')
  const dayTest = document.querySelector('.ui-datepicker-material-day-num')
  expect(day.value).toBe(dayTest.value)
})
