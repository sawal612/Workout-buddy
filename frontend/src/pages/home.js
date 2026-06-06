import React from 'react'
import { useEffect, useState } from 'react'
import WorkoutDetails from '../components/workoutDetails'
import WorkoutForm from '../components/WorkoutForm'


const Home = () => {

  const [workouts , setWorkouts] = useState([])
  
  const fetchWorkouts = async () => {
    const response = await fetch('https://workout-buddy-backend-1xnj.onrender.com/api/workouts')
    const json = await response.json();

    if(response.ok) {
      setWorkouts(json.data)
        // hamne json.data ko setWorkouts me pass kiya hai kyuki hamne backend me response me data field me workouts bheje the, to json.data me hi workouts milenge, agar ham json ko directly setWorkouts me pass kar dete to workouts nahi milte kyuki json me data ke andar hi workouts hote hai. isliye hamne json.data ko setWorkouts me pass kiya hai taki workouts state variable me workouts ka array store ho jaye aur hum usse apne component me use kar sake.
        // workouts.map is not a function error isliye aata hai kyuki initially workouts state variable null hota hai, to jab hum uspar map function call karte hai to error aata hai kyuki null par map function call nahi kar sakte. isliye hamne workouts && workouts.map ka use kiya hai taki jab workouts null na ho tabhi map function call ho, isse pehle workouts null hota hai to map function call nahi hota aur error nahi aata. jab response.ok true hota hai to setWorkouts(json.data) call hota hai aur workouts state variable me json.data ka value store ho jata hai, jisse workouts ab null nahi hota aur map function call ho jata hai, isse pehle workouts null hota hai to map function call nahi hota aur error nahi aata.
        //workouts.map is not a function means you're trying to call .map() on something that is not an array.
    }
  }
  
  useEffect( () => {
    fetchWorkouts();
  } , [])
  return (
    <div className='home'>
        <div className='workouts'>
          { 
            workouts.length === 0 ? (
              <p>No workouts found. Add your first workout! 💪</p>
            ) : (
            workouts && workouts.map((workout) => (
              <div>
              <WorkoutDetails key={workout._id} workout={workout} onWorkoutDeleted={fetchWorkouts} />
              </div>
            )) 
          )}
        </div>
        <WorkoutForm 
        onWorkoutAdded={fetchWorkouts} 
        />
    </div>
  )
}

export default Home