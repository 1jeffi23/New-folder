import React, { useEffect, useState } from 'react'

const useDarkmode = () => {

    // Theme ki initial value localStorage se lo
    // Agar "theme" dark ho to isDark true hoga, warna false
    const [isDark, setIsDark] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    })

    // Theme toggle karne wala function
    // true ko false aur false ko true bana dega
    const toggleTheme = () => {
        setIsDark(prev => !prev); // or setIsDark(!isDark);
    }

    useEffect(() => {

        // Agar dark mode on ho
        if (isDark) {

            // HTML element par "dark" class add karo
            document.documentElement.classList.add("dark");

            // Theme ko localStorage mein save karo
            localStorage.setItem("theme", "dark");
        }
        else {

            // Agar light mode ho to "dark" class remove kar do
            document.documentElement.classList.remove("dark");

            // Theme ko localStorage mein update karo
            localStorage.setItem("theme", "light");
        }

        // isDark change hote hi ye effect dobara chalega
    }, [isDark])

    // Current theme aur toggle function return karo
    return [isDark, toggleTheme];
}

export default useDarkmode;