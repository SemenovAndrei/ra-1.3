import { render } from '@testing-library/react'
import Calendar from '../Calendar'

test('renders calendar', () => {
  const date = new Date(2017, 2, 8)

  render(<Calendar date={date} />)
  const day = document.querySelector('.ui-datepicker-today')
  expect(day.textContent).toBe('8')
})

test('renders calendar', () => {
  const date = new Date(2015, 2, 18)

  render(<Calendar date={date} />)
  const year = document.querySelector('.ui-datepicker-material-year')
  expect(year.textContent).toBe('2015')
})
