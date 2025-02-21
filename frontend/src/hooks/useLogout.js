//import { createContext } from "react"
import { useAuthContext } from "./useAuthContext"
import { useWorkoutsContext } from "./useWorkoutsContext"
export const useLogout = ()=>{
    const {dispatch}=useAuthContext()
    const {dispatch:workoutsDispatch}=useWorkoutsContext()

        const logout = () =>{
        //remove user from local storage
        localStorage.removeItem('user')
        
        //dispatch logout action Global state updates → user: null (so the UI updates)
        dispatch({type: 'LOGOUT'})
        //if the dispatch is not used, If you click Logout, local storage will be cleared, but: Refreshing the page → Logs the user out
// Before refreshing → UI might still show the user as logged in

        workoutsDispatch({type:'SET_WORKOUTS',payload:null})// by doing so, it will clear the global workout state and when we try to login as another user, it should not flash out the other user's workouts
    }

    return {logout}
}