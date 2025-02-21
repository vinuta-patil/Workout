const express =require('express')
const {createWorkout,getWorkout,getWorkouts,updateWorkout,deleteWorkout} = require('../controllers/workoutControllers')
const requireAuth = require('../middleware/requireAuth')
const router =express.Router()


//require auth for all workout routes
router.use(requireAuth)
//GET all workout
router.get('/',getWorkouts)
//Get single workout
router.get('/:id',getWorkout)

//POST workout
router.post('/',createWorkout) 

//PATCH single workout

router.patch('/:id',updateWorkout)

//DELETE
router.delete('/:id',deleteWorkout)


module.exports=router