import React , {useState} from 'react'

const WorkoutForm = ({ onWorkoutAdded }) => {
    const [title , setTitle] = useState('')
    const [reps , setReps] = useState('')
    const [load , setLoad] = useState('')
    const [error , setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();
        //now we want to add below data in post request 
        const workout = {title ,reps , load}
        const response = await fetch('https://workout-buddy-backend-1xnj.onrender.com/api/workouts' , {
            method : "POST",
            body : JSON.stringify(workout) ,
            headers : {
                'Content-Type' : 'application/json',

            }
        })
        const json = await response.json();


        if(!response.ok){
            setError(json.error)
        } else{
             setError(null)
             setTitle('')
             setReps('')
             setLoad('')
             console.log("workout added",json)
             onWorkoutAdded();
        }
       
    }

  return (
    <form className='create'  onSubmit={handleSubmit}>
        <h3>Add a new workout💪</h3>

        <label>Exercise : </label>
        <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />

        <label>Load(in kgs): </label>
        <input type='number' value={load} onChange={(e) => setLoad(e.target.value)} />

        <label>Reps : </label>
        <input type='number' value={reps} onChange={(e) => setReps(e.target.value)} />

        <button type='submit'>Add workout</button>

        {/* <div className='error'>{error && error}</div> */}
        {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default WorkoutForm