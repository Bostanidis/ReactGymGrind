import React from 'react'
import SectionWrapper from "./SectionWrapper"
import ExerciseCard from './ExerciseCard'


export default function Workout(props) {
  const { workout } = props 
  return (

    <SectionWrapper id={"workout"} header={"welcome to"} title={["The", "DANGER", "zone"]}>
      <div className='flex flex-col gap-10'>
        {workout.map((exercise, index) => {
          return (
            <ExerciseCard index={index} exercise={exercise} key={index}/>
          )
        })}
      </div>
    </SectionWrapper>

  )
}
