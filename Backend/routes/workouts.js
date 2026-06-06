const express = require("express");

const router = express.Router();

const {getAllworkouts , createWorkout, findWorkout, deleteWorkout, updateWorkout} = require('../controllers/workoutcontroller.js')

router.use(express.json())

/**
 * Route : /api/workouts/
 * Method : GET
 * Description : Get all workouts
 * Access : Public
 */
router.get("/", getAllworkouts)
/**
 * Route : /api/workouts/:id
 * Method : GET
 * Description : Get a single workout by id
 * Access : Public
 */
router.get('/:id', findWorkout)

/** 
 * Route : /api/workouts/
 * Method : POST
 * Description : Create a new workout
 * Access : Public
 */

router.post('/', createWorkout)

/**
 * Route : /api/workouts/:id
 * Method : DELETE
 * Description : Delete a workout by id
 * Access : Public
 */
router.delete('/:id', deleteWorkout)

/**
 * Route : /api/workouts/:id
 * Method : PATCH
 * Description : Update a workout by id
 * Access : Public
 */
router.patch('/:id' , updateWorkout)
module.exports = router;