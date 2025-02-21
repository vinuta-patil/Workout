import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = ()=>{
    const [error, setError] =useState(null)//error state if the signup was successful
    const [isLoading, setIsLoading] =useState(null)//if we want to use loading state on the buttuon when we click
    const {dispatch} = useAuthContext()
    const  login= async(email,password)=>{
        setIsLoading(true)//loading state should be there when the user trying to login bcos he is under the process and it should be loading
        setError(null) // for new try of signup, the previous error should not be shownup

        //Makes an HTTP POST request to the backend route /api/user/signup
        const response = await fetch('/api/user/login'//sends a request to your backend API to sign up a new user
            ,{
            method: 'POST',
            headers:{'content-Type':'application/json'},//ensures the backend knows it's receiving JSON data
            body: JSON.stringify({email,password})//Sends { email, password } to the backend API 
        })
        const json = await response.json()
        if(!response.ok)
        {
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok)
        {
            //save the user to local storage
            localStorage.setItem('user',JSON.stringify(json))

            //update the auth context
            dispatch({type:'LOGIN',payload:json})

            setIsLoading(false)
        }
    }
 return {login,isLoading,error}
}