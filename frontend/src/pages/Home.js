import { useEffect } from "react";
import {useAuthContext} from "../hooks/useAuthContext"
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/workoutForm";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
const Home= ()=>{
    //const[workouts,setWorkouts] = useState(null) // instead of this we will be using context to avoid prop drilling 
    const {workouts, dispatch} = useWorkoutsContext()
    const {user} = useAuthContext()
    useEffect(()=>{
        const fetchWorkouts = async ()=>{
            const response = await fetch('/api/workouts',{
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if(response.ok){
                dispatch({type:'SET_WORKOUTS',payload:json})
            }
        }
        //if we have a value for the user the only it fetchs the workouts
        if(user){ fetchWorkouts()}
       
    },[dispatch,user])

    return (
        <div className="home">
          <div className="workouts">
            {workouts && workouts.map((workout)=>(
                <WorkoutDetails key={workout._id} workout={workout}/>
            ))}
          </div>
          <WorkoutForm/>
        </div>
    )
}
export default Home;