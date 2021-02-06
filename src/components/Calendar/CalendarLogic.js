import moment from 'moment'
import 'moment/locale/ru'

export default class CalendarLogic {
  constructor() {
    this.date = {}
  }

  addValues(object) {
    moment.suppressDeprecationWarnings = true
    moment.locale('ru')
    this.date.date = moment(object)

    this.date.day = this.date.date.format('D')

    this.date.dayFull = this.date.date.format('dddd')

    this.date.month = this.date.date.format('MMMM')

    this.date.monthShort = this.date.date.format('MM')

    this.date.monthTransform = this.date.date.format('Do MMMM').split(' ')[1]

    this.date.year = this.date.date.format('YYYY')

    this.date.fullMonth = this.date.date.daysInMonth()

    this.date.result = []

    for (let i = 1; i <= this.date.fullMonth; i += 1) {
      this.date.result.push([i, 'current'])
    }

    this.checkPrevDays()
    this.checkNextDays()
    this.getClasses()
    this.splitToWeek()
  }

  checkPrevDays() {
    const firstDate = moment(
      `${this.date.year} ${this.date.monthShort} ${this.date.result[0][0]}`
    )

    function addPrevDays() {
      if (firstDate.format('dddd') !== 'понедельник') {
        const tempDate = firstDate.subtract(1, 'day')
        const tempDay = tempDate.format('D')
        this.date.result.unshift([Number(tempDay), 'prev'])
        addPrevDays.bind(this)()
      }
    }

    addPrevDays.bind(this)()
  }

  checkNextDays() {
    const lastDate = moment(
      `${this.date.year} ${this.date.monthShort} ${
        this.date.result[this.date.result.length - 1][0]
      }`
    )

    function addNextDays() {
      if (lastDate.format('dddd') !== 'воскресенье') {
        const tempDate = lastDate.add(1, 'day')
        const tempDay = tempDate.format('D')
        this.date.result.push([Number(tempDay), 'next'])
        addNextDays.bind(this)()
      }
    }

    addNextDays.bind(this)()
  }

  getClasses() {
    const resultHasClasses = []

    function resultGetClasses() {
      this.date.result.forEach(e => {
        if (e[1] !== 'current') {
          e[1] = 'ui-datepicker-other-month'
        }

        if (e[0] === Number(this.date.day)) {
          e[1] = 'ui-datepicker-today'
        }

        resultHasClasses.push(e)
      })
    }

    resultGetClasses.bind(this)()

    this.date.resultHasClasses = resultHasClasses
  }

  splitToWeek() {
    function resultToWeek() {
      const weeks = this.date.result.length / 7

      for (let i = 0; i < weeks; i += 1) {
        const part = this.date.resultHasClasses.splice(0, 7)
        this.date.resultHasClasses.push(part)
      }
    }
    resultToWeek.bind(this)()
  }

  getDate(object) {
    this.addValues(object)

    return this.date
  }
}
