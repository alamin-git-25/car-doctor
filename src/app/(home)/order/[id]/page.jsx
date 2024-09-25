
import Cheek from '@/app/(home)/component/Cheek';
import Image from 'next/image';
import React from 'react';

const page = async ({ params }) => {
    const res = await fetch(`http://localhost:3000/api/alamin/${params.id}`);
    const data = await res.json();
    console.log(data);
    const { img, price, title } = data
    

    return (
        <div className='h-screen'>
            <div className='container mx-auto relative rounded-lg custom-shad'>
                <div className='w-full h-[40vh] z-[10] absolute bg-black/55 rounded-lg'></div>
                <div className="card bg-black image-full w-full rounded-lg h-[40vh] shadow-xl">
                    <figure>
                        <Image src='/chek.jpg' width={1090} height={1080} alt='detaile' className='w-full h-[50vh]' />
                    </figure>
                    <div className=" flex w-[40%] z-[30] justify-center ">
                        <h2 className="card-title text-4xl font-bold text-white">Check Out <span className='text-primary'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z" clipRule="evenodd" />
                                <path fillRule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375Zm9.586 4.594a.75.75 0 0 0-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.116-.062l3-3.75Z" clipRule="evenodd" />
                            </svg>
                        </span><p className='text-3xl font-normal'>{title}</p> </h2> 

                    </div>
                </div>
            </div>
            <div className='container mx-auto mt-10'>
                <Cheek data={data} />
            </div>
        </div>
    );
};

export default page;