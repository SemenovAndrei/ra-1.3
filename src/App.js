import Calendar from './components/Calendar/Calendar'
import './App.css'

function App() {
  /**
   * Указанная дата
   */
  // const now = new Date(2017, 2, 8)
  const now = new Date()

  return <Calendar className="calendar" date={now} />
}

export default App
