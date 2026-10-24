import React from 'react'
import { useState,useEffect } from 'react'

const useDebounce = (value,delay) => {
    const [debounceval,setDebounceval] = useState(value);

    useEffect(() => {
      
        const timer = setTimeout(() => {
            setDebounceval(value);
        }, delay);
    
      return () => {
        clearTimeout(timer);
        
      }
    }, [value,delay])   
    // Kyunki agar future mein delay change ho jaye, to effect dobara run hoga 
    // aur naya timer updated delay ke saath create hoga.
    //  Agar delay dependency mein na ho, to effect stale (purani) delay value use kar sakta hai.
    


  return debounceval;
}

export default useDebounce