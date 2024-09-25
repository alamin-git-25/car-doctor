
import ServDel from '@/app/(home)/component/ServDel';
import Image from 'next/image';
import React from 'react';

const page = async ({ params }) => {
    const res = await fetch(`http://localhost:3000/api/alamin/${params.id}`);
    const data = await res.json();
    console.log(data);

    const { title, img, price, description, facility } = data
   
    return (
        <div>
            <div className='container mx-auto relative rounded-lg'>
                <div className='w-full h-[40vh] z-[10] absolute bg-black/45'></div>
                <div className="card bg-black image-full w-full rounded-lg h-[40vh] shadow-xl">
                    <figure>
                        <Image src={img} width={1090} height={1080} alt='detaile' className='w-full h-[50vh]' />
                    </figure>
                    <div className=" flex w-[30%] z-[30] justify-center ">
                        <h2 className="card-title text-5xl font-bold text-white">Service Details</h2>

                    </div>
                </div>
            </div>
            <ServDel data={data}/>
        </div>
    );
};

export default page;


