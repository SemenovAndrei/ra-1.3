import Calendar from './components/Calendar/Calendar'
import './App.css'

function App() {
  const now = new Date(2017, 4, 8)
  return <Calendar className="calendar" date={now} />
}

export default App
