import Image from 'next/image';
import React from 'react';
const Whay = () => {
    return (
        <div className='container mx-auto mt-20 custom-shad p-4'>
            <div className=''>
                <h3 className='text-center text-primary'>Core Features</h3>
                <h3 className='text-center text-4xl my-5'>Why Choose Us</h3>
                <h3 className='text-center text-xl mb-5'>the majority have suffered alteration in some form, by injected humour, or randomised words which don&#39;t look even slightly believable. </h3>
            </div>
            <div className='flex gap-10 justify-center'>
<Image src='/s1.png' width={200} height={200} sizes='100%' alt='service' className='w-[10%] object-contain'/>
<Image src='/s2.png' width={200} height={200} sizes='100%' alt='service' className='w-[10%] object-contain'/>
<Image src='/s3.png' width={200} height={200} sizes='100%' alt='service' className='w-[10%] object-contain'/>
<Image src='/s4.png' width={200} height={200} sizes='100%' alt='service' className='w-[10%] object-contain'/>
<Image src='/s5.png' width={200} height={200} sizes='100%' alt='service' className='w-[10%] object-contain'/>
<Image src='/s6.png' width={200} height={200} sizes='100%' alt='service' className='w-[10%] object-contain'/>
            </div>
        </div>
    );
};

export default Whay;