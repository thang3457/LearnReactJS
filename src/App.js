import {useState} from 'react'
import Content from "./Contents";
import Exercise from "./Exercise";
import MyApp from './MyApp'

function App() {
  const [show, setshow] = useState(false)
  const [showExercise, setShowExercise] = useState(false)
  const [showMyApp, setShowMyApp] = useState(false)

   return (
    <div className="App">
      <button onClick={() => setshow(!show)}>Tong le</button>
      {show && <Content />}
      
      <button onClick={() => setShowExercise(!showExercise)}>Exercise</button>
      {showExercise && < Exercise/>}

      <button onClick={() => setShowMyApp(!showMyApp)}>MyApp</button>
      {showMyApp && < MyApp/>}
    </div>
  )
}

export default App;
