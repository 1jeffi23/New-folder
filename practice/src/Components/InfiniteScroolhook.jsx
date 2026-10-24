import React, { useState, useEffect } from 'react'
import useInfiniteScroll from '../custom_hooks/useInfiniteScroll';
import useFetch from '../custom_hooks/useFetch';

const InfiniteScroolhook = () => {
    const { page, loaderref } = useInfiniteScroll();
    console.log("Current Page:", page);


    const limit = 10;

    const url = `https://dummyjson.com/products?limit=${limit}&skip=${(page - 1) * limit}`;

    const { data, loading, error } = useFetch(url);

    const [products, setProducts] = useState([]);

    if (error) {
        return <h2>{error.message}</h2>;
    }

    useEffect(() => {


        if (data.products) {
            setProducts((prev) => {
                return [...prev, ...data.products];
            });
        }
    }, [data]);


    return (
        <div>
            {products.map((product) => (
                <div className='outline-dashed p-3 m-3' key={product.id}>
                    <h3>{product.title}</h3>
                    <p>{product.price}</p>
                </div>
            ))}

            <div ref={loaderref} style={{
                height: "50px"
            }}>
                {loading && <p>Loading...</p>}
            </div>
        </div>
    );

}

export default InfiniteScroolhook;