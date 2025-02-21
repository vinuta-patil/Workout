import {createContext, useReducer} from 'react'

//Creates a WorkoutsContext, which will be used to store and share workout data globally.
export const WorkoutsContext = createContext()

const workoutsReducer = (state, action) => {
    switch (action.type) {
        case "SET_WORKOUTS":
            return { workouts: action.payload };
        case "CREATE_WORKOUTS":
            return { workouts: [action.payload, ...state.workouts] };
        case "DELETE_WORKOUT":
            return {
                workouts: state.workouts.filter((w) => w._id !== action.payload._id) 
            };
        default:
            return state;
    }
};

//Defines the context provider, which will wrap the entire app.
//A ContextProvider is used to store global state and share data across multiple components without prop drilling.
export const WorkoutsContextProvider = ({children})=>
{
    const [state, dispatch] = useReducer(workoutsReducer,{
        workouts:null
    })
    //dispatch({type:'SET_WORKOUTS', payload:[{},{}]})
    return (
        <WorkoutsContext.Provider value={{...state, dispatch} }>
            {children}
        </WorkoutsContext.Provider>
    )
}