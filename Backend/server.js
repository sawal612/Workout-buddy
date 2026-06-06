const express = require('express');
// importing express module
const dotenv = require('dotenv');
// importing dotenv module to load environment variables from .env file
const mongoose = require('mongoose');
// importing mongoose module to connect to MongoDB database

const cors = require('cors')

const workoutRoutes = require('./routes/workouts.js');

dotenv.config();
// loading environment variables from .env file

const app = express();
// creating an instance of express

app.use(cors());

const PORT = process.env.PORT;
// defining a port number for the server to listen on

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); // calling next() to pass control to the next middleware function in the stack
});
// middleware to parse incoming JSON data in the request body
// req is the request object, it contains information about the incoming request such as the URL, method, headers, and body
// res is the response object, it is used to send a response back to the client
// next is a function that is used to pass control to the next middleware function in the stack

app.use('/api/workouts/', workoutRoutes);
// using the workoutRoutes for any request that starts with /api/workouts

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('connected to the database');
    app.listen(PORT , () => {
        console.log(`server is running on port http://localhost:${PORT}`);
    })
}).catch((error) => {
    console.log('error connecting to the database', error);
})

app.get('/', (req, res) => {
   res.status(200).json({
    message: "welcome to the workout buddy app"
   })
});


// starting the server and listening on the defined port, and logging a message to the console when the server is running