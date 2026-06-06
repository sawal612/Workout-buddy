const workout = require("../Models/workoutModel");
// importing the workoutModel to interact with the workouts collection in the database

const mongoose = require('mongoose')
//if you see if we dont write a valid id it will throw an error and app will crash so in order to solve this we r imprtig this 
// because we will us !mongoose condition


// get all workouts from the database and send it to the client
exports.getAllworkouts = async (req,res) => {
    try {
        const workouts = await (workout.find()).sort({createdAt : -1}); // .find() is a mongoose method that is used to find all the documents in the collection and it returns a promise that resolves to an array of documents
        if(!workouts){
            res.status(400).json({
                message: "no workouts added"
            })
        } 
        res.status(200).json({
            success : true,
            data : workouts,
            message : "all the workouts are here"
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : "error fetching workouts",
            error : error.message
        })
    }
}

// get a single workout by id from the database and send it to the client
exports.findWorkout = async (req,res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({
            message : "no such workout"
        })
    }
    try {
    const Workout = await workout.findById(id)
    res.status(200).json({
        message: "here is the note",
        data : Workout
    })
    } catch(error){
        console.log(error)
    }

}

// create a new workout in the database and send a response to the client
exports.createWorkout = async (req,res) => {
    const {title , load , reps } = req.body
   try {
    const newWorkout = await workout.create({title , load , reps})
    // .create is a mongoose method that is used to create a new document in the database its parameters are the object that we want to create in the database and it returns a promise that resolves to the created document
    // isme parameters me humne title , load aur reps ko destructure kiya hai req.body se kyuki hume unhi 3 fields ki zarurat hai workout create karne ke liye
    // desctructuring se hum directly title , load aur reps ko use kar sakte hai bina req.body ke prefix ke
    res.status(200).json({
        message : "new workout added"
    })
   } catch(error) {
        res.status(400).json({
            error: error.message
        })
   }
}
// delete a workout by id from the database and send a response to the client
exports.deleteWorkout = async (req ,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({
            message : "no such workout exists"
        })
    }
    try {
        const newWorkout = await workout.findByIdAndDelete(id)
        res.json({
            message : "deleted note successfully"
        })
    } catch(error) {
        res.status(400).json({
            message : error
        })
    }
}

// update a workout by id in the database and send a response to the client
exports.updateWorkout = async (req,res) => {
    const {id} = req.params
    const {title , load , reps} = req.body;
    try {
        const updatedWorkout = await workout.findByIdAndUpdate(id, {title , load ,reps} , {
            new : true // if we dont add it yeh data mai (neeche) purana data hi throw karega
            // can also use spread operator ref: controllers part -2 
        })
        res.status(200).json({
            message : "note updated successfully",
            data : updatedWorkout
        })
    } catch(error) {
        res.status(500).json({
            message: error
        })
    }
} 