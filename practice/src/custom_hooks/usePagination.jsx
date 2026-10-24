import { useState } from 'react'

const usePagination = (data, itemsperpage) => {

    // Current page ko store karega
    const [currentpage, setCurrentpage] = useState(1);

    // Current page ka starting index calculate karo
    const startIndex = (currentpage - 1) * itemsperpage;

    // Current page ka ending index calculate karo
    // slice() last index ko include nahi karta
    const lastIndex = startIndex + itemsperpage;

    // Total pages calculate karo
    // Agar data undefined ho to length ko 0 consider karo
    const totalPages = Math.ceil((data?.length || 0) / itemsperpage);

    // Sirf current page ka data nikalo
    // Agar data na ho to empty array return karo
    const currentData = data?.slice(startIndex, lastIndex) || [];

    // Next page par jao
    // Lekin total pages se aage mat jao
    const nextPage = () => {
        setCurrentpage((prev) => {
            return Math.min((prev + 1), totalPages)
        })
    };

    // Previous page par jao
    // Lekin page 1 se peeche mat jao
    const prevPage = () => {
        setCurrentpage((prev) => {
            return Math.max((prev - 1), 1)
        })
    };

    // Kisi bhi specific page par jao
    // Page number ko 1 aur totalPages ke beech hi rakho
    const gotoPage = (page) => {
        setCurrentpage(Math.max(1, Math.min(page, totalPages)))
    };

    // Hook se required values aur functions return karo
    return {
        currentpage,
        totalPages,
        currentData,
        nextPage,
        prevPage,
        gotoPage
    };
}

export default usePagination;