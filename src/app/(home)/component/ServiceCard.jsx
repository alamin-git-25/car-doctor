import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';



const ServiceCard = ({service}) => {
    const {title, description,img, price, facility, _id}= service;
  
    
    return (
        <div>
             <div className="overflow-hidden cursor-pointer rounded bg-white h-full text-slate-500 shadow-md shadow-slate-200">
        {/*  <!-- Image --> */}
        <figure>
          <Image src={img} width={500} height={500} alt='service' className='aspect-auto object-cover w-[100%] h-[308px] p-2'/>
        </figure>
        {/*  <!-- Body--> */}
        <div className="p-6">
          <header className="mb-4">
            <h3 className="text-2xl font-bold text-black">
            {title}
            </h3>
           
          </header>
         {/* <div>
            {
                facility.map((feq,index)=><li key={index}>{feq.name}</li>)
            }
         </div> */}
      
        </div>
        {/*  <!-- Action base sized basic button --> */}
       
        <div className="flex justify-between items-center p-5 pt-0">
        <p className=" text-black"> ${price}</p>
          <Link href={`/serviceDetails/${_id}`} className="btn btn-primary">
            <span>Order now!</span>
          </Link>
        </div>
      
      </div>
      
        </div>
    );
};

export default ServiceCard;