import React from 'react'
import { useGetProductByIdQuery, useGetProductsQuery } from '../Redux/Services/product'

const app = () => {
    const {
        data: productsdata,
        isLoading: productLoading,
        error: producterror } = useGetProductsQuery();

    const {
        data: selectedproduct,
        isLoading: selectedLoading,
        error: selectederror } = useGetProductByIdQuery(9);

    return (
        <div>
            <div>{productLoading && <h3>Loading...</h3>}

                {producterror && <h3>something went wrong</h3>}
                {productsdata?.products.map((product) => (
                    <div style={{ border: "2px dashed black", padding: "12px", margin: "12px", }} key={product.id}>
                        <p>{product.title}</p>
                    </div>
                ))}</div>

            <div>
                <h4>fetching  single product</h4>
                {selectedLoading && <h3>Loading...</h3>}

                {selectederror && <h3>something went wrong</h3>}
                {selectedproduct ?
                    <div style={{ border: "2px dashed black", padding: "12px", margin: "12px", }} key={selectedproduct.id}>
                        <p>{selectedproduct.title}</p>
                    </div> : <h1>error</h1>
                }
            </div>


        </div>
    )
}

export default app