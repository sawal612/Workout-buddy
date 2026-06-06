// schema of workouts

const mongoose = require('mongoose');
// importing mongoose module to create a schema for the workouts collection in the database
const Schema = mongoose.Schema;
// .Schema is a constructor function that is used to create a new schema for the workouts collection in the database

const workoutSchema = new Schema ({
    title : {
        type : String,
        required : true
    } , 
    reps : {
        type : Number,
        required : true
    }, 
    load : {
        type : Number,
        required : true
    }
} , {timestamps : true})
// creating a new schema for the workouts collection in the database with the fields title, reps, load and timestamps
// timestamps is an option that is used to automatically add createdAt and updatedAt fields to the schema

module.exports = mongoose.model('workout', workoutSchema)
    


