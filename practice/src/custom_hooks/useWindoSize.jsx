import React from 'react'
import { useState,useEffect } from 'react'

const useWindoSize = () => {
    const [windowsize, setWindowsize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    useEffect(() => {

        const handleresize = () => {
            setWindowsize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        window.addEventListener("resize", handleresize)

        return () => {
            window.removeEventListener("resize", handleresize);

        }
    }, [])



    return windowsize;
}

export default useWindoSize