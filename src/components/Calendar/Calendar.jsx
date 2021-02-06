import React from 'react'
import CalendarLogic from './CalendarLogic'
// import moment from 'moment'
// import 'moment/locale/ru'
import './calendar.css'

const calendarLogic = new CalendarLogic()

/**
 * Отображает указанную дату в календаре
 *
 * @param {date} props - дата
 */
export default function Calendar(props) {
  const date = calendarLogic.getDate(props.date)

  // moment.suppressDeprecationWarnings = true
  // moment.locale('ru')
  // const date = moment(props.date)

  // const day = date.format('D')

  // const dayFull = date.format('dddd')

  // const month = date.format('MMMM')

  // const monthShort = date.format('MM')

  // const monthTransform = date.format('Do MMMM').split(' ')[1]

  // const year = date.format('YYYY')

  // const fullMonth = date.daysInMonth()

  // const result = []

  // for (let i = 1; i <= fullMonth; i += 1) {
  //   result.push([i, 'current'])
  // }

  // const firstDate = moment(`${year} ${monthShort} ${result[0][0]}`)

  // function addPrevDays() {
  //   if (firstDate.format('dddd') !== 'понедельник') {
  //     const tempDate = firstDate.subtract(1, 'day')
  //     const tempDay = tempDate.format('D')
  //     result.unshift([Number(tempDay), 'prev'])
  //     addPrevDays()
  //   }
  // }

  // const lastDate = moment(`${year} ${monthShort} ${result[result.length - 1][0]}`)

  // function addNextDays() {
  //   if (lastDate.format('dddd') !== 'воскресенье') {
  //     const tempDate = lastDate.add(1, 'day')
  //     const tempDay = tempDate.format('D')
  //     result.push([Number(tempDay), 'next'])
  //     addNextDays()
  //   }
  // }

  // addPrevDays()
  // addNextDays()

  // const resultHasClasses = []

  // function resultGetClasses() {
  //   result.forEach(e => {
  //     if (e[1] !== 'current') {
  //       e[1] = 'ui-datepicker-other-month'
  //     }

  //     if (e[0] === Number(day)) {
  //       e[1] = 'ui-datepicker-today'
  //     }

  //     resultHasClasses.push(e)
  //   })
  // }
  // resultGetClasses()

  // function resultToWeek() {
  //   const weeks = result.length / 7

  //   for (let i = 0; i < weeks; i += 1) {
  //     const part = resultHasClasses.splice(0, 7)
  //     resultHasClasses.push(part)
  //   }
  // }

  // resultToWeek()

  return (
    <div className="ui-wrapper">
      <div className="ui-datepicker">
        <div className="ui-datepicker-material-header">
          <div className="ui-datepicker-material-day">{date.dayFull}</div>
          <div className="ui-datepicker-material-date">
            <div className="ui-datepicker-material-day-num">{date.day}</div>
            <div className="ui-datepicker-material-month">{date.monthTransform}</div>
            <div className="ui-datepicker-material-year">{date.year}</div>
          </div>
          <div className="ui-datepicker-material-header">
            <div className="ui-datepicker-title">
              <span className="ui-datepicker-material-month">{date.month}</span>
              &nbsp;
              <span className="ui-datepicker-material-year">{date.year}</span>
            </div>
          </div>
        </div>
        <table className="ui-datepicker-calendar">
          <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col />
            <col className="ui-datepicker-week-end" />
            <col className="ui-datepicker-week-end" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" title="Понедельник">
                Пн
              </th>
              <th scope="col" title="Вторник">
                Вт
              </th>
              <th scope="col" title="Среда">
                Ср
              </th>
              <th scope="col" title="Четверг">
                Чт
              </th>
              <th scope="col" title="Пятница">
                Пт
              </th>
              <th scope="col" title="Суббота">
                Сб
              </th>
              <th scope="col" title="Воскресенье">
                Вс
              </th>
            </tr>
          </thead>
          <tbody>
            {date.resultHasClasses.map(e => (
              <tr key={e[0]}>
                {e.map(el => (
                  <td className={el[1]} key={el[0]}>
                    {el[0]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
