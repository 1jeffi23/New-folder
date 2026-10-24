import React from 'react'
import { useState,useEffect } from 'react'

const useLocalStorage = (key,initialval) => {
    //for initial value
    //lazy initialization- runs only on first render useState(()=>{})
    const [value,setValue] = useState(()=>{
        try{
            const storedval = localStorage.getItem("key");
        if(storedval!==null){
            return JSON.parse(storedval);
        }
        return initialval;
        }
        catch(err){
           console.log(err);
        }
    })

    useEffect(() => {
    
     try{
         localStorage.setItem("key",JSON.stringify(value));
     }catch(err){
        console.log(err);
     }
    
    }, [key,value])
    
    

  return  [value,setValue];
}

export default useLocalStorage