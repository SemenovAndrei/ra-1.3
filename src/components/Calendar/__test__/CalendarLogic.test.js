import CalendarLogic from '../CalendarLogic'

const calendarLogic = new CalendarLogic()

test('return date', () => {
  const date = calendarLogic.getDate(new Date(2017, 2, 8))
  expect(date.day).toBe('8')
})

test('return date', () => {
  const date = calendarLogic.getDate(new Date(2021, 2, 8))
  expect(date.year).toBe('2021')
})
