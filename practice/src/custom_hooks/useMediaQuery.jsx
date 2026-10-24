import React from 'react'
import { useState, useEffect } from 'react'

const useMediaQuery = (query) => {

    // Media query match ho rahi hai ya nahi usko store karega
    const [matches, setMatches] = useState(() => {

        // Initial render par media query ka result lo
        return window.matchMedia(query).matches;
    })

    useEffect(() => {

        // MediaQueryList object create karo
        const media = window.matchMedia(query);

        // Jab media query ka result change ho to state update karo
        const handleChange = (event) => {
            setMatches(event.matches)
        } // Is function ko useEffect ke bahar bhi bana sakte hain

        // Media query ke change event ko listen karo
        media.addEventListener("change", handleChange);

        // Cleanup function
        // Component unmount ya query change hone par listener remove kar do
        return () => {
            media.removeEventListener("change", handleChange);

        }
    }, [query])

    // Current media query result return karo
    return matches;
}

export default useMediaQuery;