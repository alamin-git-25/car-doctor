import Image from 'next/image';
import React from 'react';

const Product = ({product}) => {
    const {name,price,image} = product
    return (
        <div className='container mx-auto'>
             <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
        {/*  <!-- Image --> */}
        <figure>
        <Image src={image} width={500} height={300} alt='product'  className='object-contain w-[100%] h-[10%] p-6'/>
        </figure>
        {/*  <!-- Body--> */}
        <div className="p-6">
          <header className="mb-4">
            <h3 className="text-xl font-medium text-slate-700">
             {name}
            </h3>
            <p className=" text-slate-400"> ${price}</p>
          </header>
         
        </div>
        {/*  <!-- Action base sized basic button --> */}
        <div className="flex justify-end p-6 pt-0">
          <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
            <span>Order now!</span>
          </button>
        </div>
      </div>
        </div>
    );
};

export default Product;