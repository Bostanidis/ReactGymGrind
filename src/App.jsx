import { useState } from 'react'
import Hero from './components/Hero'
import Generator from './components/Generator'
import Workout from './components/Workout'
import { generateWorkout } from './utils/functions'




function App() {
  
  const [workout, setWorkout] = useState(null)
  const [poison, setPoison] = useState("individual")
  const [muscles, setMuscles] = useState([])
  const [goal, setGoal] = useState("strength_power")

  function updateWorkout() {
    if (muscles.length < 1) {
      return;
    }
  
    let newWorkout = generateWorkout({ poison, muscles, goal });
  
    // Wrap state update in a Promise
    new Promise((resolve) => {
      setWorkout(newWorkout);
      resolve();
    }).then(() => {
      // Redirect after state is updated
      window.location.href = "#workout";
    });
  }

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base">
      <Hero />
      <Generator updateWorkout={updateWorkout} poison={poison} setPoison={setPoison} muscles={muscles} setMuscles={setMuscles} goal={goal} setGoal={setGoal}/>
      {workout && (<Workout workout={workout}/>)}
    </main>
  )
}

export default App
