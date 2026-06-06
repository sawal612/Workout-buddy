import React from 'react'

const workoutDetails = ({workout , onWorkoutDeleted , onWorkoutUpdated}) => { // {workout} => destructuring props

const handleDelete = async () => {
    const response = await fetch(`https://workout-buddy-backend-1xnj.onrender.com/api/workouts/${workout._id}`, {
      method : 'DELETE'
    })
    if(response.ok) {
      onWorkoutDeleted();
    }
}

  return (
    <div className='workout-details'>
        <h4>{workout.title}</h4>
        <p><strong>Load(in kgs) {workout.load}</strong></p>
        <p><strong>reps : {workout.reps}</strong></p>
        <p>{workout.createdAt} </p>
        <div>
        <button className='del-btn' onClick={handleDelete}>Delete🗑️</button>
        </div>


    </div>
  )
}

export default workoutDetails