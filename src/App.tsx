import Footer from "./components/Footer"
import Header from "./components/Header"
import Pomodoro_Timer from "./components/Pomodoro_Timer"
import './index.css'



function App() {
  return(
    <div className="main-container">
      <Header/>
      <Pomodoro_Timer/>
      <Footer/>
    </div>
    
  )
}

export default App
