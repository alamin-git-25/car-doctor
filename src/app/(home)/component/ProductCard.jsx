import React from 'react';
import { getAllProducts } from '../lib/Database/Query/getService';
import Product from './Product';

const ProductCard = async () => {
    const data = await getAllProducts()

    
    return (
        <div  className='container mx-auto mt-10 p-4 custom-shad'>
            <h3 className='text-center text-primary'>Popular Products</h3>
            <h3 className='text-center text-6xl my-5'>Browse Our Products</h3>
            <p className='text-center text-xl'>the majority have suffered alteration in some form, by injected humour, or randomised words which don&#39;t look even slightly believable. </p>
            <div className='grid grid-cols-3 gap-4 my-10'>
                {
                    data.map((product, index)=><Product key={index} product={product}/>)
                }
            </div>
        </div>
    );
};

export default ProductCard;