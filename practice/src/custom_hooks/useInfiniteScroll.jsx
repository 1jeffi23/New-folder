import React, { useEffect, useRef, useState } from 'react'

const useInfiniteScroll = () => {

    // Current page number store karega
    const [page, setPage] = useState(1);

    // Loader div ka DOM reference store karega
    const loaderref = useRef(null);

    useEffect(() => {

        // Scroll Event Approach ...Har scroll par function execute hota hai.
        // const handleScroll = () => {
        //   if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight) {
        //      setPage((prev) => prev + 1);
        //   }
        // }
        // window.addEventListener("scroll", handleScroll);

        // Intersection Observer ....its just for performance optimization 
        //Sirf jab target element viewport mein aaye ya bahar jaye tab callback execute hoti hai.
        const Observer = new IntersectionObserver((enteries) => {

            // Observe kiye gaye element ki information
            const entry = enteries[0];

            // Agar loader viewport ke andar aa jaye aur user ne thoda scroll bhi kiya ho
            if (entry.isIntersecting && window.scrollY > 0) {

                // Next page load karo
                setPage((prev) => prev + 1);
            }

        });

        // Agar loader div DOM mein exist karti haito usko observe karna shuru karo
        if (loaderref.current) {
            Observer.observe(loaderref.current);
        }

        // Cleanup Function
        return () => {

            // Component unmount hone par observer ko remove kar do
            Observer.unobserve(loaderref.current);

        };

    }, []);

    // Current page aur loader reference return karo
    return { page, loaderref };
}

export default useInfiniteScroll;